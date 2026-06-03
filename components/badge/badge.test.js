import './dist/dsh-badge.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout } from '@open-wc/testing';

describe('Test dsh-badge', () => {
  it('should render with default props', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-badge></dsh-badge>`);
    await aTimeout(0);

    expect(component.size).to.equal('s');
    expect(component.pulse).to.equal(false);
    expect(component.bell).to.equal(false);
    expect(component.shake).to.equal(false);
    expect(component.disabled).to.equal(false);
  });

  it('should update size prop', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-badge size="m"></dsh-badge>`);
    await aTimeout(0);

    expect(component.size).to.equal('m');
  });

  it('should enable pulse', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-badge pulse></dsh-badge>`);
    await aTimeout(0);

    expect(component.pulse).to.equal(true);
  });

  it('should show count', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-badge count="5"></dsh-badge>`);
    await aTimeout(0);

    expect(component.count).to.equal(5);
  });

  it('should enable bell mode', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-badge bell></dsh-badge>`);
    await aTimeout(0);

    expect(component.bell).to.equal(true);
  });

  it('should enable shake with bell', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-badge bell shake></dsh-badge>`);
    await aTimeout(0);

    expect(component.bell).to.equal(true);
    expect(component.shake).to.equal(true);
  });

  it('should update position prop', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-badge position="left"></dsh-badge>`);
    await aTimeout(0);

    expect(component.position).to.equal('left');
  });
});
