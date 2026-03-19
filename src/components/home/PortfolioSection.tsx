import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const filters = ["All", "Office", "Hospitality", "Healthcare", "Retail", "Education"];

const projects = [
  { name: "ANZ Bank HQ", city: "Sydney", industry: "Office", desc: "Full biophilic fit-out across 12 floors with 200+ plants.", seed: "anz" },
  { name: "Marriott Hotel Lobby", city: "Melbourne", industry: "Hospitality", desc: "Luxury tropical installation in grand lobby and restaurant.", seed: "marriott" },
  { name: "Royal Children's Hospital", city: "Brisbane", industry: "Healthcare", desc: "Calming green spaces for patient recovery areas.", seed: "hospital" },
  { name: "Westfield Shopping Centre", city: "Perth", industry: "Retail", desc: "Statement feature plants and seasonal installations.", seed: "westfield" },
  { name: "Deloitte Australia", city: "Sydney", industry: "Office", desc: "Modern workspace greenery with smart monitoring.", seed: "deloitte" },
  { name: "University of Melbourne", city: "Melbourne", industry: "Education", desc: "Campus-wide indoor plantscaping for study areas.", seed: "unimelb" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.industry === active);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Portfolio</h2>
          <p className="text-muted-foreground">Transforming spaces across Australia.</p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${active === f ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
              {f}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div key={p.name} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                className="group rounded-2xl overflow-hidden bg-card border border-border shadow-warm hover:shadow-warm-lg transition-all">
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={`https://picsum.photos/seed/${p.seed}/600/400`} alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono bg-accent/10 text-accent px-2 py-0.5 rounded-full">{p.industry}</span>
                    <span className="text-xs text-muted-foreground">{p.city}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
