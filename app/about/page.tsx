"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Award, Target, Users } from "lucide-react";
import { Reveal, FadeIn } from "@/components/ui/Reveal";

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="bg-[#F4F4F2]">
                {/* Header */}
                <section className="bg-primary py-32 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/pattern-dark.svg')] opacity-5" />
                    <div className="container mx-auto px-4 relative z-10">
                        <FadeIn>
                            <div className="mb-8 flex justify-center">
                                <img src="/logo.png" alt="Dhruvil Textiles Logo" className="h-24 w-auto" />
                            </div>
                            <span className="text-secondary uppercase tracking-[0.3em] text-xs font-bold">Our Legacy</span>
                            <h1 className="text-5xl md:text-7xl font-serif font-medium mt-6 mb-8 text-white">About Dhruvil Textiles</h1>
                            <p className="max-w-xl mx-auto text-neutral-400 text-lg leading-relaxed font-light">
                                Weaving trust and quality into every thread since 1997.
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* Story Section */}
                <Section>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <Reveal className="h-full">
                            <div className="bg-white aspect-[4/5] rounded-sm flex items-center justify-center relative overflow-hidden h-full shadow-xl border border-neutral-200">
                                <img src="/logo.png" alt="Dhruvil Textiles Logo" className="w-3/4 h-auto object-contain p-8" />
                            </div>
                        </Reveal>
                        <div>
                            <Reveal delay={0.2}>
                                <h2 className="text-4xl font-serif font-medium text-primary mb-8">Our Journey</h2>
                                <p className="text-neutral-600 mb-6 leading-relaxed text-lg">
                                    Established in 1997 by <strong>Manish Ishwarlal Gundarwala</strong>, Dhruvil Textiles started with a solitary vision: to provide the finest quality threads to Surat, the textile capital of India.
                                </p>
                                <p className="text-neutral-600 mb-8 leading-relaxed text-lg">
                                    Over the decades, we have evolved from a modest unit into a manufacturing powerhouse with a monthly capacity of 12,000 KG. Our specialization in Multi-color Bullet Dori, which is widely used for embroidery cording thread and fancy lace manufacturing, has made us the preferred partner for lace manufacturers across India and abroad.
                                </p>
                            </Reveal>

                            <Reveal delay={0.4}>
                                <div className="border-l-2 border-secondary pl-8 py-4 my-10 relative">
                                    <p className="italic text-xl text-primary font-serif leading-relaxed">
                                        "Trust is our first priority. We believe in building long-term relationships through consistent quality."
                                    </p>
                                    <p className="text-xs text-neutral-400 font-bold uppercase tracking-widest mt-6">
                                        — Manish Ishwarlal Gundarwala, Founder
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </Section>

                {/* Values Section */}
                <Section className="bg-white">
                    <div className="text-center mb-20">
                        <Reveal>
                            <h2 className="text-4xl font-serif font-medium text-primary">Our Core Values</h2>
                        </Reveal>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Quality First", desc: "We never compromise on raw materials, ensuring high-tenacity and durability in every spool.", icon: Award },
                            { title: "Customer Focused", desc: "We offer customization in colors and specifications to meet unique client needs.", icon: Users },
                            { title: "Innovation", desc: "Continuously upgrading our manual and semi-auto processes to improve efficiency.", icon: Target },
                        ].map((value, i) => (
                            <Reveal key={i} delay={i * 0.15}>
                                <div className="text-center group p-6 hover:bg-[#F9F9F8] transition-colors rounded-sm h-full">
                                    <div className="w-16 h-16 mx-auto bg-secondary/10 flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform duration-500">
                                        <value.icon className="w-8 h-8 text-secondary" />
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-primary mb-4">{value.title}</h3>
                                    <p className="text-neutral-500 leading-relaxed font-light">{value.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Section>

                {/* CTA */}
                <Section className="text-center bg-primary text-white py-32">
                    <Reveal>
                        <h2 className="text-4xl font-serif font-medium mb-8">Ready to work with us?</h2>
                        <Button variant="secondary" size="lg" asChild className="border-white text-white hover:bg-white hover:text-primary">
                            <a href="/contact">Contact Our Sales Team</a>
                        </Button>
                    </Reveal>
                </Section>
            </main>
            <Footer />
        </>
    );
}
