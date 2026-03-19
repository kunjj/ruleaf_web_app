import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  onOpenQuote: () => void;
}

const CTABanner = ({ onOpenQuote }: CTABannerProps) => (
  <section className="bg-primary py-20">
    <div className="container mx-auto px-4 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Bring Nature Into Your Workspace?
        </h2>
        <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
          Join 500+ Australian businesses that trust GreenSpace for their indoor plantscaping needs.
        </p>
        <Button size="lg" onClick={onOpenQuote} className="bg-accent text-accent-foreground hover:bg-gold-light text-base px-10">
          Book Free Consultation
        </Button>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
