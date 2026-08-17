import { createElement, type ComponentType } from "react";
import { createBrowserRouter, useNavigate } from "react-router";
import type { Navigate, Screen } from "./common/types";
import AddBill from "./pages/AddBill/AddBill";
import AddEMI from "./pages/AddEMI/AddEMI";
import AddSubscription from "./pages/AddSubscription/AddSubscription";
import EditSubscription from "./pages/EditSubscription/EditSubscription";
import Index from "./pages/Index/Index";
import Insights from "./pages/Insights/Insights";
import Overdue from "./pages/Overdue/Overdue";
import OverdueDetails from "./pages/OverdueDetails/OverdueDetails";
import Recharge from "./pages/Recharge/Recharge";
import SubscriptionDetails from "./pages/SubscriptionDetails/SubscriptionDetails";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import Notifications from "./pages/notifications/Notifications";

const screenPaths: Record<Screen, string> = {
  home: "/",
  subscription: "/subscriptions",
  details: "/subscriptions/details",
  edit: "/subscriptions/details/edit",
  "add-subscription": "/add-subscription",
  "add-emi": "/add-emi",
  "add-bill": "/add-bill",
  overdue: "/overdue",
  "overdue-details": "/overdue/details",
  recharge: "/recharge",
  insights: "/insights",
  notifications: "/notifications",
};

function withNavigation(Page: ComponentType<{ go: Navigate }>) {
  return function RoutedPage() {
    const navigate = useNavigate();
    const go: Navigate = (screen) => navigate(screenPaths[screen]);

    return createElement(Page, { go });
  };
}

const router = createBrowserRouter([
  { path: "/", Component: withNavigation(Index) },
  { path: "/subscriptions", Component: withNavigation(Subscriptions) },
  {
    path: "/subscriptions/details",
    Component: withNavigation(SubscriptionDetails),
  },
  {
    path: "/subscriptions/details/edit",
    Component: withNavigation(EditSubscription),
  },
  {
    path: "/add-subscription",
    Component: withNavigation(AddSubscription),
  },
  { path: "/add-emi", Component: withNavigation(AddEMI) },
  { path: "/add-bill", Component: withNavigation(AddBill) },
  { path: "/overdue", Component: withNavigation(Overdue) },
  {
    path: "/overdue/details",
    Component: withNavigation(OverdueDetails),
  },
  { path: "/recharge", Component: withNavigation(Recharge) },
  { path: "/insights", Component: withNavigation(Insights) },
  { path: '/notifications', Component: withNavigation(Notifications)}
]);

export default router;
