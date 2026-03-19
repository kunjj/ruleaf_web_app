import { motion } from "framer-motion";
import { Calculator, Users, Wrench } from "lucide-react";

const steps = [
  { icon: Calculator, title: "Get an Instant Quote", desc: "Use our online calculator for a ballpark estimate in seconds." },
  { icon: Users, title: "Free On-Site Consultation", desc: "Our design team visits your space to create a tailored plan." },
  { icon: Wrench, title: "Installation + Maintenance", desc: "We install, maintain, and guarantee every plant." },
];

const HowItWorks = () => (
  <section className="py-24 bg-primary/5">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">How It Works</h2>
        <p className="text-muted-foreground">Three simple steps to a greener workspace.</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="text-center relative">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <span className="absolute -top-2 -right-2 w-7 h-7 bg-accent text-accent-foreground rounded-full text-sm font-bold flex items-center justify-center font-mono">{i + 1}</span>
              <s.icon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
