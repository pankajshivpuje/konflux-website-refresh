import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import GettingStartedPage from "./pages/GettingStartedPage";
import DocumentationPage from "./pages/DocumentationPage";
import CommunityPage from "./pages/CommunityPage";
import BlogPage from "./pages/BlogPage";
import SupportPage from "./pages/SupportPage";
import AboutKonfluxPage from "./pages/AboutKonfluxPage";
import CoreConceptsPage from "./pages/CoreConceptsPage";
import TryKonfluxPage from "./pages/TryKonfluxPage";
import TryKonfluxHelmPage from "./pages/TryKonfluxHelmPage";
import TryKonfluxTsfPage from "./pages/TryKonfluxTsfPage";

export const router = createBrowserRouter(
  [{
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "getting-started", Component: GettingStartedPage },
      { path: "getting-started/about-konflux", Component: AboutKonfluxPage },
      { path: "getting-started/core-concepts", Component: CoreConceptsPage },
      { path: "getting-started/try-konflux", Component: TryKonfluxPage },
      { path: "getting-started/try-konflux/helm", Component: TryKonfluxHelmPage },
      { path: "getting-started/try-konflux/tsf", Component: TryKonfluxTsfPage },
      { path: "documentation", Component: DocumentationPage },
      { path: "community", Component: CommunityPage },
      { path: "blog", Component: BlogPage },
      { path: "support", Component: SupportPage },
      { path: "*", Component: HomePage },
    ],
  }],
  { basename: import.meta.env.BASE_URL },
);