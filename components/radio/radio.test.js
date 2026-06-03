import './dist/dsh-radio.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout, oneEvent } from '@open-wc/testing';

describe('Test dsh-radio', () => {
  it('should render with default props', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-radio name="g" value="a"></dsh-radio>`);
    await aTimeout(0);

    expect(component.checked).to.equal(false);
    expect(component.disabled).to.equal(false);
    expect(component.error).to.equal(false);
    expect(component.dark).to.equal(false);
  });

  it('should render checked state', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-radio name="g" value="a" checked></dsh-radio>`);
    await aTimeout(0);

    expect(component.checked).to.equal(true);
  });

  it('should render disabled state', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-radio name="g" value="a" disabled></dsh-radio>`);
    await aTimeout(0);

    expect(component.disabled).to.equal(true);
  });

  it('should render error state', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-radio name="g" value="a" error></dsh-radio>`);
    await aTimeout(0);

    expect(component.error).to.equal(true);
  });

  it('should emit onClick event when clicked', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-radio name="g" value="test-value"></dsh-radio>`);
    await aTimeout(0);

    const eventPromise = oneEvent(component, 'onClick');
    const input = component.shadowRoot?.querySelector('input[type="radio"]');
    if (input) input.click();

    const event = await eventPromise;
    expect(event.type).to.equal('onClick');
    expect(event.bubbles).to.equal(true);
  });

  it('should not fire onClick when disabled', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-radio name="g" value="a" disabled></dsh-radio>`);
    await aTimeout(0);

    let fired = false;
    component.addEventListener('onClick', () => { fired = true; });

    const input = component.shadowRoot?.querySelector('input[type="radio"]');
    if (input) input.click();

    await aTimeout(0);
    expect(fired).to.equal(false);
  });

  it('should update value prop', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-radio name="g" value="my-value"></dsh-radio>`);
    await aTimeout(0);

    expect(component.value).to.equal('my-value');
  });
});
