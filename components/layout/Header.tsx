"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "glass py-2"
                    : "bg-transparent py-6"
            )}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 relative z-50">
                        <Image
                            src="/logo.png"
                            alt="Dhruvil Textiles Logo"
                            width={120}
                            height={80}
                            className={cn(
                                "w-auto object-contain transition-all duration-500",
                                scrolled ? "h-10" : "h-14 md:h-16"
                            )}
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navigation.map((item, i) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-xs font-medium uppercase tracking-widest hover:text-secondary transition-colors relative group",
                                    scrolled ? "text-primary" : "text-white" // Assumes hero is dark. If hero is light, needs logic. 
                                    // NOTE: Since global hero bg-neutral-900, white is correct for initial state.
                                )}
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                        <Button size="sm" variant={scrolled ? "primary" : "outline"} asChild className={cn(
                            !scrolled && "border-white text-white hover:bg-white hover:text-primary"
                        )}>
                            <a href="tel:+919978843336" className="gap-2">
                                <Phone className="w-3 h-3" />
                                <span>+91 99788 43336</span>
                            </a>
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={cn("md:hidden p-2 relative z-50", scrolled ? "text-primary" : "text-white")}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden bg-background fixed inset-0 z-40 flex items-center justify-center"
                    >
                        <div className="px-4 py-8 space-y-6 text-center">
                            {navigation.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-3 py-2 text-2xl font-serif font-bold text-primary hover:text-secondary transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="pt-8"
                            >
                                <Button className="w-full max-w-xs mx-auto" size="lg" asChild>
                                    <a href="tel:+919978843336" className="gap-2">
                                        <Phone className="w-4 h-4" />
                                        Call Now
                                    </a>
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
