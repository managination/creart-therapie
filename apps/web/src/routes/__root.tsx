import { HeadContent, Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

import "../index.css";

export interface RouterAppContext {}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  component: RootComponent,
  head: () => ({
    meta: [
      {
        title: "Atelier Créart-Thérapie | Art-thérapie à Fribourg",
      },
      {
        name: "description",
        content: "Découvrez l'art-thérapie avec Monique Roon à Fribourg. Séances individuelles et ateliers de groupe pour adultes. Agréée ASCA.",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico",
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
