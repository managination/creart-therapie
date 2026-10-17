import { HeadContent, Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

import "../index.css";

export interface RouterAppContext {}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  component: RootComponent,
  // Fallback head tags — every page route overrides these via its own `head`
  // (deepest route wins for title/description). Static-only tags (og:*,
  // twitter:*, icons, JSON-LD) live in index.html and must NOT be set here:
  // React 19 does not dedupe them against the static ones, causing duplicates.
  head: () => ({
    meta: [
      {
        title: "Atelier Créart-Thérapie | Art-thérapie à Fribourg",
      },
      {
        name: "description",
        content: "Atelier d'art-thérapie à Fribourg : séances individuelles et ateliers de groupe avec Monique Roon, art-thérapeute agréée ASCA. Séance d'essai 90 CHF.",
      },
    ],
  }),
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <TanStackRouterDevtools position="bottom-left" />
    </>
  );
}
