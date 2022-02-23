import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages";

type JSXElement = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXElement> | JSXElement;
  name: string;
}

//To import components into lazy() we need to export default the component
const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "lazyLayout" */ "../01-lazyload/layout/lazyLayout"
    )
);

const routes: Route[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    Component: LazyLayout,
    name: "LazyLayout -Dash",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];

export default routes;
