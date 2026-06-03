import './dist/dsh-select.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout, oneEvent } from '@open-wc/testing';

describe('Test dsh-select', () => {
  it('should render with default props', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-select label="Selecciona">
        <dsh-select-option value="a">Opción A</dsh-select-option>
        <dsh-select-option value="b">Opción B</dsh-select-option>
      </dsh-select>
    `);
    await aTimeout(0);

    expect(component.type).to.equal('select');
    expect(component.disabled).to.equal(false);
    expect(component.error).to.equal(false);
    expect(component.active).to.equal(false);
    expect(component.modal).to.equal(false);
  });

  it('should render checkbox type', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-select type="checkbox" label="Opciones">
        <dsh-select-option value="a">A</dsh-select-option>
      </dsh-select>
    `);
    await aTimeout(0);

    expect(component.type).to.equal('checkbox');
  });

  it('should render disabled state', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-select label="Selecciona" disabled>
        <dsh-select-option value="a">A</dsh-select-option>
      </dsh-select>
    `);
    await aTimeout(0);

    expect(component.disabled).to.equal(true);
  });

  it('should render error state', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-select label="Selecciona" error>
        <dsh-select-option value="a">A</dsh-select-option>
      </dsh-select>
    `);
    await aTimeout(0);

    expect(component.error).to.equal(true);
  });

  it('should update label prop', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-select label="Mi etiqueta">
        <dsh-select-option value="a">A</dsh-select-option>
      </dsh-select>
    `);
    await aTimeout(0);

    expect(component.label).to.equal('Mi etiqueta');
  });

  it('should update placeholder prop', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-select label="Selecciona" placeholder="Elige una opción...">
        <dsh-select-option value="a">A</dsh-select-option>
      </dsh-select>
    `);
    await aTimeout(0);

    expect(component.placeholder).to.equal('Elige una opción...');
  });

  it('should render dsh-select-option children', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-select label="País">
        <dsh-select-option value="cl">Chile</dsh-select-option>
        <dsh-select-option value="ar">Argentina</dsh-select-option>
        <dsh-select-option value="pe" selected>Perú</dsh-select-option>
      </dsh-select>
    `);
    await aTimeout(0);

    const options = component.querySelectorAll('dsh-select-option');
    expect(options.length).to.equal(3);
  });
});
