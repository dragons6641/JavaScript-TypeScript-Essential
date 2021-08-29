import Router from "./core/router";
import { NewsFeedView, NewsDetailView } from "./page";
import Store from "./store";

/*
const applyApiMixins = (targetClass: any, baseClasses: any[]): void => {
  baseClasses.forEach((baseClass) => {
    Object.getOwnPropertyNames(baseClass.prototype).forEach((name) => {
      const descriptor: PropertyDescriptor | undefined =
        Object.getOwnPropertyDescriptor(baseClass.prototype, name);

      if (descriptor) {
        Object.defineProperty(targetClass.prototype, name, descriptor);
      }
    });
  });
  return;
};

applyApiMixins(NewsFeedApi, [Api]);
applyApiMixins(NewsDetailApi, [Api]);
*/

const store: Store = new Store();
const router: Router = new Router();
const newsFeedView: NewsFeedView = new NewsFeedView(`root`, store);
const newsDetailView: NewsDetailView = new NewsDetailView(`root`, store);

router.setDefaultPage(newsFeedView);
router.addRoutePath(`/page/`, newsFeedView, /page\/(\d+)/);
router.addRoutePath(`/show/`, newsDetailView, /show\/(\d+)/);
