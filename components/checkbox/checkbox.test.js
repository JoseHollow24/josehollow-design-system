import './dist/dsh-checkbox.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout, oneEvent } from '@open-wc/testing';

describe('Test dsh-checkbox', () => {
  it('should render with default props', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-checkbox label="Opción"></dsh-checkbox>`);
    await aTimeout(0);

    expect(component.checked).to.equal(false);
    expect(component.disabled).to.equal(false);
    expect(component.error).to.equal(false);
    expect(component.indeterminate).to.equal(false);
    expect(component.dark).to.equal(false);
  });

  it('should render checked state', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-checkbox label="Opción" checked></dsh-checkbox>`);
    await aTimeout(0);

    expect(component.checked).to.equal(true);
  });

  it('should render disabled state', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-checkbox label="Opción" disabled></dsh-checkbox>`);
    await aTimeout(0);

    expect(component.disabled).to.equal(true);
  });

  it('should render error state', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-checkbox label="Opción" error></dsh-checkbox>`);
    await aTimeout(0);

    expect(component.error).to.equal(true);
  });

  it('should render indeterminate state', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-checkbox label="Opción" indeterminate></dsh-checkbox>`);
    await aTimeout(0);

    expect(component.indeterminate).to.equal(true);
  });

  it('should emit checkbox-change event when clicked', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-checkbox id="test" name="test" label="Opción" value="val"></dsh-checkbox>
    `);
    await aTimeout(0);

    const eventPromise = oneEvent(component, 'checkbox-change');
    const input = component.shadowRoot?.querySelector('input[type="checkbox"]');
    if (input) input.click();

    const event = await eventPromise;
    expect(event.type).to.equal('checkbox-change');
    expect(event.bubbles).to.equal(true);
  });

  it('should not emit events when disabled', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-checkbox label="Opción" disabled></dsh-checkbox>`);
    await aTimeout(0);

    let fired = false;
    component.addEventListener('checkbox-change', () => { fired = true; });

    const input = component.shadowRoot?.querySelector('input[type="checkbox"]');
    if (input) input.click();

    await aTimeout(0);
    expect(fired).to.equal(false);
  });
});
