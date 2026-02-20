import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <div>
                            <Image
                                src="/logo.png"
                                alt="Dhruvil Textiles Logo"
                                width={140}
                                height={100}
                                className="w-auto h-20 object-contain mb-2"
                            />
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Established in 1997, we are a trusted manufacturer of high-quality
                            Bullet Dori Yarn, Cotton Thread, and Yarns, serving domestic and export
                            markets with excellence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "/about" },
                                { name: "Our Products", href: "/products" },
                                { name: "Manufacturing", href: "/manufacturing" },
                                { name: "Contact Us", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral-400 hover:text-secondary transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-serif mb-6">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-neutral-400">
                                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                                <p className="text-sm">
                                    B-10, Sai Nath Society, CNG Pump in Gali, Bhatar Char Rasta,
                                    Surat, Gujarat, India
                                </p>
                            </div>
                            <div className="flex items-center gap-3 text-neutral-400">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <a href="tel:+919978843336" className="text-sm hover:text-white transition-colors">+91 99788 43336</a>
                            </div>
                            <div className="flex items-center gap-3 text-neutral-400">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <a href="mailto:dhruviltextiles.owner@gmail.com" className="text-sm hover:text-white transition-colors">dhruviltextiles.owner@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Business Hours */}
                    <div>
                        <h4 className="text-lg font-serif mb-6">Business Hours</h4>
                        <div className="space-y-2 text-sm text-neutral-400">
                            <p className="flex justify-between">
                                <span>Monday - Saturday</span>
                                <span className="text-white">10:00 AM - 6:00 PM</span>
                            </p>
                            <p className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-secondary">Closed</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-800 mt-16 pt-8 text-center text-sm text-neutral-500">
                    <p>&copy; {new Date().getFullYear()} Dhruvil Textiles. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
