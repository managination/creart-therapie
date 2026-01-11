import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Palette, Brain, Heart, Leaf } from "lucide-react";

export const Route = createFileRoute("/art-therapie")({
  component: ArtTherapiePage,
});

function ArtTherapiePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow/10 blob" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-br from-magenta/20 via-cyan/10 to-yellow/20 rounded-[3rem] blur-2xl" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="/assets/P1044871.JPG"
                  alt="Mains cr\u00e9ant une oeuvre d'art"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              {/* Floating quote */}
              <div className="absolute -bottom-8 -right-4 lg:right-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
                <p className="font-handwritten text-lg text-purple">
                  "La cr\u00e9ation est un acte de libert\u00e9"
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="font-handwritten text-2xl text-cyan mb-4 block">
                L'Art-Th\u00e9rapie
              </span>
              <h1 className="mb-6">
                Poser un regard <span className="paint-underline">diff\u00e9rent</span>
              </h1>
              <p className="text-lg text-warm-gray leading-relaxed mb-6">
                En laissant de la place \u00e0 votre cr\u00e9ativit\u00e9, vous pourrez poser un regard
                diff\u00e9rent sur une situation qui vous pr\u00e9occupe, que ce soit une maladie,
                un deuil, une s\u00e9paration, un \u00e9v\u00e9nement douloureux, une remise en question...
              </p>
              <p className="text-lg text-warm-gray leading-relaxed">
                Crayons, pinceaux, craies, argile, papier... favorisent l'expression
                et ravivent l'\u00e9lan cr\u00e9atif inn\u00e9.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Paint divider */}
      <div className="paint-divider" />

      {/* Philosophy Section */}
      <section className="py-24 bg-paper-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-handwritten text-2xl text-magenta mb-4 block">
              Ma philosophie
            </span>
            <h2>Le processus, pas le r\u00e9sultat</h2>
            <p className="mt-6 text-lg text-warm-gray">
              En art-th\u00e9rapie, ce qui compte n'est pas la beaut\u00e9 de l'\u0153uvre finale,
              mais le chemin parcouru pendant la cr\u00e9ation.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-cyan/10 rounded-full flex items-center justify-center mb-6">
                <Palette className="w-10 h-10 text-cyan" />
              </div>
              <h4 className="text-lg font-display font-semibold mb-3">Expression</h4>
              <p className="text-warm-gray">
                Lib\u00e9rez vos \u00e9motions \u00e0 travers la cr\u00e9ation artistique sans jugement
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-magenta/10 rounded-full flex items-center justify-center mb-6">
                <Brain className="w-10 h-10 text-magenta" />
              </div>
              <h4 className="text-lg font-display font-semibold mb-3">Conscience</h4>
              <p className="text-warm-gray">
                Prenez conscience de vos ressources int\u00e9rieures et de votre potentiel
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-yellow/20 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-10 h-10 text-yellow-dark" />
              </div>
              <h4 className="text-lg font-display font-semibold mb-3">Bienveillance</h4>
              <p className="text-warm-gray">
                Un espace s\u00e9curisant et non-jugeant pour vous accompagner
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-purple/10 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-10 h-10 text-purple" />
              </div>
              <h4 className="text-lg font-display font-semibold mb-3">Transformation</h4>
              <p className="text-warm-gray">
                Transformez votre regard sur les difficult\u00e9s de la vie
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple/5 via-transparent to-cyan/5" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/assets/C.G.Jung_citation.jpeg"
                alt="Citation de C.G. Jung"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <blockquote className="quote-artistic">
                <p className="text-2xl font-display italic text-charcoal leading-relaxed mb-6">
                  La cr\u00e9ation d'une chose nouvelle n'est pas accomplie par l'intellect
                  mais par l'instinct du jeu agissant par n\u00e9cessit\u00e9 int\u00e9rieure.
                </p>
                <footer className="font-medium text-warm-gray">
                  \u2014 C.G. Jung
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-handwritten text-2xl text-cyan mb-4 block">
              Pour qui ?
            </span>
            <h2>L'art-th\u00e9rapie peut vous aider si...</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Vous traversez une p\u00e9riode difficile",
              "Vous vivez un deuil ou une s\u00e9paration",
              "Vous souffrez d'une maladie chronique",
              "Vous ressentez du stress ou de l'anxi\u00e9t\u00e9",
              "Vous \u00eates en qu\u00eate de sens",
              "Vous souhaitez renouer avec votre cr\u00e9ativit\u00e9",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-paper-cream rounded-2xl"
              >
                <div className="w-3 h-3 mt-2 bg-cyan rounded-full flex-shrink-0" />
                <p className="text-charcoal">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-handwritten text-2xl text-magenta mb-4 block">
              Les outils
            </span>
            <h2>M\u00e9diums artistiques</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Peinture", image: "/assets/91c512c2d597763ae30ffcc3657c22a4.jpg" },
              { name: "Dessin", image: "/assets/8068fb5a6ec757a39e1b7ea2ffeb3ebc.jpg" },
              { name: "Modelage", image: "/assets/P1055567.jpg" },
              { name: "Collage", image: "/assets/bb9807761db53c168f50e82010f77a18.jpg" },
            ].map((tool, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-display text-xl">{tool.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-paper-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Envie d'essayer ?</h2>
          <p className="text-lg text-warm-gray mb-8">
            D\u00e9couvrez l'art-th\u00e9rapie lors d'une premi\u00e8re s\u00e9ance \u00e0 tarif r\u00e9duit.
          </p>
          <Link to="/contact" className="btn-artistic inline-flex items-center gap-2">
            R\u00e9server une s\u00e9ance d'essai
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
