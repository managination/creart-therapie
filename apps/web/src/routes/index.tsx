import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Heart, Users } from "lucide-react";
import { asset } from "@/lib/assets";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () =>
    seo({
      title: "Atelier Créart-Thérapie | Art-thérapie à Fribourg",
      description:
        "Art-thérapie à Fribourg pour adultes et enfants : dépression, cancer, handicap, TDA/TSA. Séances & ateliers de groupe — art-thérapeute ASCA. Essai 90 CHF.",
      path: "/",
    }),
});

function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div id="presentation" className="animate-fade-in-up bg-white rounded-3xl p-8">
              <h1 className="text-balance mb-6">
                <span className="block">Ouvrir l'espace</span>
                <span className="paint-underline">des possibles</span>
                <span>.</span>
              </h1>
              <p className="text-lg md:text-xl text-warm-gray leading-relaxed mb-8 max-w-xl">
                Art-thérapeute passionnée, je vous propose, dans mon atelier à Lully FR, un espace bienveillant et sécurisant pour vous permettre de vous exprimer à l’aide de la créativité.
              </p>
              <p className="text-lg md:text-xl text-warm-gray leading-relaxed mb-8 max-w-xl">
                En représentant la situation qui vous préoccupe, la maladie qui vous touche, le deuil que vous traversez, les remises en questions qui vous préoccupent, vous vous permettez d’y poser un autre regard, de le transformer, de découvrir vos ressources, d’être le créateur de votre vie.
              </p>
              <blockquote className="relative border-l-4 border-magenta pl-5 mb-8 max-w-xl">
                <p className="text-lg md:text-xl font-display italic text-charcoal leading-relaxed">
                  Tout peut être transformé pour opérer une transformation en vous.
                </p>
                <footer className="mt-2 font-medium text-warm-gray">
                  — Monique Roon
                </footer>
              </blockquote>
              <div className="flex flex-wrap gap-4">
                <Link to="/art-therapie" className="btn-artistic inline-flex items-center gap-2">
                  Découvrir l'atelier
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 font-medium text-charcoal border-2 border-charcoal/20 rounded-full hover:border-cyan hover:text-cyan transition-colors"
                >
                  Me contacter
                </Link>
              </div>

              {/* Trust badge */}
              <div className="mt-12 flex items-center gap-4 p-4 bg-paper-cream rounded-2xl inline-flex">
                <div className="w-12 h-12 bg-cyan/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <p className="font-medium text-charcoal">Agréée ASCA</p>
                  <p className="text-sm text-warm-gray">Remboursée par les assurances complémentaires</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in animation-delay-200">
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan/20 via-magenta/10 to-yellow/20 rounded-[3rem] blur-2xl pointer-events-none" />

                {/* Main image */}
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <video
                    src={asset("assets/short_Monique-Roon_Art_Therapie_1.webm")}
                    poster={asset("assets/Logo_VF2.jpeg")}
                    className="w-full h-auto object-cover aspect-video"
                    loop
                    playsInline
                    controls
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent pointer-events-none" />
                </div>

                <p className="relative mt-4 text-warm-gray text-center">
                  Pour la version longue du pod-cast,{" "}
                  <Link
                    to="/art-therapie"
                    hash="podcast"
                    className="text-cyan hover:text-cyan-dark underline"
                  >
                    cliquez ici
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paint divider */}
      <div className="paint-divider" />

      {/* Introduction Section */}
      <section className="py-24 bg-paper-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-handwritten text-3xl text-magenta mb-4 block">
              Bienvenue
            </span>
            <h2 className="mb-6">
              Poser un regard <span className="gradient-text">différent</span>
            </h2>
            <p className="text-lg text-warm-gray leading-relaxed">
              En laissant de la place à votre créativité, vous pourrez poser un regard
              différent sur une situation qui vous préoccupe, que ce soit une maladie,
              un deuil, une séparation, un événement douloureux, une remise en question...
            </p>
          </div>

          {/* Image */}
          <div className="mt-16 relative max-w-3xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan/20 via-magenta/10 to-yellow/20 rounded-[3rem] blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={asset("assets/P1044915.JPG")}
                alt="Atelier d'art-thérapie : main peignant une œuvre en pointillisme"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-handwritten text-3xl text-cyan mb-4 block">
              Mes prestations
            </span>
            <h2>Comment puis-je vous accompagner ?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="service-card bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-cyan/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-cyan" />
              </div>
              <h3 className="text-xl mb-4">Séances Individuelles</h3>
              <p className="text-warm-gray leading-relaxed mb-6">
                Accompagnement individuel des adultes lors de périodes difficiles de leur vie.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-display font-semibold text-charcoal">120 CHF</span>
                <span className="text-warm-gray">/ 75 min</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="service-card bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-magenta/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-magenta" />
              </div>
              <h3 className="text-xl mb-4">Ateliers de Groupe</h3>
              <p className="text-warm-gray leading-relaxed mb-6">
                Je propose chaque semaine un atelier de pointillisme, en groupe.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-display font-semibold text-charcoal">50 CHF</span>
                <span className="text-warm-gray">/ 120 min</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="service-card bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple/10 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-purple" />
              </div>
              <h3 className="text-xl mb-4">Institutions & Écoles</h3>
              <p className="text-warm-gray leading-relaxed mb-6">
                Soutien spécialisé : maladies auto-immunes, EMS, établissements scolaires.
              </p>
              <div className="text-warm-gray">
                Sur demande
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/prestations"
              className="inline-flex items-center gap-2 font-medium text-cyan hover:text-cyan-dark transition-colors"
            >
              Voir toutes les prestations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-24 bg-gradient-to-br from-cyan/5 via-transparent to-magenta/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-handwritten text-3xl text-purple mb-4 block">
              Témoignages
            </span>
            <h2 className="mb-12">Ce qu'ils en disent</h2>

            <blockquote className="relative">
              <p className="text-2xl md:text-3xl font-display italic text-charcoal leading-relaxed mb-8">
                "Elle a été une bouffée d'oxygène pour moi...
                Mme Roon a fait les créations avec moi, me prenant la main."
              </p>
              <footer className="font-medium text-warm-gray">
                — Roxane B.
              </footer>
            </blockquote>

            <Link
              to="/temoignages"
              className="inline-flex items-center gap-2 mt-12 font-medium text-cyan hover:text-cyan-dark transition-colors"
            >
              Lire plus de témoignages
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan via-purple to-magenta opacity-90" />
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
          style={{ backgroundImage: `url(${asset("assets/bb9807761db53c168f50e82010f77a18.jpg")})` }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Prêt·e à commencer votre voyage créatif ?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Offrez-vous une séance d'essai à tarif réduit pour découvrir l'art-thérapie.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-charcoal font-medium rounded-full hover:bg-paper-cream transition-colors shadow-lg"
            >
              Réserver une séance d'essai — 90 CHF
            </Link>
            <a
              href="tel:+41788421492"
              className="px-8 py-4 text-white font-medium border-2 border-white/30 rounded-full hover:bg-white/10 transition-colors"
            >
              +41 78 842 14 92
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
