import { Main } from "../page";
import { ReactElement } from "react";
import Player from "../component/Mesh/Player";

export interface IRoute {
  id: string;
  path: string;
  page: () => ReactElement;
  children?: IRoute[];
}

export const PATH = {
  MAIN: "/main",
  PLAYER: "/player",
};

export const routeList: IRoute[] = [
  {
    id: "main",
    path: "/",
    page: Main,
  },
];
