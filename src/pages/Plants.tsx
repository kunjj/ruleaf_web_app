import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Sun, CloudSun, Cloud, Shrub, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const plants = [
  { name: "Monstera Deliciosa", light: "Indirect Light", maintenance: "Easy", size: "Large", desc: "Iconic split leaves, perfect for lobbies.", space: "Lobby" },
  { name: "Fiddle Leaf Fig", light: "Indirect Light", maintenance: "Moderate", size: "Large", desc: "Statement tree with large violin-shaped leaves.", space: "Reception" },
  { name: "ZZ Plant", light: "Low Light", maintenance: "Easy", size: "Medium", desc: "Nearly indestructible, thrives in any office.", space: "Office" },
  { name: "Peace Lily", light: "Low Light", maintenance: "Easy", size: "Small", desc: "Elegant white blooms, excellent air purifier.", space: "Office" },
  { name: "Bird of Paradise", light: "Full Sun", maintenance: "Moderate", size: "Feature", desc: "Tropical drama with large paddle-shaped leaves.", space: "Lobby" },
  { name: "Snake Plant", light: "Low Light", maintenance: "Easy", size: "Medium", desc: "Architectural upright form, extremely hardy.", space: "Office" },
  { name: "Pothos", light: "Low Light", maintenance: "Easy", size: "Small", desc: "Trailing vine, perfect for shelves and partitions.", space: "Office" },
  { name: "Rubber Plant", light: "Indirect Light", maintenance: "Easy", size: "Large", desc: "Glossy dark leaves with a bold presence.", space: "Reception" },
  { name: "Dracaena", light: "Low Light", maintenance: "Easy", size: "Large", desc: "Tall, structural form ideal for corners.", space: "Office" },
  { name: "Areca Palm", light: "Indirect Light", maintenance: "Moderate", size: "Feature", desc: "Feathery fronds that soften any space.", space: "Lobby" },
  { name: "Chinese Evergreen", light: "Low Light", maintenance: "Easy", size: "Small", desc: "Patterned leaves in silver and green tones.", space: "Office" },
  { name: "Boston Fern", light: "Indirect Light", maintenance: "High", size: "Medium", desc: "Lush, cascading fronds for hanging displays.", space: "Outdoor" },
];

const filterOptions = {
  light: ["Full Sun", "Indirect Light", "Low Light", "Shade"],
  maintenance: ["Easy", "Moderate", "High"],
  size: ["Small", "Medium", "Large", "Feature"],
  space: ["Office", "Lobby", "Reception", "Outdoor"],
};

const badgeColor = (type: string) => {
  const map: Record<string, string> = {
    Easy: "bg-green-light/10 text-green-light",
    Moderate: "bg-accent/10 text-accent",
    High: "bg-destructive/10 text-destructive",
    "Full Sun": "bg-accent/10 text-accent",
    "Indirect Light": "bg-green-light/10 text-green-light",
    "Low Light": "bg-primary/10 text-primary",
    Small: "bg-muted text-muted-foreground",
    Medium: "bg-muted text-muted-foreground",
    Large: "bg-muted text-muted-foreground",
    Feature: "bg-accent/10 text-accent",
  };
  return map[type] || "bg-muted text-muted-foreground";
};

const FilterPanel = ({ filters, setFilters }: { filters: Record<string, string[]>; setFilters: (f: Record<string, string[]>) => void }) => {
  const toggle = (category: string, value: string) => {
    const current = filters[category] || [];
    setFilters({
      ...filters,
      [category]: current.includes(value) ? current.filter((v) => v !== value) : [...current, value],
    });
  };

  return (
    <div className="space-y-6">
      {Object.entries(filterOptions).map(([key, values]) => (
        <div key={key}>
          <h4 className="font-medium text-sm mb-3 capitalize text-foreground">{key === "light" ? "Light Requirement" : key === "maintenance" ? "Maintenance Level" : key}</h4>
          <div className="space-y-2">
            {values.map((v) => (
              <label key={v} className="flex items-center gap-2 cursor-pointer text-sm">
                <input type="checkbox" checked={(filters[key] || []).includes(v)} onChange={() => toggle(key, v)}
                  className="rounded border-border accent-accent" />
                <span className="text-muted-foreground">{v}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Plants = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Record<string, string[]>>({});

  const filtered = plants.filter((p) => {
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
    if (filters.light?.length && !filters.light.includes(p.light)) return false;
    if (filters.maintenance?.length && !filters.maintenance.includes(p.maintenance)) return false;
    if (filters.size?.length && !filters.size.includes(p.size)) return false;
    if (filters.space?.length && !filters.space.includes(p.space)) return false;
    return true;
  });

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Our Plant Collection</h1>
          <p className="text-muted-foreground">Curated plants for every commercial environment.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-card rounded-2xl border border-border p-6 shadow-warm">
              <h3 className="font-semibold text-foreground mb-4">Filters</h3>
              <FilterPanel filters={filters} setFilters={setFilters} />
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search plants..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden"><SlidersHorizontal className="w-4 h-4" /></Button>
                </SheetTrigger>
                <SheetContent>
                  <h3 className="font-semibold text-foreground mb-6">Filters</h3>
                  <FilterPanel filters={filters} setFilters={setFilters} />
                </SheetContent>
              </Sheet>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                  className="bg-card rounded-2xl border border-border shadow-warm overflow-hidden group hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={`https://picsum.photos/seed/plant${i + 1}/400/300`} alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-foreground mb-2">{p.name}</h3>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${badgeColor(p.light)}`}>{p.light}</span>
                      <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${badgeColor(p.maintenance)}`}>{p.maintenance}</span>
                      <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${badgeColor(p.size)}`}>{p.size}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                    <Button variant="outline" size="sm" className="w-full">Enquire About This Plant</Button>
                  </div>
                </motion.div>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-16 text-muted-foreground">No plants match your filters.</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Plants;
