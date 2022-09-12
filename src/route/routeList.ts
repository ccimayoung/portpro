import { Main } from "..page";
import { ReactElement } from "react";

export interface IRoute {
  id: string;
  path: string;
  page: () => ReactElement;
  children?: IRoute[];
}

export const PATH = {
  MAIN: "/main",
};

export const routeList: IRoute[] = [
  {
    id: "main",
    path: PATH.MAIN,
    page: Main,
  },
];
