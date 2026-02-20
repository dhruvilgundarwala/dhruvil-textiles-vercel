"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/ui/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Reveal, FadeIn } from "@/components/ui/Reveal";

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="pt-24 bg-[#F4F4F2] min-h-screen flex flex-col">
                <section className="flex-grow container mx-auto px-4 py-20 lg:py-32">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start">
                        {/* Left Side - Info */}
                        <div className="space-y-12">
                            <FadeIn>
                                <span className="text-secondary uppercase tracking-[0.3em] text-xs font-bold">Get In Touch</span>
                                <h1 className="text-5xl md:text-6xl font-serif font-medium mt-6 mb-8 text-primary">Let's start a conversation.</h1>
                                <p className="text-neutral-600 text-lg leading-relaxed max-w-lg font-light">
                                    Whether you need a custom quote for bulk orders or have questions about our manufacturing process, our team is here to assist you.
                                </p>
                            </FadeIn>

                            <Reveal delay={0.2}>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm shadow-sm shrink-0">
                                            <MapPin className="w-5 h-5 text-secondary" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif font-bold text-primary text-xl mb-2">Visit Factory</h3>
                                            <p className="text-neutral-500 leading-relaxed">
                                                B-10, Sai Nath Society, CNG Pump in Gali,<br />
                                                Bhatar Char Rasta, Surat, Gujarat, India
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm shadow-sm shrink-0">
                                            <Phone className="w-5 h-5 text-secondary" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif font-bold text-primary text-xl mb-2">Call Us</h3>
                                            <a href="tel:+919978843336" className="text-neutral-500 hover:text-secondary transition-colors text-lg font-medium">+91 99788 43336</a>
                                            <p className="text-xs text-secondary mt-1 uppercase tracking-widest">Available on WhatsApp</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm shadow-sm shrink-0">
                                            <Mail className="w-5 h-5 text-secondary" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif font-bold text-primary text-xl mb-2">Email</h3>
                                            <a href="mailto:dhruviltextiles.owner@gmail.com" className="text-neutral-500 hover:text-secondary transition-colors">dhruviltextiles.owner@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        {/* Right Side - Form */}
                        <FadeIn delay={0.4} className="w-full">
                            <div className="bg-white p-8 md:p-12 shadow-2xl shadow-neutral-200/50 rounded-sm">
                                <ContactForm />
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Map Strip */}
                <section className="h-[400px] w-full bg-neutral-200 relative grayscale hover:grayscale-0 transition-all duration-700 group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238129.06792369747!2d72.52487182617185!3d21.161681372089323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fc33b135d37%3A0xdc751e22f23cde1d!2sDhruvil%20textiles!5e0!3m2!1sen!2sin!4v1770968402031!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="opacity-80 hover:opacity-100 transition-opacity"
                    ></iframe>

                    {/* Clickable Overlay to Open Google Maps */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <a
                            href="https://maps.app.goo.gl/iNiTazdMr49LPqj16"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pointer-events-auto bg-primary text-white px-8 py-4 rounded-sm shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 flex items-center gap-3 font-medium hover:bg-secondary"
                        >
                            <MapPin className="w-5 h-5" />
                            Open in Google Maps
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
