import './dist/dsh-tag.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout } from '@open-wc/testing';

describe('Test dsh-tag', () => {
  it('should render with default props', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-tag></dsh-tag>`);
    await aTimeout(0);

    expect(component.variant).to.equal('informative');
    expect(component.subvariant).to.equal('success');
  });

  it('should update variant prop', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-tag variant="general"></dsh-tag>`);
    await aTimeout(0);

    expect(component.variant).to.equal('general');
  });

  it('should update subvariant prop', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-tag subvariant="error"></dsh-tag>`);
    await aTimeout(0);

    expect(component.subvariant).to.equal('error');
  });

  it('should update label prop', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-tag label="Mi etiqueta"></dsh-tag>`);
    await aTimeout(0);

    expect(component.label).to.equal('Mi etiqueta');
  });

  it('should toggle showIcon prop', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-tag show-icon></dsh-tag>`);
    await aTimeout(0);

    expect(component.showIcon).to.equal(true);
  });

  it('should render interactive variant', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-tag variant="interactive" label="Filtro"></dsh-tag>`);
    await aTimeout(0);

    expect(component.variant).to.equal('interactive');
    expect(component.label).to.equal('Filtro');
  });
});
