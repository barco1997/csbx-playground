import { Route } from "./types";
import { useCurrentView } from "./utils";

export const RenderRoutes = ({
  routes,
  treeLevel = 0,
}: {
  routes: Route[];
  treeLevel?: number;
}) => {
  const { allMatchedViews } = useCurrentView();
  const currentLevelMatchedViews = allMatchedViews.slice(0, treeLevel + 1);

  const currentLevelRoute = currentLevelMatchedViews.reduce<{
    routes: Route[];
    currentRoute?: Route;
  }>(
    (acc, currentEl) => {
      const currentRoute =
        acc.routes.find((route) => route.view === currentEl) || ({} as Route);
      return {
        currentRoute,
        routes: currentRoute.children,
      };
    },
    { routes }
  ).currentRoute;

  const { children, layout, element } = currentLevelRoute || {};

  const renderElement =
    layout && children ? layout({ routes: children }) : element || null;

  return renderElement;
};
