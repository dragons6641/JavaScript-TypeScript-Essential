import View from "../core/view";

export interface News {
  readonly id: number;
  readonly time_ago: string;
  readonly title: string;
  readonly url: string;
  readonly user: string;
  readonly content: string;
}

export interface NewsFeed extends News {
  readonly points: number;
  readonly comments_count: number;
  read?: boolean;
}

export interface NewsDetail extends News {
  readonly comments: NewsComment[];
}

export interface NewsComment extends News {
  readonly comments: NewsComment[];
  readonly level: number;
}

export interface NewsStore {
  hasFeeds: boolean;
  currentPage: number;
  numberOfFeed: number;
  prevPage: number;
  nextPage: number;
  getFeed: (position: number) => NewsFeed;
  getAllFeeds: () => NewsFeed[];
  setFeeds: (feeds: NewsFeed[]) => void;
  makeRead: (id: number) => void;
}

export interface RouteInfo {
  path: string;
  page: View;
  params: RegExp | null;
}
