import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Plants", path: "/plants" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

interface NavbarProps {
  onOpenQuote: () => void;
}

const Navbar = ({ onOpenQuote }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[80] bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/android-chrome-192x192.png" alt="Ruleaf" className="w-9 h-9 rounded-lg" />
          <span className="font-display text-xl font-bold text-foreground">Ruleaf</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/portal">Client Login</Link>
          </Button>
          <Button size="sm" onClick={onOpenQuote} className="bg-accent text-accent-foreground hover:bg-gold-light">
            Get Quote
          </Button>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden p-2" aria-label="Toggle menu">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </SheetTrigger>

          <SheetContent
            side="top"
            className="md:hidden top-16 h-[calc(100dvh-4rem)] rounded-none border-x-0 border-b p-0"
          >
            <div className="h-full overflow-y-auto px-6 py-8 flex flex-col bg-background">
              <div className="flex flex-col gap-6">
                {navLinks.map((l) => (
                  <Link
                    key={l.path}
                    to={l.path}
                    onClick={() => setMobileOpen(false)}
                    className={`text-2xl font-display font-semibold transition-colors ${
                      location.pathname === l.path ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <Button variant="outline" asChild onClick={() => setMobileOpen(false)}>
                  <Link to="/portal">Client Login</Link>
                </Button>
                <Button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenQuote();
                  }}
                  className="bg-accent text-accent-foreground"
                >
                  Get Quote
                </Button>
              </div>

              <div className="mt-10 text-sm text-muted-foreground">
                Premium plant hire and maintenance for modern Australian workspaces.
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
