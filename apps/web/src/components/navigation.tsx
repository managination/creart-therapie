import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { asset } from "@/lib/assets";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/art-therapie", label: "L'Art-Thérapie" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/prestations", label: "Prestations" },
  { href: "/temoignages", label: "Témoignages" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={asset("assets/Logo_VF2.jpeg")}
              alt="Atelier Créart-Thérapie"
              className="h-14 w-auto rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <span className="font-display text-xl font-semibold text-charcoal">
                Atelier
              </span>
              <span className="block font-handwritten text-lg text-magenta -mt-1">
                Créart-Thérapie
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link text-sm font-medium tracking-wide transition-colors ${
                  currentPath === link.href
                    ? "text-cyan"
                    : "text-charcoal hover:text-cyan"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex btn-artistic text-sm"
          >
            Prendre rendez-vous
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-charcoal" />
            ) : (
              <Menu className="w-6 h-6 text-charcoal" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[400px] pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  currentPath === link.href
                    ? "bg-cyan/10 text-cyan"
                    : "text-charcoal hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-artistic text-center mt-4"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
