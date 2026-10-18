import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Palette, Brain, Heart, Leaf, ChevronDown } from "lucide-react";
import { asset } from "@/lib/assets";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/art-therapie")({
  component: ArtTherapiePage,
  head: () =>
    seo({
      title: "Qu'est-ce que l'art-thérapie ? | Atelier Créart-Thérapie",
      description:
        "L'art-thérapie accompagne dépression, deuil, cancer, sclérose en plaques, Parkinson, TDA et autisme par l'expression créative — adultes et enfants, Fribourg.",
      path: "/art-therapie",
    }),
});

const helpItems = [
  {
    title: "Vous traversez une dépression, une période de mal-être ou de perte d'élan",
    description:
      "Un suivi permet de retrouver ses racines, son centre d'intérêt, trouver un sens à son existence.",
  },
  {
    title: "Vous vivez un deuil ou une séparation",
    description:
      "Vous pourrez être accompagné de manière bienveillante à traverser cette épreuve, les étapes du deuil et à représenter vos émotions pour les transformer.",
  },
  {
    title: "Vous souffrez d'un cancer ou d'une maladie chronique",
    description:
      "Vous aurez l'occasion de poser un autre regard sur cette maladie et de la traverser autrement.",
  },
  {
    title: "Vous souffrez d'une maladie auto-immune, d'une sclérose en plaques (SEP), de la maladie de Parkinson...",
    description:
      "La créativité vous permettra d'ouvrir le champ des possibles, de mettre en place un mouvement différent, grâce à l'imaginaire.",
  },
  {
    title: "Votre enfant vit avec un handicap, un TDA (trouble du déficit de l'attention), un TSA (autisme)...",
    description:
      "Dans mon atelier d'art-thérapie pour enfants, je lui propose un accompagnement créatif adapté : un cadre sécurisant, une bulle d'oxygène dans laquelle il pourra libérer sa créativité. J'ai mis en place diverses créations qui ne demandent que quelques minutes et qui ont des résultats surprenants et valorisants.",
  },
  {
    title: "Vous souhaitez renouer avec votre créativité",
    description:
      "Si vous ressentez le besoin de créer et que vous aimeriez choisir la matière qui vous convient, je vous ferai découvrir toutes les facettes de ma passion, avec des matières ludiques et créatives.",
  },
];

function ArtTherapiePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
                  src={asset("assets/pointillisme-main.png")}
                  alt="Atelier d'art-thérapie : main peignant une œuvre en pointillisme"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              {/* Floating quote */}
              <div className="absolute -bottom-8 -right-4 lg:right-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
                <p className="font-handwritten text-lg text-purple">
                  "La création est un acte de liberté"
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="font-handwritten text-2xl text-cyan mb-4 block">
                L'Art-Thérapie
              </span>
              <h1 className="mb-6">
                Poser un regard <span className="paint-underline">différent</span>
              </h1>
              <p className="text-lg text-warm-gray leading-relaxed mb-6">
                En laissant de la place à votre créativité, vous pourrez poser un regard
                différent sur une situation qui vous préoccupe, que ce soit une maladie,
                un deuil, une séparation, un événement douloureux, une remise en question...
              </p>
              <p className="text-lg text-warm-gray leading-relaxed">
                Crayons, pinceaux, craies, argile, papier... : cet atelier
                d'expression créative favorise l'expression émotionnelle et ravive
                l'élan créatif inné.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Paint divider */}
      <div className="paint-divider" />

      {/* For Whom Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-handwritten text-2xl text-cyan mb-4 block">
              Pour qui ?
            </span>
            <h2>L'art-thérapie peut vous aider si...</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-paper-cream rounded-2xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-start justify-between gap-4 p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-handwritten text-2xl ${
                        ["text-vivid-red", "text-vivid-orange", "text-vivid-amber", "text-vivid-green", "text-vivid-teal", "text-vivid-purple"][
                          index % 6
                        ]
                      }`}
                    >
                      {item.title}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-warm-gray flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 font-handwritten text-xl text-charcoal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Group Creative Workshop Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-handwritten text-2xl text-cyan mb-4 block">
              Atelier créatif de groupe
            </span>
            <h2>Créer ensemble, dans un cadre bienveillant</h2>
          </div>

          {/* Video Preview */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan/20 via-purple/20 to-magenta/20 rounded-3xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                poster={asset("assets/pinceau-fond-presentation.jpeg")}
                controls
                preload="none"
                className="w-full aspect-video object-cover"
                aria-label="Démonstration d'une séance d'art-thérapie à l'atelier Créart-Thérapie"
              >
                <source src={asset("assets/creart-therapie-demo-seance.webm")} type="video/webm" />
                <source src={asset("assets/creart-therapie-demo-seance.mp4")} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-paper-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-handwritten text-2xl text-magenta mb-4 block">
              Ma philosophie
            </span>
            <h2>Le processus, pas le résultat</h2>
            <p className="mt-6 text-lg text-warm-gray">
              En art-thérapie, ce qui compte n'est pas la beauté de l'œuvre finale,
              mais le chemin parcouru pendant la création.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-cyan/10 rounded-full flex items-center justify-center mb-6">
                <Palette className="w-10 h-10 text-cyan" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-3">Expression</h3>
              <p className="text-warm-gray">
                Libérez vos émotions à travers la création artistique sans jugement
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-magenta/10 rounded-full flex items-center justify-center mb-6">
                <Brain className="w-10 h-10 text-magenta" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-3">Conscience</h3>
              <p className="text-warm-gray">
                Prenez conscience de vos ressources intérieures et de votre potentiel
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-yellow/20 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-10 h-10 text-yellow-dark" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-3">Bienveillance</h3>
              <p className="text-warm-gray">
                Un espace sécurisant et non-jugeant pour vous accompagner
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-purple/10 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-10 h-10 text-purple" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-3">Transformation</h3>
              <p className="text-warm-gray">
                Transformez votre regard sur les difficultés de la vie
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
                src={asset("assets/C.G.Jung_citation.jpeg")}
                alt="Citation de C.G. Jung sur la création et l'instinct du jeu"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <blockquote className="quote-artistic">
                <p className="text-2xl font-display italic text-charcoal leading-relaxed mb-6">
                  La création d'une chose nouvelle n'est pas accomplie par l'intellect
                  mais par l'instinct du jeu agissant par nécessité intérieure.
                </p>
                <footer className="font-medium text-warm-gray">
                  — C.G. Jung
                </footer>
              </blockquote>
            </div>
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
            <h2>Médiums artistiques</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Peinture", image: asset("assets/20230929_150253.jpg"), alt: "Peinture en atelier d'art-thérapie" },
              { name: "Dessin", image: asset("assets/IMG_20210508_112953.jpg"), alt: "Dessin et expression émotionnelle" },
              { name: "Modelage", image: asset("assets/20240205_173018.jpg"), alt: "Modelage d'argile en séance d'art-thérapie" },
              { name: "Collage", image: asset("assets/IMG_5789.png"), alt: "Collage créatif en atelier d'expression" },
            ].map((tool, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src={tool.image}
                  alt={tool.alt}
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
            Découvrez l'art-thérapie lors d'une première séance à tarif réduit.
          </p>
          <Link to="/contact" className="btn-artistic inline-flex items-center gap-2">
            Réserver une séance d'essai
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
