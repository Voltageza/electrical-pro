import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Electrical Pro installed our solar system on time and on budget. Professional from quote to commissioning — and the system has performed beautifully.",
    name: "Sarah M.",
    role: "Homeowner, George",
  },
  {
    quote:
      "We've used Danny and the team for our farm electrics for over a decade. Reliable, knowledgeable and always solving problems before they become problems.",
    name: "Pieter v.d. Merwe",
    role: "Dairy Farmer, Mossel Bay",
  },
  {
    quote:
      "They handled our entire commercial fit-out with zero fuss. Quality work, well documented, and the COC was sorted without a hitch.",
    name: "Lisa T.",
    role: "Operations Manager",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-3">
            What clients say
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-foreground text-balance">
            Trusted across the Garden Route
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-smooth"
            >
              <Quote className="h-10 w-10 text-accent/30 mb-4" />
              <p className="text-foreground leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
