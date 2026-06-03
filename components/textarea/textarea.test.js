import './dist/dsh-textarea.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout, oneEvent } from '@open-wc/testing';

describe('Test dsh-textarea', () => {
  it('should render with default props', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-textarea label="Campo"></dsh-textarea>`);
    await aTimeout(0);

    expect(component.disabled).to.equal(false);
    expect(component.counter).to.equal(false);
    expect(component.resizeHeight).to.equal(false);
    expect(component.error).to.equal(false);
    expect(component.success).to.equal(false);
    expect(component.maxlength).to.equal(280);
  });

  it('should render disabled state', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-textarea label="Campo" disabled></dsh-textarea>`);
    await aTimeout(0);

    expect(component.disabled).to.equal(true);
  });

  it('should render with counter', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-textarea label="Campo" counter maxlength="100"></dsh-textarea>`);
    await aTimeout(0);

    expect(component.counter).to.equal(true);
    expect(component.maxlength).to.equal(100);
  });

  it('should render error state', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-textarea label="Campo" error></dsh-textarea>`);
    await aTimeout(0);

    expect(component.error).to.equal(true);
  });

  it('should render success state', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-textarea label="Campo" success></dsh-textarea>`);
    await aTimeout(0);

    expect(component.success).to.equal(true);
  });

  it('should emit changeTextarea event on input', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-textarea label="Campo"></dsh-textarea>`);
    await aTimeout(0);

    const eventPromise = oneEvent(component, 'changeTextarea');
    const textarea = component.shadowRoot?.querySelector('textarea');
    if (textarea) {
      textarea.value = 'nuevo contenido';
      textarea.dispatchEvent(new Event('input'));
    }

    const event = await eventPromise;
    expect(event.type).to.equal('changeTextarea');
  });

  it('should update value prop', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-textarea label="Campo" value="texto inicial"></dsh-textarea>`);
    await aTimeout(0);

    expect(component.value).to.equal('texto inicial');
  });
});
