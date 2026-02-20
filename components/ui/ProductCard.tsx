import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    title: string;
    description: string;
    image?: string; // Placeholder for now
    href: string;
    className?: string;
    specs?: { label: string; value: string }[];
}

export function ProductCard({
    title,
    description,
    href,
    className,
    specs,
    image,
}: ProductCardProps) {
    return (
        <div
            className={cn(
                "group relative bg-white transition-all duration-500 hover:shadow-2xl overflow-hidden flex flex-col h-full",
                className
            )}
        >
            {/* Product Image */}
            <div className="aspect-[4/5] bg-neutral-100 relative overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                ) : (
                    <>
                        <div className="absolute inset-0 bg-neutral-200/50 group-hover:scale-110 transition-transform duration-700 ease-out" />
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-400 font-serif italic z-10">
                            Product Image
                        </div>
                    </>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-20" />
            </div>

            <div className="p-8 flex flex-col flex-grow relative z-30 bg-white -mt-10 mx-4 shadow-sm mb-4 transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-2xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {title}
                </h3>
                <p className="text-neutral-500 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                    {description}
                </p>

                {specs && (
                    <div className="mb-6 space-y-2 border-t border-neutral-100 pt-4">
                        {specs.map((spec) => (
                            <div key={spec.label} className="flex justify-between text-xs tracking-widest uppercase text-neutral-400">
                                <span>{spec.label}</span>
                                <span className="font-medium text-primary">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                )}

                <Button
                    variant="outline"
                    className="w-full mt-auto"
                    asChild
                >
                    <Link href={href}>
                        View Details <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
