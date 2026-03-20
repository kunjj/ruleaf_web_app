import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  "GBCA accredited",
  "Replacement guarantee within 24 hours",
  "Dedicated account manager",
  "Real-time plant health tracking",
  "Sustainability-first approach",
];

const WhyChooseUs = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-foreground">Why Choose Ruleaf</h2>
          <div className="space-y-5">
            {reasons.map((r, i) => (
              <motion.div key={r} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground font-medium">{r}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="hidden lg:block">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-warm-lg">
            <img src="https://picsum.photos/seed/greenoffice/800/600" alt="Green office space" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
