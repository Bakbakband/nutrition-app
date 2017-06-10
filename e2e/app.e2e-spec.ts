import { NutritionAppPage } from './app.po';

describe('nutrition-app App', () => {
  let page: NutritionAppPage;

  beforeEach(() => {
    page = new NutritionAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
