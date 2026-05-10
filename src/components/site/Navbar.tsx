import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Solar", to: "/solar" },
  { label: "Commercial", to: "/commercial" },
  { label: "Agricultural", to: "/agricultural" },
  { label: "Residential", to: "/residential" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        scrolled || open
          ? "bg-brand-navy-deep/95 backdrop-blur-md shadow-elevated"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center group" aria-label="Electrical Pro home">
          <img
            src={logo}
            alt="Electrical Pro — Danny Farnham & Tim Toovey"
            className="h-10 sm:h-12 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-smooth rounded-md",
                pathname === l.to
                  ? "text-accent"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild variant="hero" size="default" className="ml-3">
            <a href="/#contact">Get a Quote</a>
          </Button>
        </nav>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-brand-navy-deep border-t border-white/10">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "px-4 py-3 text-sm font-semibold uppercase tracking-wider rounded-md",
                  pathname === l.to
                    ? "text-accent bg-white/5"
                    : "text-white/80 hover:bg-white/5"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild variant="hero" className="mt-2">
              <a href="/#contact">Get a Quote</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
