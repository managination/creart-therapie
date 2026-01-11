import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";

export const Route = createFileRoute("/temoignages")({
  component: TemoignagesPage,
});

type TestimonialColor = "cyan" | "magenta" | "purple" | "yellow";

const testimonials: Array<{
  quote: string;
  author: string;
  context: string;
  color: TestimonialColor;
}> = [
  {
    quote: "Elle a \u00e9t\u00e9 une bouff\u00e9e d'oxyg\u00e8ne pour moi... Mme Roon a fait les cr\u00e9ations avec moi, me prenant la main.",
    author: "Roxane B.",
    context: "S\u00e9ances individuelles",
    color: "cyan",
  },
  {
    quote: "J'ai pu contacter la joie, le plaisir de cr\u00e9er, sans avoir besoin de faire du beau. Je suis devenue tr\u00e8s cr\u00e9ative et je sais que je cr\u00e9e ma vie.",
    author: "Fabienne H.",
    context: "Accompagnement sur plusieurs mois",
    color: "magenta",
  },
  {
    quote: "Un espace de libert\u00e9 o\u00f9 j'ai pu d\u00e9poser mes peurs et mes doutes. Monique m'a accompagn\u00e9e avec une grande bienveillance.",
    author: "Marie-Claire D.",
    context: "P\u00e9riode de transition professionnelle",
    color: "purple",
  },
  {
    quote: "Les ateliers de groupe sont un moment de partage unique. J'y ai trouv\u00e9 une communaut\u00e9 bienveillante et un nouveau moyen d'expression.",
    author: "Sylvie M.",
    context: "Ateliers de groupe",
    color: "yellow",
  },
  {
    quote: "Apr\u00e8s mon burn-out, l'art-th\u00e9rapie m'a permis de me reconnecter \u00e0 moi-m\u00eame. Je recommande vivement.",
    author: "Jean-Pierre L.",
    context: "Reconstruction apr\u00e8s burn-out",
    color: "cyan",
  },
  {
    quote: "Monique a cette capacit\u00e9 rare de cr\u00e9er un espace s\u00e9curisant o\u00f9 l'on peut vraiment laisser parler ses \u00e9motions.",
    author: "Isabelle R.",
    context: "Accompagnement dans le deuil",
    color: "magenta",
  },
];

function TemoignagesPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        {/* Decorative paint splashes */}
        <div className="absolute top-0 right-0 w-96 h-96">
          <svg viewBox="0 0 400 400" className="w-full h-full opacity-20">
            <defs>
              <linearGradient id="splash1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFEB3B" />
                <stop offset="50%" stopColor="#E91E63" />
                <stop offset="100%" stopColor="#00BCD4" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="150" r="80" fill="url(#splash1)" opacity="0.3" />
            <circle cx="280" cy="250" r="60" fill="#00BCD4" opacity="0.2" />
            <circle cx="150" cy="280" r="50" fill="#E91E63" opacity="0.2" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-handwritten text-2xl text-purple mb-4 block">
            T\u00e9moignages
          </span>
          <h1 className="mb-6">
            Ce qu'ils en <span className="paint-underline">disent</span>
          </h1>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            D\u00e9couvrez les exp\u00e9riences de personnes qui ont trouv\u00e9 dans l'art-th\u00e9rapie
            un chemin vers la transformation.
          </p>
        </div>
      </section>

      {/* Paint divider */}
      <div className="paint-divider" />

      {/* Testimonials Grid */}
      <section className="py-24 bg-paper-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-magenta/10" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow/20 blob float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple/10 blob-alt float-delayed" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Quote className="w-16 h-16 text-cyan/30 mx-auto mb-8" />

            <blockquote>
              <p className="text-3xl md:text-4xl font-display italic text-charcoal leading-relaxed mb-8">
                La cr\u00e9ativit\u00e9 n'est pas un talent r\u00e9serv\u00e9 \u00e0 quelques-uns,
                c'est une \u00e9nergie vitale qui sommeille en chacun de nous.
              </p>
            </blockquote>

            <p className="font-handwritten text-xl text-magenta">
              \u2014 Monique Roon
            </p>
          </div>
        </div>
      </section>

      {/* Visual Testimonial */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img
                    src="/assets/91c512c2d597763ae30ffcc3657c22a4.jpg"
                    alt="Cr\u00e9ation artistique"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src="/assets/P1044871.JPG"
                    alt="Processus cr\u00e9atif"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src="/assets/8068fb5a6ec757a39e1b7ea2ffeb3ebc.jpg"
                    alt="Texture artistique"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img
                    src="/assets/bb9807761db53c168f50e82010f77a18.jpg"
                    alt="Oeuvre d'art"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="font-handwritten text-2xl text-cyan mb-4 block">
                L'exp\u00e9rience
              </span>
              <h2 className="mb-6">Plus qu'une th\u00e9rapie, un voyage</h2>
              <p className="text-lg text-warm-gray leading-relaxed mb-6">
                Chaque s\u00e9ance est une invitation \u00e0 explorer votre monde int\u00e9rieur
                \u00e0 travers le langage universel de l'art. Pas besoin de savoir dessiner
                ou peindre \u2014 seule compte l'intention de vous exprimer.
              </p>
              <p className="text-lg text-warm-gray leading-relaxed mb-8">
                Les t\u00e9moignages ci-dessus refl\u00e8tent des parcours uniques, mais tous
                partagent un point commun : la d\u00e9couverte d'une nouvelle fa\u00e7on de
                communiquer avec soi-m\u00eame.
              </p>

              <Link
                to="/art-therapie"
                className="inline-flex items-center gap-2 font-medium text-cyan hover:text-cyan-dark transition-colors"
              >
                En savoir plus sur l'art-th\u00e9rapie
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan via-purple to-magenta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Pr\u00eat\u00b7e \u00e0 \u00e9crire votre histoire ?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Chaque t\u00e9moignage commence par une premi\u00e8re s\u00e9ance.
            Osez faire le premier pas vers votre transformation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal font-medium rounded-full hover:bg-paper-cream transition-colors shadow-lg"
          >
            Commencer mon voyage
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  context: string;
  color: "cyan" | "magenta" | "purple" | "yellow";
}

function TestimonialCard({ quote, author, context, color }: TestimonialCardProps) {
  const colorClasses = {
    cyan: {
      bg: "bg-cyan/10",
      text: "text-cyan",
      border: "border-cyan/20",
    },
    magenta: {
      bg: "bg-magenta/10",
      text: "text-magenta",
      border: "border-magenta/20",
    },
    purple: {
      bg: "bg-purple/10",
      text: "text-purple",
      border: "border-purple/20",
    },
    yellow: {
      bg: "bg-yellow/20",
      text: "text-yellow-dark",
      border: "border-yellow/30",
    },
  };

  const colors = colorClasses[color];

  return (
    <div className={`bg-white rounded-3xl p-8 shadow-lg border ${colors.border}`}>
      <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center mb-6`}>
        <Quote className={`w-6 h-6 ${colors.text}`} />
      </div>

      <blockquote className="mb-6">
        <p className="text-lg text-charcoal leading-relaxed italic">
          "{quote}"
        </p>
      </blockquote>

      <footer>
        <p className="font-medium text-charcoal">{author}</p>
        <p className="text-sm text-warm-gray">{context}</p>
      </footer>
    </div>
  );
}
