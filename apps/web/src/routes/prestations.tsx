import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Users, Building, Clock, Check, Sparkles } from "lucide-react";
import { asset } from "@/lib/assets";

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
            src={asset("assets/P1044847.JPG")}
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
            Je propose différentes formules adaptées à vos besoins et à votre situation.
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

              <h3 className="text-2xl mb-4">Séances Individuelles</h3>

              <p className="text-warm-gray leading-relaxed mb-6">
                Accompagnement individuel des adultes lors de périodes difficiles
                de leur vie. Un espace rien qu'à vous pour explorer vos émotions
                en toute confidentialité.
              </p>

              <div className="border-t border-border pt-6 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-cyan" />
                  <span className="text-charcoal">75 minutes</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-display font-semibold text-charcoal">120 CHF</span>
                  <span className="text-warm-gray">/ séance</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Accompagnement personnalisé",
                  "Exploration émotionnelle",
                  "Outils variés (peinture, dessin, modelage)",
                  "Confidentialité assurée",
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
                Réserver
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
                Une expérience créative partagée dans une ambiance conviviale
                et bienveillante.
              </p>

              <div className="border-t border-border pt-6 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-magenta" />
                  <span className="text-charcoal">120 minutes</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-display font-semibold text-charcoal">50 CHF</span>
                  <span className="text-warm-gray">/ séance</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Technique du pointillisme",
                  "Ambiance conviviale",
                  "Matériel fourni",
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

              <h3 className="text-2xl mb-4">Institutions & Écoles</h3>

              <p className="text-warm-gray leading-relaxed mb-6">
                Soutien spécialisé pour les personnes atteintes de maladies
                auto-immunes, résidents en EMS, et élèves en établissements scolaires.
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
                  "Programme adapté",
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
              Offre découverte
            </span>

            <h2 className="mb-4">Séance d'essai</h2>

            <p className="text-lg text-warm-gray max-w-2xl mx-auto mb-8">
              Vous hésitez ? Découvrez l'art-thérapie avec une première séance
              à tarif réduit. Sans engagement, cette séance vous permet de
              découvrir ma méthode et de voir si l'art-thérapie vous convient.
            </p>

            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <p className="text-3xl font-display font-semibold text-charcoal">90 CHF</p>
                <p className="text-warm-gray">au lieu de 120 CHF</p>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-display font-semibold text-charcoal">75 min</p>
                <p className="text-warm-gray">séance complète</p>
              </div>
            </div>

            <Link to="/contact" className="btn-artistic inline-flex items-center gap-2">
              Réserver ma séance d'essai
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
            <span className="font-medium text-cyan">Agréée ASCA</span>
          </div>

          <h2 className="mb-6">Remboursement assuré</h2>

          <p className="text-xl text-warm-gray max-w-2xl mx-auto mb-8">
            En tant que thérapeute agréée ASCA, mes séances sont remboursées
            par la plupart des assurances complémentaires suisses.
          </p>

          <p className="text-warm-gray">
            Vérifiez auprès de votre assurance le montant de la prise en charge
            pour l'art-thérapie.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-24 bg-paper-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2>Récapitulatif des tarifs</h2>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-charcoal text-paper">
                  <th className="text-left p-6 font-display font-semibold">Prestation</th>
                  <th className="text-center p-6 font-display font-semibold">Durée</th>
                  <th className="text-right p-6 font-display font-semibold">Tarif</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-6 text-charcoal">Séances individuelles</td>
                  <td className="p-6 text-center text-warm-gray">75 min</td>
                  <td className="p-6 text-right font-semibold text-charcoal">120 CHF</td>
                </tr>
                <tr className="border-b border-border bg-yellow/5">
                  <td className="p-6 text-charcoal">
                    Séance d'essai
                    <span className="ml-2 text-xs px-2 py-1 bg-yellow/30 rounded-full text-yellow-dark">
                      -25%
                    </span>
                  </td>
                  <td className="p-6 text-center text-warm-gray">75 min</td>
                  <td className="p-6 text-right font-semibold text-charcoal">90 CHF</td>
                </tr>
                <tr>
                  <td className="p-6 text-charcoal">Séances de groupe</td>
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
            N'hésitez pas à me contacter pour discuter de vos besoins.
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
