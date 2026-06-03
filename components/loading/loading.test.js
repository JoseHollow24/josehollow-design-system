import './dist/dsh-loading.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout } from '@open-wc/testing';

describe('Test dsh-loading', () => {
  it('should render with default props', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-loading></dsh-loading>`);
    await aTimeout(0);

    expect(component.loop).to.equal(false);
    expect(component.error).to.equal(false);
    expect(component.animationtime).to.equal(4000);
    expect(component.progress).to.equal(0);
  });

  it('should enable loop mode', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-loading loop></dsh-loading>`);
    await aTimeout(0);

    expect(component.loop).to.equal(true);
  });

  it('should show error state', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-loading error></dsh-loading>`);
    await aTimeout(0);

    expect(component.error).to.equal(true);
  });

  it('should update progress value', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-loading progress="50"></dsh-loading>`);
    await aTimeout(0);

    expect(component.progress).to.equal(50);
  });

  it('should update animationtime', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-loading animationtime="2000"></dsh-loading>`);
    await aTimeout(0);

    expect(component.animationtime).to.equal(2000);
  });

  it('should render with message slot', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-loading>
        <span slot="message">Cargando...</span>
      </dsh-loading>
    `);
    await aTimeout(0);

    const slot = component.querySelector('[slot="message"]');
    expect(slot).to.not.be.null;
    expect(slot.textContent).to.equal('Cargando...');
  });
});
