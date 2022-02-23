import { lazy, LazyExoticComponent } from "react";

type JSXElement = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXElement> | JSXElement;
  name: string;
}

//To import components into lazy() we need to export default the component
const Lazy1 = lazy(() => import("../01-lazyload/pages/lazyPage"));
const lazy2 = lazy(() => import("../01-lazyload/pages/lazyPage2"));
const Lazy3 = lazy(() => import("../01-lazyload/pages/lazyPage3"));

const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: Lazy1,
    name: "Lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: lazy2,
    name: "Lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: Lazy3,
    name: "Lazy-3",
  },
];

export default routes;
