import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Users, Building, Clock, Check, Sparkles } from "lucide-react";

export const Route = createFileRoute("/prestations")({
  component: PrestationsPage,
});

function PrestationsPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/assets/P1044847.JPG"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-paper/95 via-paper/80 to-paper" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-handwritten text-2xl text-cyan mb-4 block">
            Mes prestations
          </span>
          <h1 className="mb-6">
            Comment puis-je vous <span className="paint-underline">accompagner</span> ?
          </h1>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Je propose diff\u00e9rentes formules adapt\u00e9es \u00e0 vos besoins et \u00e0 votre situation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Individual Sessions */}
            <div className="service-card bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-border">
              <div className="w-20 h-20 bg-cyan/10 rounded-2xl flex items-center justify-center mb-8">
                <Heart className="w-10 h-10 text-cyan" />
              </div>

              <h3 className="text-2xl mb-4">S\u00e9ances Individuelles</h3>

              <p className="text-warm-gray leading-relaxed mb-6">
                Accompagnement individuel des adultes lors de p\u00e9riodes difficiles
                de leur vie. Un espace rien qu'\u00e0 vous pour explorer vos \u00e9motions
                en toute confidentialit\u00e9.
              </p>

              <div className="border-t border-border pt-6 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-cyan" />
                  <span className="text-charcoal">75 minutes</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-display font-semibold text-charcoal">120 CHF</span>
                  <span className="text-warm-gray">/ s\u00e9ance</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Accompagnement personnalis\u00e9",
                  "Exploration \u00e9motionnelle",
                  "Outils vari\u00e9s (peinture, dessin, modelage)",
                  "Confidentialit\u00e9 assur\u00e9e",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-warm-gray">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="block w-full text-center py-4 bg-cyan text-white font-medium rounded-full hover:bg-cyan-dark transition-colors"
              >
                R\u00e9server
              </Link>
            </div>

            {/* Group Workshops */}
            <div className="service-card bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-border">
              <div className="w-20 h-20 bg-magenta/10 rounded-2xl flex items-center justify-center mb-8">
                <Users className="w-10 h-10 text-magenta" />
              </div>

              <h3 className="text-2xl mb-4">Ateliers de Groupe</h3>

              <p className="text-warm-gray leading-relaxed mb-6">
                Je propose chaque semaine un atelier de pointillisme, en groupe.
                Une exp\u00e9rience cr\u00e9ative partag\u00e9e dans une ambiance conviviale
                et bienveillante.
              </p>

              <div className="border-t border-border pt-6 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-magenta" />
                  <span className="text-charcoal">120 minutes</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-display font-semibold text-charcoal">50 CHF</span>
                  <span className="text-warm-gray">/ s\u00e9ance</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Technique du pointillisme",
                  "Ambiance conviviale",
                  "Mat\u00e9riel fourni",
                  "Petits groupes",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-magenta flex-shrink-0 mt-0.5" />
                    <span className="text-warm-gray">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="block w-full text-center py-4 bg-magenta text-white font-medium rounded-full hover:bg-magenta-dark transition-colors"
              >
                S'inscrire
              </Link>
            </div>

            {/* Institutions */}
            <div className="service-card bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-border">
              <div className="w-20 h-20 bg-purple/10 rounded-2xl flex items-center justify-center mb-8">
                <Building className="w-10 h-10 text-purple" />
              </div>

              <h3 className="text-2xl mb-4">Institutions & \u00c9coles</h3>

              <p className="text-warm-gray leading-relaxed mb-6">
                Soutien sp\u00e9cialis\u00e9 pour les personnes atteintes de maladies
                auto-immunes, r\u00e9sidents en EMS, et \u00e9l\u00e8ves en \u00e9tablissements scolaires.
              </p>

              <div className="border-t border-border pt-6 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-5 h-5 text-purple" />
                  <span className="text-charcoal">Programme sur mesure</span>
                </div>
                <div className="text-warm-gray">
                  Tarif sur demande
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Interventions en EMS",
                  "Ateliers scolaires",
                  "Maladies auto-immunes",
                  "Programme adapt\u00e9",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" />
                    <span className="text-warm-gray">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="block w-full text-center py-4 bg-purple text-white font-medium rounded-full hover:bg-purple-dark transition-colors"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trial Session */}
      <section className="py-24 bg-gradient-to-r from-cyan/10 via-magenta/5 to-purple/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl text-center">
            <span className="inline-block px-4 py-2 bg-yellow/20 rounded-full text-yellow-dark font-medium text-sm mb-6">
              Offre d\u00e9couverte
            </span>

            <h2 className="mb-4">S\u00e9ance d'essai</h2>

            <p className="text-lg text-warm-gray max-w-2xl mx-auto mb-8">
              Vous h\u00e9sitez ? D\u00e9couvrez l'art-th\u00e9rapie avec une premi\u00e8re s\u00e9ance
              \u00e0 tarif r\u00e9duit. Sans engagement, cette s\u00e9ance vous permet de
              d\u00e9couvrir ma m\u00e9thode et de voir si l'art-th\u00e9rapie vous convient.
            </p>

            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <p className="text-3xl font-display font-semibold text-charcoal">90 CHF</p>
                <p className="text-warm-gray">au lieu de 120 CHF</p>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-display font-semibold text-charcoal">75 min</p>
                <p className="text-warm-gray">s\u00e9ance compl\u00e8te</p>
              </div>
            </div>

            <Link to="/contact" className="btn-artistic inline-flex items-center gap-2">
              R\u00e9server ma s\u00e9ance d'essai
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ASCA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-cyan/10 rounded-full mb-8">
            <Check className="w-6 h-6 text-cyan" />
            <span className="font-medium text-cyan">Agr\u00e9\u00e9e ASCA</span>
          </div>

          <h2 className="mb-6">Remboursement assur\u00e9</h2>

          <p className="text-xl text-warm-gray max-w-2xl mx-auto mb-8">
            En tant que th\u00e9rapeute agr\u00e9\u00e9e ASCA, mes s\u00e9ances sont rembours\u00e9es
            par la plupart des assurances compl\u00e9mentaires suisses.
          </p>

          <p className="text-warm-gray">
            V\u00e9rifiez aupr\u00e8s de votre assurance le montant de la prise en charge
            pour l'art-th\u00e9rapie.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-24 bg-paper-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2>R\u00e9capitulatif des tarifs</h2>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-charcoal text-paper">
                  <th className="text-left p-6 font-display font-semibold">Prestation</th>
                  <th className="text-center p-6 font-display font-semibold">Dur\u00e9e</th>
                  <th className="text-right p-6 font-display font-semibold">Tarif</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-6 text-charcoal">S\u00e9ances individuelles</td>
                  <td className="p-6 text-center text-warm-gray">75 min</td>
                  <td className="p-6 text-right font-semibold text-charcoal">120 CHF</td>
                </tr>
                <tr className="border-b border-border bg-yellow/5">
                  <td className="p-6 text-charcoal">
                    S\u00e9ance d'essai
                    <span className="ml-2 text-xs px-2 py-1 bg-yellow/30 rounded-full text-yellow-dark">
                      -25%
                    </span>
                  </td>
                  <td className="p-6 text-center text-warm-gray">75 min</td>
                  <td className="p-6 text-right font-semibold text-charcoal">90 CHF</td>
                </tr>
                <tr>
                  <td className="p-6 text-charcoal">S\u00e9ances de groupe</td>
                  <td className="p-6 text-center text-warm-gray">120 min</td>
                  <td className="p-6 text-right font-semibold text-charcoal">50 CHF</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Des questions ?</h2>
          <p className="text-lg text-warm-gray mb-8">
            N'h\u00e9sitez pas \u00e0 me contacter pour discuter de vos besoins.
          </p>
          <Link to="/contact" className="btn-artistic inline-flex items-center gap-2">
            Prendre contact
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
