"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show button after a small delay to not block initial view
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <a
            href="https://wa.me/919978843336?text=Hi,%20I%20am%20interested%20in%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            )}
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-6 h-6 fill-current" />
            <span className="font-semibold hidden md:inline">Chat with us</span>
        </a>
    );
}
