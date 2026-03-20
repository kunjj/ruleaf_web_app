import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Mitchell", company: "ANZ Bank", quote: "Ruleaf transformed our headquarters. The plants have genuinely improved employee wellbeing and the maintenance is completely hands-off for us." },
  { name: "James Chen", company: "Deloitte Australia", quote: "Professional, reliable, and the design consultation exceeded our expectations. Our office feels like a completely different space." },
  { name: "Dr. Lisa Wong", company: "Royal Children's Hospital", quote: "The calming green spaces they created for our recovery areas have received wonderful feedback from patients and families." },
];

const TestimonialsSection = () => (
  <section className="py-24 bg-primary/5">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">What Our Clients Say</h2>
        <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-warm">
          <div className="flex gap-0.5">{Array.from({length: 5}).map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}</div>
          <span className="text-sm font-medium">4.9/5</span>
          <span className="text-xs text-muted-foreground">from 210 Google Reviews</span>
        </div>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-warm">
            <div className="flex gap-0.5 mb-4">{Array.from({length: 5}).map((_, j) => <Star key={j} className="w-4 h-4 fill-accent text-accent" />)}</div>
            <p className="text-sm text-foreground leading-relaxed mb-6">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
