import { OaMockPage } from './app.po';

describe('oa-mock App', () => {
  let page: OaMockPage;

  beforeEach(() => {
    page = new OaMockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
