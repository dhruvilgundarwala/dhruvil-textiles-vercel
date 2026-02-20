import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";

const productSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    description: z.string().optional(),
    price: z.number().positive("Price must be a positive number"),
    userId: z.string().cuid(),
});

export async function GET() {
    try {
        const products = await prisma.product.findMany({
            include: { user: { select: { name: true, email: true } } },
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(products);
    } catch (error) {
        console.error("[PRODUCTS_GET]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validatedData = productSchema.parse(body);

        const product = await prisma.product.create({
            data: validatedData,
        });

        return NextResponse.json(product);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(error.issues, { status: 400 });
        }
        console.error("[PRODUCTS_POST]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
