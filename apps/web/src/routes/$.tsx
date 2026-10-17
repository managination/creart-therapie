import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/$")({
  component: NotFoundPage,
  head: () => ({
    meta: [
      { title: "Page introuvable | Atelier Créart-Thérapie" },
      {
        name: "description",
        content: "La page que vous recherchez n'existe pas ou a été déplacée.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <span className="font-handwritten text-2xl text-magenta mb-4 block">
          Oups…
        </span>
        <h1 className="mb-6">
          Page <span className="paint-underline">introuvable</span>
        </h1>
        <p className="text-lg text-warm-gray leading-relaxed mb-10">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="btn-artistic inline-flex items-center gap-2">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
