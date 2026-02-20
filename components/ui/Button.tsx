import { ButtonHTMLAttributes, forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-none font-medium transition-all duration-500 focus:outline-none focus:ring-1 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95 uppercase tracking-[0.2em] relative overflow-hidden group",
                    {
                        "bg-primary text-white hover:bg-secondary border border-transparent":
                            variant === "primary",
                        "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white":
                            variant === "secondary" || variant === "outline", // Combined secondary/outline
                        "text-primary hover:bg-neutral-100 hover:text-secondary": variant === "ghost",

                        "h-10 px-6 text-[10px]": size === "sm",
                        "h-12 px-8 text-xs": size === "md",
                        "h-14 px-10 text-sm": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button, cn };
