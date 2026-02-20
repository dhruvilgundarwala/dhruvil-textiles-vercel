import { NextResponse } from "next/server";

// Sample mock data now that Prisma is removed
const mockProducts = [
    {
        id: "1",
        name: "Bullet Dori",
        description: "High-quality bullet dori for industrial use.",
        price: 150.0,
        user: { name: "Admin", email: "admin@example.com" },
        createdAt: new Date().toISOString(),
    },
    {
        id: "2",
        name: "Polyester Yarn",
        description: "Strong and durable polyester yarn.",
        price: 200.0,
        user: { name: "Admin", email: "admin@example.com" },
        createdAt: new Date().toISOString(),
    },
];

export async function GET() {
    try {
        // Returning mock data
        return NextResponse.json(mockProducts);
    } catch (error) {
        console.error("[PRODUCTS_GET]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        // In a production app without an ORM, you would handle DB connections here directly or via another library.
        // For now, we simulate a successful creation.
        const body = await req.json();

        return NextResponse.json({
            message: "Product creation simulated (Prisma removed)",
            received: body
        });
    } catch (error) {
        console.error("[PRODUCTS_POST]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
