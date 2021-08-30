import View from "../core/view";

export default interface News {
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
  readonly hasFeeds: boolean;
  currentPage: number;
  readonly numberOfFeed: number;
  readonly prevPage: number;
  readonly nextPage: number;
  readonly getFeed: (position: number) => NewsFeed;
  readonly getAllFeeds: () => NewsFeed[];
  readonly setFeeds: (feeds: NewsFeed[]) => void;
  readonly makeRead: (id: number) => void;
}

export interface RouteInfo {
  readonly path: string;
  readonly page: View;
  readonly params: RegExp | null;
}
