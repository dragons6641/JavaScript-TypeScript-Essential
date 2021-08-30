import { RouteInfo } from "../types";
import View from "./view";

export default class Router {
  private isStart: boolean;
  public defaultRoute: RouteInfo | null;
  public routeTable: RouteInfo[];

  constructor() {
    window.addEventListener(`hashchange`, this.route.bind(this));

    this.isStart = false;
    this.defaultRoute = null;
    this.routeTable = [];

    return;
  }

  public setDefaultPage = (page: View, params: RegExp | null = null): void => {
    this.defaultRoute = { path: ``, page, params };

    return;
  };

  public addRoutePath = (
    path: string,
    page: View,
    params: RegExp | null = null
  ): void => {
    this.routeTable.push({ path, page, params });

    if (!this.isStart) {
      this.isStart = true;
      setTimeout(this.route.bind(this), 0);
    }

    return;
  };

  private route = (): void => {
    const routePath: string = location.hash;

    if (routePath === `` && this.defaultRoute) {
      this.defaultRoute.page.render();

      return;
    }

    for (const routeInfo of this.routeTable) {
      if (routePath.indexOf(routeInfo.path) >= 0) {
        if (routeInfo.params) {
          const parseParams: RegExpMatchArray | null = routePath.match(
            routeInfo.params
          );

          if (parseParams) {
            routeInfo.page.render.apply(null, [parseParams[1]]);
          }
        } else {
          routeInfo.page.render();
        }

        return;
      }
    }

    return;
  };
}
