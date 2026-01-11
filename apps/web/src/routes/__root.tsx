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
        title: "Atelier Cr\u00e9art-Th\u00e9rapie | Art-th\u00e9rapie \u00e0 Fribourg",
      },
      {
        name: "description",
        content: "D\u00e9couvrez l'art-th\u00e9rapie avec Monique Roon \u00e0 Fribourg. S\u00e9ances individuelles et ateliers de groupe pour adultes. Agr\u00e9\u00e9e ASCA.",
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
