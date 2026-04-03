import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Browse } from "./pages/Browse";
import { CampaignDetail } from "./pages/CampaignDetail";
import { Auth } from "./pages/Auth";
import { CreateFundraiser } from "./pages/CreateFundraiser";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "browse", Component: Browse },
      { path: "campaign/:id", Component: CampaignDetail },
      { path: "auth", Component: Auth },
      { path: "create", Component: CreateFundraiser },
    ],
  },
]);
