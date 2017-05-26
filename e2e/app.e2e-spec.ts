import { EasycastPage } from './app.po';

describe('easycast App', () => {
  let page: EasycastPage;

  beforeEach(() => {
    page = new EasycastPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
