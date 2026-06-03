import './dist/dsh-icon.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout } from '@open-wc/testing';

describe('Test dsh-icon', () => {
  it('should render with default props', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-icon></dsh-icon>`);
    await aTimeout(0);

    expect(component.iconName).to.equal('fa-bell');
    expect(component.faStyles).to.equal('fas');
    expect(component.color).to.equal('g1');
    expect(component.size).to.equal('s1');
  });

  it('should update iconName prop', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-icon icon-name="fa-user"></dsh-icon>`);
    await aTimeout(0);

    expect(component.iconName).to.equal('fa-user');
  });

  it('should update faStyles prop', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-icon fa-styles="far"></dsh-icon>`);
    await aTimeout(0);

    expect(component.faStyles).to.equal('far');
  });

  it('should update size prop', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-icon size="s5"></dsh-icon>`);
    await aTimeout(0);

    expect(component.size).to.equal('s5');
  });

  it('should update color prop', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-icon color="c1"></dsh-icon>`);
    await aTimeout(0);

    expect(component.color).to.equal('c1');
  });

  it('should render with multiple props combined', async function () {
    this.timeout(10000);

    const component = fixtureSync(
      html`<dsh-icon icon-name="fa-heart" fa-styles="fas" size="s3" color="r1"></dsh-icon>`
    );
    await aTimeout(0);

    expect(component.iconName).to.equal('fa-heart');
    expect(component.faStyles).to.equal('fas');
    expect(component.size).to.equal('s3');
    expect(component.color).to.equal('r1');
  });
});
