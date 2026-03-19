import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="w-5 h-5 text-accent" />
            <span className="font-display text-lg font-bold">GreenSpace</span>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Premium indoor plant hire & plantscaping for Australia's leading commercial spaces since 1889.
          </p>
          <div className="mt-4 inline-block border border-accent/40 rounded px-3 py-1">
            <span className="text-xs font-mono text-accent">GBCA Accredited Partner</span>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Plant Hire & Rental</li>
            <li>Plantscaping & Design</li>
            <li>Maintenance & Care</li>
            <li>Green Star Advisory</li>
            <li>Event & Short-Term Hire</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Cities</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Sydney</li>
            <li>Melbourne</li>
            <li>Brisbane</li>
            <li>Perth</li>
            <li>Adelaide</li>
            <li>Canberra</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>1300 GREEN SP</li>
            <li>hello@greenspace.com.au</li>
            <li>Level 12, 200 George St</li>
            <li>Sydney NSW 2000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} GreenSpace Pty Ltd. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
