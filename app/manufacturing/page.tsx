"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";
import { Reveal, FadeIn } from "@/components/ui/Reveal";

export default function ManufacturingPage() {
    return (
        <>
            <Header />
            <main className="bg-[#F4F4F2]">
                <section className="bg-primary py-32 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/pattern-dark.svg')] opacity-5" />
                    <div className="container mx-auto px-4 relative z-10">
                        <FadeIn>
                            <span className="text-secondary uppercase tracking-[0.3em] text-xs font-bold">Behind The Scenes</span>
                            <h1 className="text-5xl md:text-7xl font-serif font-medium mt-6 mb-8 text-white">Manufacturing & Quality</h1>
                            <p className="max-w-xl mx-auto text-neutral-400 text-lg leading-relaxed font-light">
                                Precision Engineering meets Traditional Experience.
                            </p>
                        </FadeIn>
                    </div>
                </section>

                <Section>
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <Reveal>
                                <h2 className="text-4xl font-serif font-medium text-primary mb-6">Production Capability</h2>
                                <p className="text-neutral-600 mb-8 leading-relaxed text-lg font-light">
                                    Our facility in Surat is equipped to handle large-scale orders with precision. While we value traditional craftsmanship, we employ efficient manual and semi-automated processes to ensure high output without compromising on the intricacies of the product.
                                </p>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <div className="bg-white p-8 rounded-sm shadow-xl shadow-neutral-200/50 border border-neutral-100">
                                    <h4 className="font-bold text-primary mb-6 uppercase tracking-widest text-xs">Key Metrics</h4>
                                    <div className="grid grid-cols-2 gap-8">
                                        <div>
                                            <p className="text-5xl font-serif text-secondary mb-2">12k</p>
                                            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">KG Monthly Capacity</p>
                                        </div>
                                        <div>
                                            <p className="text-5xl font-serif text-secondary mb-2">100%</p>
                                            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">On-Time Delivery</p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                        <div className="space-y-8">
                            <Reveal delay={0.3}>
                                <div className="h-72 bg-neutral-200 rounded-sm flex items-center justify-center text-neutral-400 font-serif italic relative overflow-hidden shadow-lg">
                                    <img src="/images/multiyarngroup.png" alt="Raw Material Storage" className="w-full h-full object-cover" />
                                </div>
                            </Reveal>
                            <Reveal delay={0.4}>
                                <div className="h-72 bg-neutral-200 rounded-sm flex items-center justify-center text-neutral-400 font-serif italic relative overflow-hidden shadow-lg ml-8">
                                    <img src="/images/groupofcon.png" alt="Spiraling/Winding Process" className="w-full h-full object-cover" />
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </Section>

                <Section className="bg-[#1A1A1A] text-white">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <Reveal>
                            <h2 className="text-4xl font-serif font-medium mb-6">Quality Assurance</h2>
                            <p className="text-neutral-400 text-lg font-light">
                                "Trust is first priority" is not just a slogan; it&apos;s our functional ethos. Every batch goes through rigorous checks.
                            </p>
                        </Reveal>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Raw Material Check", desc: "Detailed inspection of input yarns." },
                            { title: "In-Process Control", desc: "Monitoring tension and winding during production." },
                            { title: "Final Inspection", desc: "Tensile strength and color consistency verification." },
                        ].map((step, i) => (
                            <Reveal key={i} delay={i * 0.15}>
                                <div className="bg-white/5 p-8 rounded-sm backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors h-full">
                                    <CheckCircle2 className="w-10 h-10 text-secondary mb-6" />
                                    <h3 className="text-xl font-serif font-medium mb-3">{step.title}</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
