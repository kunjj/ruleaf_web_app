import { motion } from "framer-motion";
import { Palette, Wrench, Award, ClipboardCheck, Calendar } from "lucide-react";

const LeafIcon = ({ className }: { className?: string }) => <img src="/android-chrome-192x192.png" alt="" className={className} />;

const services = [
  { icon: LeafIcon, title: "Plant Hire & Rental", desc: "Flexible monthly contracts for offices, lobbies, and retail spaces." },
  { icon: Palette, title: "Plantscaping & Design", desc: "Full biophilic design consultation and installation." },
  { icon: Wrench, title: "Maintenance & Care", desc: "Scheduled visits, plant replacement guarantee." },
  { icon: Award, title: "Green Star Advisory", desc: "Help earn GBCA Green Star IEQ-15 credits." },
  { icon: ClipboardCheck, title: "Plant Wellness Audit", desc: "Annual health report and air quality analysis." },
  { icon: Calendar, title: "Event & Short-Term Hire", desc: "Temporary plant installations for events and pop-ups." },
];

const ServicesSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive plantscaping solutions tailored to your commercial space.</p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="group bg-card rounded-2xl p-8 border border-border shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
              <s.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            <p className="text-sm font-medium text-accent mt-4 cursor-pointer hover:underline">Learn more →</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
