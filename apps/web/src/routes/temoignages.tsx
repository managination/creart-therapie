import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { asset } from "@/lib/assets";

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
    quote: "Elle a été une bouffée d'oxygène pour moi... Mme Roon a fait les créations avec moi, me prenant la main.",
    author: "Roxane B.",
    context: "Séances individuelles",
    color: "cyan",
  },
  {
    quote: "J'ai pu contacter la joie, le plaisir de créer, sans avoir besoin de faire du beau. Je suis devenue très créative et je sais que je crée ma vie.",
    author: "Fabienne H.",
    context: "Accompagnement sur plusieurs mois",
    color: "magenta",
  },
  {
    quote: "Un espace de liberté où j'ai pu déposer mes peurs et mes doutes. Monique m'a accompagnée avec une grande bienveillance.",
    author: "Marie-Claire D.",
    context: "Période de transition professionnelle",
    color: "purple",
  },
  {
    quote: "Les ateliers de groupe sont un moment de partage unique. J'y ai trouvé une communauté bienveillante et un nouveau moyen d'expression.",
    author: "Sylvie M.",
    context: "Ateliers de groupe",
    color: "yellow",
  },
  {
    quote: "Après mon burn-out, l'art-thérapie m'a permis de me reconnecter à moi-même. Je recommande vivement.",
    author: "Jean-Pierre L.",
    context: "Reconstruction après burn-out",
    color: "cyan",
  },
  {
    quote: "Monique a cette capacité rare de créer un espace sécurisant où l'on peut vraiment laisser parler ses émotions.",
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
            Témoignages
          </span>
          <h1 className="mb-6">
            Ce qu'ils en <span className="paint-underline">disent</span>
          </h1>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Découvrez les expériences de personnes qui ont trouvé dans l'art-thérapie
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
                La créativité n'est pas un talent réservé à quelques-uns,
                c'est une énergie vitale qui sommeille en chacun de nous.
              </p>
            </blockquote>

            <p className="font-handwritten text-xl text-magenta">
              — Monique Roon
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
                    src={asset("assets/91c512c2d597763ae30ffcc3657c22a4.jpg")}
                    alt="Création artistique"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src={asset("assets/P1044871.JPG")}
                    alt="Processus créatif"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src={asset("assets/8068fb5a6ec757a39e1b7ea2ffeb3ebc.jpg")}
                    alt="Texture artistique"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img
                    src={asset("assets/bb9807761db53c168f50e82010f77a18.jpg")}
                    alt="Oeuvre d'art"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="font-handwritten text-2xl text-cyan mb-4 block">
                L'expérience
              </span>
              <h2 className="mb-6">Plus qu'une thérapie, un voyage</h2>
              <p className="text-lg text-warm-gray leading-relaxed mb-6">
                Chaque séance est une invitation à explorer votre monde intérieur
                à travers le langage universel de l'art. Pas besoin de savoir dessiner
                ou peindre — seule compte l'intention de vous exprimer.
              </p>
              <p className="text-lg text-warm-gray leading-relaxed mb-8">
                Les témoignages ci-dessus reflètent des parcours uniques, mais tous
                partagent un point commun : la découverte d'une nouvelle façon de
                communiquer avec soi-même.
              </p>

              <Link
                to="/art-therapie"
                className="inline-flex items-center gap-2 font-medium text-cyan hover:text-cyan-dark transition-colors"
              >
                En savoir plus sur l'art-thérapie
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
            Prêt·e à écrire votre histoire ?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Chaque témoignage commence par une première séance.
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
