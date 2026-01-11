import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check, Clock, Sparkles } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "seance-essai",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In production, you would send the form data to your backend
    console.log("Form submitted:", formData);

    setFormState("sent");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        {/* Decorative brush stroke */}
        <div className="absolute top-0 left-0 w-full h-64 overflow-hidden">
          <svg viewBox="0 0 1200 200" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,100 Q300,180 600,100 T1200,100 L1200,0 L0,0 Z"
              fill="url(#brushGradient)"
              opacity="0.1"
            />
            <defs>
              <linearGradient id="brushGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00BCD4" />
                <stop offset="50%" stopColor="#E91E63" />
                <stop offset="100%" stopColor="#FFEB3B" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-handwritten text-2xl text-cyan mb-4 block">
            Contact
          </span>
          <h1 className="mb-6">
            Prenons <span className="paint-underline">contact</span>
          </h1>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Une question ? Envie de réserver une séance ?
            N'hésitez pas à me contacter.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl mb-8">Informations</h2>

              <div className="space-y-6 mb-12">
                <a
                  href="mailto:info@creart-therapie.ch"
                  className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 bg-cyan/10 rounded-xl flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                    <Mail className="w-6 h-6 text-cyan" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Email</p>
                    <p className="text-warm-gray">info@creart-therapie.ch</p>
                  </div>
                </a>

                <a
                  href="tel:+41788421492"
                  className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 bg-magenta/10 rounded-xl flex items-center justify-center group-hover:bg-magenta/20 transition-colors">
                    <Phone className="w-6 h-6 text-magenta" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Téléphone</p>
                    <p className="text-warm-gray">+41 78 842 14 92</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-purple/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Localisation</p>
                    <p className="text-warm-gray">Région de Fribourg, Suisse</p>
                  </div>
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-cyan/5 rounded-2xl p-6">
                  <Clock className="w-8 h-8 text-cyan mb-4" />
                  <h4 className="font-display text-lg mb-2">Horaires</h4>
                  <p className="text-sm text-warm-gray">
                    Sur rendez-vous<br />
                    Du lundi au vendredi
                  </p>
                </div>

                <div className="bg-magenta/5 rounded-2xl p-6">
                  <Sparkles className="w-8 h-8 text-magenta mb-4" />
                  <h4 className="font-display text-lg mb-2">Séance d'essai</h4>
                  <p className="text-sm text-warm-gray">
                    90 CHF (au lieu de 120)<br />
                    75 minutes
                  </p>
                </div>
              </div>

              {/* ASCA Badge */}
              <div className="mt-8 p-6 bg-paper-cream rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <Check className="w-6 h-6 text-cyan" />
                  <span className="font-medium text-charcoal">Agréée ASCA</span>
                </div>
                <p className="text-sm text-warm-gray">
                  Remboursement par la plupart des assurances complémentaires suisses.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl">
              {formState === "sent" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-cyan/10 rounded-full flex items-center justify-center mb-6">
                    <Check className="w-10 h-10 text-cyan" />
                  </div>
                  <h3 className="text-2xl mb-4">Message envoyé !</h3>
                  <p className="text-warm-gray max-w-sm">
                    Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      Nom & Prénom *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-paper focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-colors"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-paper focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-colors"
                        placeholder="votre@email.ch"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-paper focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-colors"
                        placeholder="+41 XX XXX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-paper focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-colors"
                    >
                      <option value="seance-essai">Séance d'essai</option>
                      <option value="seance-individuelle">Séance individuelle</option>
                      <option value="atelier-groupe">Atelier de groupe</option>
                      <option value="institution">Intervention en institution</option>
                      <option value="question">Question générale</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-paper focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-colors resize-none"
                      placeholder="Décrivez votre demande..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    className="w-full btn-artistic flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === "sending" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-warm-gray text-center">
                    * Champs obligatoires. Vos données sont traitées de manière confidentielle.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-paper-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2>Où me trouver</h2>
            <p className="text-warm-gray mt-4">
              Je reçois en cabinet dans la région de Fribourg
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[2/1]">
            {/* Placeholder for Google Maps - in production, integrate actual Google Maps */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-paper to-magenta/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-cyan mx-auto mb-4" />
                <p className="text-xl font-display text-charcoal">Région de Fribourg</p>
                <p className="text-warm-gray">Suisse</p>
                <a
                  href="https://maps.google.com/?q=Fribourg,Switzerland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-cyan hover:text-cyan-dark transition-colors"
                >
                  Voir sur Google Maps
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
