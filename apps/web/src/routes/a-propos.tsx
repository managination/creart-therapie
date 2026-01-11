import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Heart, Sparkles } from "lucide-react";

export const Route = createFileRoute("/a-propos")({
  component: AProposPage,
});

function AProposPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-20 w-80 h-80 bg-magenta/10 blob" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-cyan/10 blob-alt" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span className="font-handwritten text-2xl text-magenta mb-4 block">
                \u00c0 propos
              </span>
              <h1 className="mb-6">
                Monique Roon
              </h1>
              <p className="text-2xl font-display italic text-purple mb-8">
                "Accoucheuse d'artistes"
              </p>
              <p className="text-lg text-warm-gray leading-relaxed">
                Art-th\u00e9rapeute passionn\u00e9e, j'accompagne les personnes en difficult\u00e9
                sur le chemin de la transformation par la cr\u00e9ation artistique.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-cyan/20 via-magenta/10 to-purple/20 rounded-full blur-3xl" />
              <div className="relative organic-mask overflow-hidden">
                <img
                  src="/assets/P1044865.JPG"
                  alt="Monique Roon - Art-th\u00e9rapeute"
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paint divider */}
      <div className="paint-divider" />

      {/* Story Section */}
      <section className="py-24 bg-paper-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* My Story */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-cyan/10 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-cyan" />
                </div>
                <h2 className="text-3xl">Mon Histoire</h2>
              </div>

              <div className="prose prose-lg max-w-none text-warm-gray">
                <p className="text-xl leading-relaxed mb-6">
                  En 2007, suite \u00e0 une p\u00e9riode difficile, j'ai d\u00e9couvert l'art-th\u00e9rapie
                  qui m'a permis de me reconstruire tout en d\u00e9couvrant ma cr\u00e9ativit\u00e9.
                </p>
                <p className="leading-relaxed mb-6">
                  Cette exp\u00e9rience transformatrice m'a convaincue de la puissance
                  de l'expression artistique comme outil de gu\u00e9rison et de
                  d\u00e9veloppement personnel.
                </p>
                <p className="leading-relaxed">
                  Aujourd'hui, je mets cette exp\u00e9rience au service des personnes
                  qui traversent des moments difficiles, les accompagnant avec
                  bienveillance sur leur propre chemin de transformation.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-cyan/30">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-cyan rounded-full" />
                <p className="font-handwritten text-lg text-cyan mb-1">2007</p>
                <p className="text-charcoal font-medium">D\u00e9couverte de l'art-th\u00e9rapie</p>
                <p className="text-sm text-warm-gray">Exp\u00e9rience personnelle transformatrice</p>
              </div>

              <div className="relative pl-8 border-l-2 border-magenta/30">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-magenta rounded-full" />
                <p className="font-handwritten text-lg text-magenta mb-1">2010</p>
                <p className="text-charcoal font-medium">Formation certifiante</p>
                <p className="text-sm text-warm-gray">Dipl\u00f4me d'art-th\u00e9rapeute</p>
              </div>

              <div className="relative pl-8 border-l-2 border-purple/30">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-purple rounded-full" />
                <p className="font-handwritten text-lg text-purple mb-1">Aujourd'hui</p>
                <p className="text-charcoal font-medium">Pratique en cabinet</p>
                <p className="text-sm text-warm-gray">R\u00e9gion de Fribourg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formation & Experience */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formation */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-magenta/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-magenta" />
                </div>
                <h3 className="text-2xl">Formation</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 bg-magenta rounded-full" />
                  <p className="text-warm-gray">Form\u00e9e en 2010 \u00e0 l'art-th\u00e9rapie</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 bg-magenta rounded-full" />
                  <p className="text-warm-gray">Certification ASCA reconnue</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 bg-magenta rounded-full" />
                  <p className="text-warm-gray">Formation continue r\u00e9guli\u00e8re</p>
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-purple" />
                </div>
                <h3 className="text-2xl">Exp\u00e9rience</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 bg-purple rounded-full" />
                  <p className="text-warm-gray">Interventions en EMS</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 bg-purple rounded-full" />
                  <p className="text-warm-gray">Ateliers en \u00e9tablissements scolaires</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 bg-purple rounded-full" />
                  <p className="text-warm-gray">Accompagnement individuel en cabinet</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-gradient-to-br from-cyan/5 via-transparent to-magenta/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-handwritten text-2xl text-cyan mb-4 block">
              Mon approche
            </span>
            <h2>Accompagner pour reconnecter</h2>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
            <p className="text-xl text-charcoal leading-relaxed mb-6">
              Mon r\u00f4le est de vous accompagner pour reconnecter avec votre
              \u00e9nergie vitale. Je cr\u00e9e un espace s\u00e9curisant o\u00f9 vous pouvez explorer
              vos \u00e9motions et votre cr\u00e9ativit\u00e9 sans jugement.
            </p>
            <p className="text-lg text-warm-gray leading-relaxed">
              Ensemble, nous utilisons les outils artistiques comme pont vers
              votre monde int\u00e9rieur. Pas besoin de talent artistique \u2014
              seule compte votre envie d'explorer et de vous exprimer.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-handwritten text-2xl text-magenta mb-4 block">
              L'atelier
            </span>
            <h2>Un espace de cr\u00e9ation</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img
                src="/assets/P1044847.JPG"
                alt="L'atelier"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img
                src="/assets/P1055567.jpg"
                alt="Mat\u00e9riel artistique"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square col-span-2 lg:col-span-1">
              <img
                src="/assets/pinceau-fond-presentation.jpeg"
                alt="Pinceaux"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-paper-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Faisons connaissance</h2>
          <p className="text-lg text-warm-gray mb-8">
            Je serais ravie de vous rencontrer et de discuter de vos besoins.
          </p>
          <Link to="/contact" className="btn-artistic inline-flex items-center gap-2">
            Me contacter
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
