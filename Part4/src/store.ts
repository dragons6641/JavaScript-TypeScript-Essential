import { NewsFeed, NewsStore } from "./types";

export default class Store implements NewsStore {
  private feeds: NewsFeed[];
  private _currentPage: number;

  constructor() {
    this.feeds = [];
    this._currentPage = 1;

    return;
  }

  get currentPage() {
    return this._currentPage;
  }

  get prevPage(): number {
    return this._currentPage > 1 ? this._currentPage - 1 : 1;
  }

  get nextPage(): number {
    return this._currentPage < 3 ? this._currentPage + 1 : 3;
  }

  get numberOfFeed(): number {
    return this.feeds.length;
  }

  get hasFeeds(): boolean {
    return this.feeds.length > 0;
  }

  set currentPage(page: number) {
    this._currentPage = page;

    return;
  }

  getFeed = (position: number): NewsFeed => {
    return this.feeds[position];
  };

  getAllFeeds = (): NewsFeed[] => {
    return this.feeds;
  };

  setFeeds = (feeds: NewsFeed[]): void => {
    this.feeds = feeds.map((feed) => ({ ...feed, read: false }));

    return;
  };

  makeRead = (id: number): void => {
    const feed: NewsFeed | undefined = this.feeds.find(
      (feed: NewsFeed) => feed.id === id
    );

    if (feed) {
      feed.read = true;
    }

    return;
  };
}
