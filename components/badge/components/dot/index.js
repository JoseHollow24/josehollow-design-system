import dot, { name } from './dot';

if (!customElements.get(name)) customElements.define(name, dot);
