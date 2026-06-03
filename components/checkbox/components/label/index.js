import Label, { name } from './label';

if (!customElements.get(name)) customElements.define(name, Label);
