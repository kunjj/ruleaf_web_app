import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const faqs = [
  { q: "How does plant hire work?", a: "We provide premium  plants on a flexible monthly rental basis. We handle delivery, installation, and ongoing maintenance. You simply enjoy a greener workspace with zero hassle." },
  { q: "What's included in the maintenance service?", a: "Our certified horticulturists visit your premises on a regular schedule to water, prune, fertilise, and inspect every plant. We also rotate and replace plants as needed." },
  { q: "Can I customise the plants and planters?", a: "Absolutely. Our design team works with you to select plants and planters that complement your brand, interior design, and space requirements." },
  { q: "What happens if a plant dies?", a: "We guarantee plant health. If any plant declines beyond recovery, we replace it within 24 hours at no additional cost — that's our replacement guarantee." },
  { q: "Do you help with Green Star certification?", a: "Yes. As GBCA accredited partners, we help commercial properties earn Green Star IEQ-15 credits through strategic  plantscaping." },
];

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 1 business day." });
    }, 1000);
  };

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Get In Touch</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">Ready to transform your workspace? We'd love to hear from you.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-24">
          <motion.form initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handleSubmit}
            className="bg-card rounded-2xl border border-border shadow-warm p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label className="text-sm font-medium text-foreground block mb-1.5">Name</label><Input required /></div>
              <div><label className="text-sm font-medium text-foreground block mb-1.5">Company</label><Input /></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label className="text-sm font-medium text-foreground block mb-1.5">Email</label><Input type="email" required /></div>
              <div><label className="text-sm font-medium text-foreground block mb-1.5">Phone</label><Input type="tel" /></div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">City</label>
              <Select><SelectTrigger><SelectValue placeholder="Select city" /></SelectTrigger>
                <SelectContent>
                  {["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra"].map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Service Interested In</label>
              <Select><SelectTrigger><SelectValue placeholder="Select service" /></SelectTrigger>
                <SelectContent>
                  {["Plant Hire & Rental", "Plantscaping & Design", "Maintenance & Care", "Green Star Advisory", "Event Hire", "Other"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div><label className="text-sm font-medium text-foreground block mb-1.5">Message</label><Textarea rows={4} /></div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground" disabled={submitting}>
              {submitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            {[
              { icon: MapPin, label: "Address", value: "Level 12, 200 George Street\nSydney NSW 2000" },
              { icon: Phone, label: "Phone", value: "1300 GREEN SP (1300 473 367)" },
              { icon: Mail, label: "Email", value: "hello@ruleaf.com.au" },
              { icon: Clock, label: "Business Hours", value: "Monday – Friday: 8:00 AM – 6:00 PM\nSaturday: 9:00 AM – 1:00 PM" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{c.label}</p>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{c.value}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">Book a Free Consultation</Button>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6 shadow-warm">
                <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;
