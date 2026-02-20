"use client";

import Link from "next/link";
import { ArrowRight, Award, Factory, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ProductCard } from "@/components/ui/ProductCard";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal, FadeIn } from "@/components/ui/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F4F4F2]">
        {/* HERO SECTION */}
        <section ref={heroRef} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-neutral-900 text-white">
          {/* Parallax Background */}
          <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
            {/* Sophisticated Dark Overlay with Radial Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.2),transparent_60%)] z-15" />
            {/* Placeholder for Cinematic Video/Image */}
            <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-20 bg-cover bg-center" />
          </motion.div>

          <div className="relative z-30 container mx-auto px-4 text-center">
            <FadeIn delay={0.2} direction="up">
              <span className="inline-block py-2 px-6 border border-white/20 rounded-full text-[10px] tracking-[0.3em] uppercase mb-8 text-white/80 bg-white/5 backdrop-blur-sm">
                Est. 1997 • Surat, India
              </span>
            </FadeIn>

            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.25, 0.25, 0, 1], delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-9xl font-serif font-medium leading-[0.9] text-balance text-white"
              >
                Precision <br />
                <span className="italic font-light text-secondary">Threads</span>
              </motion.h1>
            </div>

            <FadeIn delay={0.8} direction="up">
              <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                Crafting the finest Bullet Dori and Yarns for the world's leading textile artisans. Our Bullet Dori is used in embroidery thread.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button size="lg" variant="primary" asChild className="min-w-[180px]">
                  <Link href="/products">Discover Collection</Link>
                </Button>
                <Link href="/contact" className="text-white hover:text-secondary transition-colors text-sm uppercase tracking-widest border-b border-transparent hover:border-secondary pb-1">
                  Contact Us
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* TRUST INDICATORS - Minimalist Strip */}
        <section className="py-24 border-b border-neutral-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { label: "Happy Customers", value: "150+", sub: "And Businesses" },
                { label: "Legacy", value: "25+", sub: "Years" },
                { label: "Quality", value: "100%", sub: "Guaranteed" },
                { label: "Reach", value: "Global", sub: "Export Ready" },
              ].map((stat, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="group cursor-default">
                    <h3 className="text-4xl md:text-5xl font-serif font-medium text-primary mb-2 group-hover:text-secondary transition-colors duration-500">{stat.value}</h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">{stat.label}</p>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest">{stat.sub}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <Section className="bg-[#F4F4F2] pt-32 pb-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <Reveal width="100%">
                <h2 className="text-4xl md:text-6xl font-serif font-medium text-primary leading-tight">
                  Curated <br /> <span className="italic text-secondary">Collections</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="max-w-md">
                  <p className="text-neutral-500 leading-relaxed mb-6">
                    Discover our signature range of high-strength bullet dori and specialized yarns, manufactured to perfection for lace and apparel industries.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/products">View All Products</Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Reveal delay={0.1} className="h-full">
                <ProductCard
                  title="Bullet Dori"
                  description="High-strength multi-color bullet dori used for embroidery thread and fancy lace manufacturing."
                  href="/products"
                  image="/images/groupofcon.png"
                  specs={[{ label: "Material", value: "Cotton Mix" }, { label: "Use", value: "Embroidery" }]}
                />
              </Reveal>
              <Reveal delay={0.2} className="h-full">
                <ProductCard
                  title="Polyester Yarn"
                  description="Premium quality polyester yarn suitable for various textile applications."
                  href="/products"
                  image="/images/polyyarn.png"
                  specs={[{ label: "Type", value: "Polyester" }, { label: "Grade", value: "A+" }]}
                />
              </Reveal>
              <Reveal delay={0.3} className="h-full">
                <ProductCard
                  title="Catonic Yarn"
                  description="Specialized catonic yarn offering superior dye uptake and vibrant colors."
                  href="/products"
                  image="/images/catonicyarn.png"
                  specs={[{ label: "Feature", value: "Vibrant" }, { label: "Use", value: "Apparel" }]}
                />
              </Reveal>
            </div>
          </div>
        </Section>

        {/* IMAGE BREAK / QUOTE */}
        <section className="py-32 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern-dark.svg')] opacity-5" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Reveal>
              <Award className="w-12 h-12 text-secondary mx-auto mb-8" />
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight max-w-4xl mx-auto mb-10">
                "Quality is not an act, it is a habit. We have been weaving trust into every thread since 1997."
              </h2>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm uppercase tracking-widest text-secondary">Manish Ishwarlal Gundarwala</span>
                <span className="text-xs text-neutral-500 uppercase tracking-widest">Founder</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WHY CHOOSE US - Asymmetric Layout */}
        <Section className="bg-[#E8E8E4]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Reveal>
                <div className="aspect-[3/4] bg-neutral-200 relative overflow-hidden rounded-sm shadow-2xl">
                  <img src="/images/b6.jpeg" alt="Factory Interior" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <Reveal>
                <span className="text-secondary tracking-[0.2em] uppercase text-xs font-bold mb-6 block">Why Us</span>
                <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 text-primary">Mastery in Manufacturing</h2>
                <p className="text-neutral-600 text-lg mb-12 leading-relaxed max-w-xl">
                  At Dhruvil Textiles, we combine traditional craftsmanship with modern efficiency. Our facility produces over 12,000 KG of premium yarn monthly, ensuring your supply chain never halts.
                </p>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-y-8 gap-x-12">
                {[
                  "Custom color matching",
                  "High-tenacity fibers",
                  "Zero-defect policy",
                  "24/7 Support"
                ].map((item, i) => (
                  <Reveal key={i} delay={0.2 + i * 0.1}>
                    <div className="flex items-center gap-4 border-b border-primary/10 pb-4">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      <span className="text-primary font-medium">{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.6} className="mt-12">
                <Button variant="primary" asChild>
                  <Link href="/about">Read Our Story</Link>
                </Button>
              </Reveal>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
