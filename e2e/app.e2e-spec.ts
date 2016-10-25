import { Carapp03Page } from './app.po';

describe('carapp03 App', function() {
  let page: Carapp03Page;

  beforeEach(() => {
    page = new Carapp03Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
