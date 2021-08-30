import { NEWS_URL, CONTENT_URL } from "../config";
import { NewsFeed, NewsDetail } from "../types";

export default class Api {
  // private xhr: XMLHttpRequest;
  private url: string;

  constructor(url: string) {
    // this.xhr = new XMLHttpRequest();
    this.url = url;

    return;
  }

  /*
  protected getRequestWithXHR = <AjaxResponse>(
    cb: (data: AjaxResponse) => void
  ): void => {
    this.xhr.open(`GET`, this.url);
    this.xhr.addEventListener(`load`, () => {
      cb(JSON.parse(this.xhr.response) as AjaxResponse);

      return;
    });
    this.xhr.send();

    return;
  };

  protected getRequestWithPromise = <AjaxResponse>(
    cb: (data: AjaxResponse) => void
  ): void => {
    fetch(this.url)
      .then((response) => response.json())
      .then(cb)
      .catch(() => {
        console.error(`데이터를 불러오지 못했습니다.`);

        return;
      });

    return;
  };
  */

  protected request = async <AjaxResponse>(): Promise<AjaxResponse> => {
    const response: Response = await fetch(this.url);

    return (await response.json()) as AjaxResponse;
  };
}

export class NewsFeedApi extends Api {
  constructor() {
    super(NEWS_URL);

    return;
  }

  /*
  public getDataWithXHR(cb: (data: NewsFeed[]) => void): void {
    return this.getRequestWithXHR<NewsFeed[]>(cb);
  }

  public getDataWithPromise(cb: (data: NewsFeed[]) => void): void {
    return this.getRequestWithPromise<NewsFeed[]>(cb);
  }
  */

  public getData = async (): Promise<NewsFeed[]> => {
    return this.request<NewsFeed[]>();
  };
}

export class NewsDetailApi extends Api {
  constructor(id: string) {
    super(CONTENT_URL.replace("@id", id));

    return;
  }

  /*
  public getDataWithXHR(cb: (data: NewsDetail) => void): void {
    return this.getRequestWithXHR<NewsDetail>(cb);
  }

  public getDataWithPromise(cb: (data: NewsDetail) => void): void {
    return this.getRequestWithPromise<NewsDetail>(cb);
  }
  */

  public getData = async (): Promise<NewsDetail> => {
    return this.request<NewsDetail>();
  };
}
