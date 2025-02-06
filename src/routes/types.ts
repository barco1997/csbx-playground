import { ReactNode } from "react";
import { MAPPING } from "./mapping";

export type View = keyof typeof MAPPING;

export type LocalPath = (typeof MAPPING)[View];

export type Route = {
  view: View;
  layout?: (props: { routes: Route[] }) => ReactNode;
  element?: ReactNode;
  children: Route[];
};
