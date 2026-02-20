import { HTMLAttributes, forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SectionProps extends HTMLAttributes<HTMLElement> {
    container?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, container = true, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn("py-16 md:py-24 relative overflow-hidden", className)}
                {...props}
            >
                {container ? (
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        {children}
                    </div>
                ) : (
                    children
                )}
            </section>
        );
    }
);

Section.displayName = "Section";

export { Section };
