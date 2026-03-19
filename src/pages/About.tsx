import { motion } from "framer-motion";
import { Award, Leaf, Users } from "lucide-react";

const team = [
  { name: "Eleanor Whitfield", title: "Managing Director" },
  { name: "Thomas Greenwood", title: "Head of Design" },
  { name: "Priya Sharma", title: "Head of Horticulture" },
  { name: "Marcus O'Brien", title: "Operations Manager" },
];

const milestones = [
  { year: "1889", title: "Founded", desc: "Established as a nursery in Melbourne's inner suburbs." },
  { year: "1950s", title: "Expansion", desc: "Expanded into commercial plant supply across Victoria." },
  { year: "1990s", title: "Corporate Focus", desc: "Pivoted to dedicated B2B indoor plantscaping services." },
  { year: "2010s", title: "Green Star", desc: "Became GBCA accredited, pioneering IEQ-15 advisory." },
  { year: "2024", title: "Digital Transformation", desc: "Launched real-time plant health monitoring platform." },
];

const states = [
  { abbr: "WA", top: "50%", left: "15%" },
  { abbr: "NT", top: "25%", left: "40%" },
  { abbr: "SA", top: "55%", left: "45%" },
  { abbr: "QLD", top: "30%", left: "70%" },
  { abbr: "NSW", top: "60%", left: "75%" },
  { abbr: "VIC", top: "72%", left: "68%" },
  { abbr: "TAS", top: "88%", left: "72%" },
  { abbr: "ACT", top: "65%", left: "78%" },
];

const About = () => (
  <main className="pt-24 pb-16 min-h-screen bg-background">
    <div className="container mx-auto px-4">
      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center mb-24">
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-1.5 text-sm font-medium mb-6">
          <Leaf className="w-4 h-4" /> Est. 1889
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
          135 Years of Bringing Nature Indoors
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Founded in 1889 as a humble nursery in Melbourne, GreenSpace has grown into Australia's most trusted commercial plantscaping partner. 
          For over a century, we've combined horticultural expertise with cutting-edge design to create healthier, more productive workspaces.
        </p>
      </motion.div>

      {/* Team */}
      <section className="mb-24">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-display text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">Our Leadership</motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {team.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border shadow-warm p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="font-semibold text-foreground">{t.name}</h3>
              <p className="text-sm text-muted-foreground">{t.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mb-24">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Leaf, title: "Sustainability", desc: "Every decision we make prioritises environmental impact. We source locally, use organic practices, and offset our carbon footprint." },
            { icon: Award, title: "Expertise", desc: "Our team includes certified horticulturists, biophilic designers, and GBCA accredited consultants with decades of experience." },
            { icon: Users, title: "Service", desc: "Dedicated account managers, 24-hour replacement guarantees, and a commitment to exceeding expectations on every project." },
          ].map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <v.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GBCA Badge */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="bg-primary/5 rounded-2xl p-8 text-center max-w-2xl mx-auto mb-24 border border-border">
        <Award className="w-10 h-10 text-accent mx-auto mb-4" />
        <h3 className="font-display text-xl font-bold text-foreground mb-2">GBCA Accredited Partner</h3>
        <p className="text-sm text-muted-foreground">We help commercial properties earn Green Star IEQ-15 indoor environment quality credits through strategic biophilic design and indoor plantscaping.</p>
      </motion.div>

      {/* Map */}
      <section className="mb-24">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-display text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">Australia-Wide Coverage</motion.h2>
        <div className="relative w-full max-w-md mx-auto aspect-[4/3] bg-card rounded-2xl border border-border shadow-warm">
          {states.map((s) => (
            <div key={s.abbr} className="absolute font-mono text-xs font-bold text-primary" style={{ top: s.top, left: s.left }}>
              <span className={`${["NSW", "VIC", "QLD", "WA", "SA", "ACT"].includes(s.abbr) ? "bg-accent/20 text-accent px-2 py-1 rounded" : "text-muted-foreground"}`}>
                {s.abbr}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-display text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">Our Journey</motion.h2>
        <div className="max-w-2xl mx-auto">
          {milestones.map((m, i) => (
            <motion.div key={m.year} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="flex gap-6 mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-mono text-xs font-bold text-accent">{m.year}</span>
                </div>
                {i < milestones.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
              </div>
              <div className="pb-8">
                <h3 className="font-semibold text-foreground">{m.title}</h3>
                <p className="text-sm text-muted-foreground">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  </main>
);

export default About;
