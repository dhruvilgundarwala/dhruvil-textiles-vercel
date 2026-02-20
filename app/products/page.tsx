"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal, FadeIn } from "@/components/ui/Reveal";

export default function ProductsPage() {
    return (
        <>
            <Header />
            <main className="bg-[#F4F4F2]">
                <section className="bg-primary py-32 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/pattern-dark.svg')] opacity-5" />
                    <div className="container mx-auto px-4 relative z-10">
                        <FadeIn>
                            <span className="text-secondary uppercase tracking-[0.3em] text-xs font-bold">Manufacturing Excellence</span>
                            <h1 className="text-5xl md:text-7xl font-serif font-medium mt-6 mb-8 text-white">Product Catalogue</h1>
                            <p className="max-w-xl mx-auto text-neutral-400 text-lg leading-relaxed font-light">
                                Browse our range of Bullet Dori, Polyester Yarn, and Catonic Yarns. Custom specifications available.
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* Bullet Dori Section */}
                <Section id="bullet-dori">
                    <div className="grid md:grid-cols-2 gap-16 mb-20 items-center">
                        <Reveal>
                            <h2 className="text-4xl font-serif font-medium text-primary mb-6">Bullet Dori <span className="text-base text-neutral-400 block mt-2 font-sans font-light tracking-wide uppercase">Cotton Thread</span></h2>
                            <p className="text-neutral-600 mb-8 leading-relaxed text-lg font-light">
                                Our flagship product, engineered for the fancy lace manufacturing industry and embroidery threads. We use high-grade cotton mix materials to ensure strength and consistency.
                            </p>
                            <ul className="grid grid-cols-2 gap-4 text-neutral-600 mb-10 ml-2">
                                {["Multi-color availability", "High strength & durability", "Uniform thickness", "Customizable counts"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm uppercase tracking-wide">
                                        <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button variant="primary" asChild>
                                <a href="/contact">Request Samples</a>
                            </Button>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <div className="bg-neutral-200 aspect-square rounded-sm flex items-center justify-center text-neutral-400 font-serif italic relative overflow-hidden shadow-xl">
                                <div className="absolute inset-0 bg-neutral-300/30" />
                                <img src="/images/c1.jpeg" alt="Bullet Dori" className="w-full h-full object-cover relative z-10" />
                            </div>
                        </Reveal>
                    </div>

                    {/* Specs Table */}
                    <Reveal delay={0.4} width="100%">
                        <div className="overflow-hidden border border-neutral-200 rounded-sm bg-white shadow-sm">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-[#1A1A1A] text-white font-bold uppercase text-[10px] tracking-[0.2em]">
                                    <tr>
                                        <th className="px-8 py-5 font-normal">Product Name</th>
                                        <th className="px-8 py-5 font-normal">Specification</th>
                                        <th className="px-8 py-5 font-normal">Application</th>
                                        <th className="px-8 py-5 font-normal">Availability</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-100">
                                    {[
                                        { name: "Bullet Dori 10/3", desc: "For Embroidery & Fine Lace", stock: "In Stock" },
                                        { name: "Bullet Dori 10/5", desc: "Standard Embroidery Thread", stock: "In Stock" },
                                        { name: "Bullet Dori 10/7", desc: "Heavy duty lace", stock: "In Stock" },
                                        { name: "Bullet Dori 10/11", desc: "Thick cord requirements", stock: "Make to Order" },
                                        { name: "Bullet Dori 10/18", desc: "Ultra-heavy applications", stock: "Make to Order" },
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-[#F9F9F8] transition-colors group">
                                            <td className="px-8 py-5 font-serif font-medium text-primary text-lg group-hover:text-secondary transition-colors">{row.name}</td>
                                            <td className="px-8 py-5 text-neutral-500 font-mono text-xs">{row.name.split(" ").pop()}</td>
                                            <td className="px-8 py-5 text-neutral-600">{row.desc}</td>
                                            <td className="px-8 py-5">
                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold ${row.stock === "In Stock" ? "bg-green-50 text-green-700 border border-green-100" : "bg-yellow-50 text-yellow-700 border border-yellow-100"
                                                    }`}>
                                                    {row.stock}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Reveal>
                </Section>

                {/* Other Products */}
                <Section className="bg-white">
                    <div className="text-center mb-16">
                        <Reveal>
                            <h2 className="text-4xl font-serif font-medium text-primary mb-4">Other Products</h2>
                            <p className="text-neutral-500 max-w-2xl mx-auto font-light">Versatile yarns for diverse textile applications.</p>
                        </Reveal>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        <Reveal className="h-full">
                            <ProductCard
                                title="Bullet Dori 10/3"
                                description="Fine embroidery thread and lace manufacturing. Premium cotton mix for delicate work."
                                href="/contact"
                                specs={[
                                    { label: "Count", value: "10/3" },
                                    { label: "Stock", value: "In Stock" },
                                ]}
                                image="/images/c1.jpeg"
                            />
                        </Reveal>

                        <Reveal delay={0.1} className="h-full">
                            <ProductCard
                                title=" Polyester Bullet Dori 10/5"
                                description="Standard embroidery thread with excellent strength and consistency."
                                href="/contact"
                                specs={[
                                    { label: "Count", value: "10/5" },
                                    { label: "Stock", value: "In Stock" },
                                ]}
                                image="/images/p12.jpeg"
                            />
                        </Reveal>
                        <Reveal delay={0.2} className="h-full">
                            <ProductCard
                                title=" Multi-color Dori 10/5"
                                description="Standard embroidery thread with excellent strength and consistency."
                                href="/contact"
                                specs={[
                                    { label: "Count", value: "10/5" },
                                    { label: "Stock", value: "In Stock" },
                                ]}
                                image="/images/b5.jpeg"
                            />
                        </Reveal>

                        <Reveal delay={0.3} className="h-full">
                            <ProductCard
                                title="Polyester Yarn"
                                description="Versatile polyester yarns suitable for weaving and knitting. High tensile strength and excellent color fastness."
                                href="/contact"
                                specs={[
                                    { label: "Material", value: "100% Polyester" },
                                    { label: "Grade", value: "Export A++" },
                                ]}
                                image="/images/polyyarn.png"
                            />
                        </Reveal>

                        <Reveal delay={0.4} className="h-full">
                            <ProductCard
                                title="Catonic Yarn"
                                description="Specialty yarns that offer two-tone effects and enhanced dyeability. Perfect for fashion fabrics."
                                href="/contact"
                                specs={[
                                    { label: "Dyeability", value: "High" },
                                    { label: "Finish", value: "Soft" },
                                ]}
                                image="/images/catonicyarn.png"
                            />
                        </Reveal>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
