import './dist/dsh-input.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout, oneEvent } from '@open-wc/testing';

describe('Test dsh-input', () => {
  it('should render with default props', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-input label="Campo"></dsh-input>`);
    await aTimeout(0);

    expect(component.type).to.equal('text');
    expect(component.disabled).to.equal(false);
    expect(component.clearable).to.equal(false);
    expect(component.required).to.equal(false);
    expect(component.variant).to.equal('');
  });

  it('should render password type', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-input type="password" label="Contraseña"></dsh-input>`);
    await aTimeout(0);

    expect(component.type).to.equal('password');
  });

  it('should render disabled state', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-input label="Campo" disabled></dsh-input>`);
    await aTimeout(0);

    expect(component.disabled).to.equal(true);
  });

  it('should render with error variant', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-input label="Campo" variant="error" errormessage="Campo inválido"></dsh-input>
    `);
    await aTimeout(0);

    expect(component.variant).to.equal('error');
    expect(component.errormessage).to.equal('Campo inválido');
  });

  it('should render with success variant', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-input label="Campo" variant="success"></dsh-input>`);
    await aTimeout(0);

    expect(component.variant).to.equal('success');
  });

  it('should render clearable', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-input label="Campo" clearable value="texto"></dsh-input>`);
    await aTimeout(0);

    expect(component.clearable).to.equal(true);
    expect(component.value).to.equal('texto');
  });

  it('should emit changeInput event on input', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-input label="Campo" type="text"></dsh-input>`);
    await aTimeout(0);

    const eventPromise = oneEvent(component, 'changeInput');
    const input = component.shadowRoot?.querySelector('input');
    if (input) {
      input.value = 'nuevo valor';
      input.dispatchEvent(new Event('input'));
    }

    const event = await eventPromise;
    expect(event.type).to.equal('changeInput');
  });
});
