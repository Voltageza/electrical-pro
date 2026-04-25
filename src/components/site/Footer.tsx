import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-brand-navy-deep border-t border-white/10">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-electric shadow-glow">
                <Zap className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="leading-tight">
                <div className="font-display text-xl font-bold tracking-wide text-white">
                  ELECTRICAL <span className="text-accent">PRO</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                  Danny Farnham · Tim Toovey
                </div>
              </div>
            </div>
            <p className="mt-5 text-white/60 max-w-md">
              Three decades of trusted electrical contracting across the Garden
              Route — solar, commercial, agricultural, and residential.
            </p>
          </div>

          <div>
            <div className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Services
            </div>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/solar" className="hover:text-accent transition-smooth">EP Solar</Link></li>
              <li><Link to="/commercial" className="hover:text-accent transition-smooth">Commercial</Link></li>
              <li><Link to="/agricultural" className="hover:text-accent transition-smooth">Agricultural</Link></li>
              <li><Link to="/residential" className="hover:text-accent transition-smooth">Residential</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact
            </div>
            <ul className="space-y-2 text-sm text-white/60">
              <li>+27 (0) 44 000 0000</li>
              <li>info@electricalpro.co.za</li>
              <li>Garden Route, ZA</li>
              <li>Mon–Fri 07:30–17:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-white/40">
          <div>© {new Date().getFullYear()} Electrical Pro. All rights reserved.</div>
          <div className="uppercase tracking-wider">Powering the Garden Route</div>
        </div>
      </div>
    </footer>
  );
};
