import { Ng2DeployAzurePage } from './app.po';

describe('ng2-deploy-azure App', function() {
  let page: Ng2DeployAzurePage;

  beforeEach(() => {
    page = new Ng2DeployAzurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
