import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-paper-cream">
      {/* Paint drip decoration */}
      <div className="paint-divider rotate-180" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/assets/Logo_VF2.jpeg"
                alt="Atelier Créart-Thérapie"
                className="h-16 w-auto rounded-lg"
              />
            </Link>
            <p className="text-paper-cream/70 max-w-md leading-relaxed">
              L'art-thérapie ouvre un espace où vous pourrez contacter votre enfant
              intérieur pour le laisser s'exprimer et libérer son potentiel créatif.
            </p>
            <div className="mt-6 inline-block px-4 py-2 bg-cyan/20 rounded-full">
              <span className="text-sm font-medium text-cyan-light">
                Agréée ASCA
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg mb-6 text-paper">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/art-therapie", label: "L'Art-Thérapie" },
                { href: "/a-propos", label: "À Propos" },
                { href: "/prestations", label: "Prestations" },
                { href: "/temoignages", label: "Témoignages" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-paper-cream/70 hover:text-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-6 text-paper">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@creart-therapie.ch"
                  className="flex items-center gap-3 text-paper-cream/70 hover:text-cyan transition-colors"
                >
                  <Mail className="w-5 h-5 text-cyan" />
                  <span>info@creart-therapie.ch</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+41788421492"
                  className="flex items-center gap-3 text-paper-cream/70 hover:text-cyan transition-colors"
                >
                  <Phone className="w-5 h-5 text-cyan" />
                  <span>+41 78 842 14 92</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-paper-cream/70">
                <MapPin className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                <span>Région de Fribourg<br />Suisse</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-paper-cream/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-paper-cream/50 text-sm">
              © {new Date().getFullYear()} Atelier Créart-Thérapie. Tous droits réservés.
            </p>
            <p className="text-paper-cream/50 text-sm font-handwritten">
              "Accoucheuse d'artistes"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
