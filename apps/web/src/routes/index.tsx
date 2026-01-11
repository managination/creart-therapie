import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Heart, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan/10 blob" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-magenta/10 blob-alt" />
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-yellow/10 blob float-delayed" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="animate-fade-in-up">
              <h1 className="text-balance mb-6">
                <span className="block">Cultive ta cr\u00e9ativit\u00e9</span>
                <span className="block">et transforme ton</span>
                <span className="paint-underline">quotidien</span>
                <span>.</span>
              </h1>
              <p className="text-lg md:text-xl text-warm-gray leading-relaxed mb-8 max-w-xl">
                L'art-th\u00e9rapie ouvre un espace, un lieu, o\u00f9 vous pourrez contacter
                votre enfant int\u00e9rieur pour le laisser s'exprimer et lib\u00e9rer son
                potentiel cr\u00e9atif.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/art-therapie" className="btn-artistic inline-flex items-center gap-2">
                  D\u00e9couvrir l'atelier
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
                  <p className="font-medium text-charcoal">Agr\u00e9\u00e9e ASCA</p>
                  <p className="text-sm text-warm-gray">Rembours\u00e9e par les assurances compl\u00e9mentaires</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in animation-delay-200">
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan/20 via-magenta/10 to-yellow/20 rounded-[3rem] blur-2xl" />

                {/* Main image */}
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img
                    src="/assets/P1055584.jpg"
                    alt="S\u00e9ance d'art-th\u00e9rapie - cr\u00e9ation artistique"
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
                </div>

                {/* Floating accent */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow rounded-full opacity-80 blur-sm" />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-magenta rounded-full opacity-60 blur-sm" />
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
            <span className="font-handwritten text-2xl text-magenta mb-4 block">
              Bienvenue
            </span>
            <h2 className="mb-6">
              Poser un regard <span className="gradient-text">diff\u00e9rent</span>
            </h2>
            <p className="text-lg text-warm-gray leading-relaxed">
              En laissant de la place \u00e0 votre cr\u00e9ativit\u00e9, vous pourrez poser un regard
              diff\u00e9rent sur une situation qui vous pr\u00e9occupe, que ce soit une maladie,
              un deuil, une s\u00e9paration, un \u00e9v\u00e9nement douloureux, une remise en question...
            </p>
          </div>

          {/* Video Preview */}
          <div className="mt-16 relative max-w-4xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan/20 via-purple/20 to-magenta/20 rounded-3xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                src="/assets/creart-therapie-demo-seance.mp4"
                poster="/assets/pinceau-fond-presentation.jpeg"
                controls
                className="w-full aspect-video object-cover"
              >
                Votre navigateur ne supporte pas la lecture vid\u00e9o.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-handwritten text-2xl text-cyan mb-4 block">
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
              <h3 className="text-xl mb-4">S\u00e9ances Individuelles</h3>
              <p className="text-warm-gray leading-relaxed mb-6">
                Accompagnement individuel des adultes lors de p\u00e9riodes difficiles de leur vie.
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
              <h3 className="text-xl mb-4">Institutions & \u00c9coles</h3>
              <p className="text-warm-gray leading-relaxed mb-6">
                Soutien sp\u00e9cialis\u00e9 : maladies auto-immunes, EMS, \u00e9tablissements scolaires.
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
            <span className="font-handwritten text-2xl text-purple mb-4 block">
              T\u00e9moignages
            </span>
            <h2 className="mb-12">Ce qu'ils en disent</h2>

            <blockquote className="relative">
              <p className="text-2xl md:text-3xl font-display italic text-charcoal leading-relaxed mb-8">
                "Elle a \u00e9t\u00e9 une bouff\u00e9e d'oxyg\u00e8ne pour moi...
                Mme Roon a fait les cr\u00e9ations avec moi, me prenant la main."
              </p>
              <footer className="font-medium text-warm-gray">
                \u2014 Roxane B.
              </footer>
            </blockquote>

            <Link
              to="/temoignages"
              className="inline-flex items-center gap-2 mt-12 font-medium text-cyan hover:text-cyan-dark transition-colors"
            >
              Lire plus de t\u00e9moignages
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan via-purple to-magenta opacity-90" />
        <div className="absolute inset-0 bg-[url('/assets/bb9807761db53c168f50e82010f77a18.jpg')] bg-cover bg-center mix-blend-overlay opacity-30" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Pr\u00eat\u00b7e \u00e0 commencer votre voyage cr\u00e9atif ?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Offrez-vous une s\u00e9ance d'essai \u00e0 tarif r\u00e9duit pour d\u00e9couvrir l'art-th\u00e9rapie.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-charcoal font-medium rounded-full hover:bg-paper-cream transition-colors shadow-lg"
            >
              R\u00e9server une s\u00e9ance d'essai \u2014 90 CHF
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
