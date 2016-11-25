import { NgTKUFloor3DPage } from './app.po';

describe('ng-tkufloor3-d App', function() {
  let page: NgTKUFloor3DPage;

  beforeEach(() => {
    page = new NgTKUFloor3DPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
