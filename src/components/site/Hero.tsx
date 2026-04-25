import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-building.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Electrical Pro headquarters at golden hour"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-brand-navy-deep/40" />
      </div>

      <div className="container relative z-10 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-accent shadow-glow animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              Garden Route · Est. 1990s
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-[0.95] text-white text-balance">
            Three decades of expertise.
            <span className="block bg-gradient-electric bg-clip-text text-transparent">
              Lighting the way forward.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
            Trusted electrical contractors serving the Garden Route across solar,
            commercial, agricultural and residential projects — built on quality,
            safety and three decades of experience.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="hero" size="xl">
              <a href="#contact">
                Get a Free Quote <ArrowRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href="#services">
                <Phone className="mr-1 h-5 w-5" /> Our Services
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
};
