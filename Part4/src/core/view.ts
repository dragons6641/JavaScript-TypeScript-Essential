export default abstract class View {
  private container: HTMLElement;
  private template: string;
  private renderTemplate: string;
  private htmlList: string[];

  constructor(containerId: string, template: string) {
    const containerElement: HTMLElement | null =
      document.getElementById(containerId);

    if (!containerElement) {
      throw `최상위 컨테이너가 없어 UI를 진행하지 못합니다.`;
    }

    this.container = containerElement;
    this.template = template;
    this.renderTemplate = template;
    this.htmlList = [];

    return;
  }

  protected updateView = (): void => {
    this.container.innerHTML = this.renderTemplate;
    this.renderTemplate = this.template;

    return;
  };

  protected addHtml = (htmlString: string): void => {
    this.htmlList.push(htmlString);

    return;
  };

  protected getHtml = (): string => {
    const snapshot: string = this.htmlList.join(``);

    this.clearHtmlList();

    return snapshot;
  };

  protected setTemplateData = (key: string, value: string): void => {
    this.renderTemplate = this.renderTemplate.replace(`{{__${key}__}}`, value);

    return;
  };

  private clearHtmlList = (): void => {
    this.htmlList = [];

    return;
  };

  abstract render: (...params: string[]) => void;
}
