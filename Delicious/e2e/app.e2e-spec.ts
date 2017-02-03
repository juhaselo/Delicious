import { DeliciousPage } from './app.po';

describe('delicious App', function() {
  let page: DeliciousPage;

  beforeEach(() => {
    page = new DeliciousPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
