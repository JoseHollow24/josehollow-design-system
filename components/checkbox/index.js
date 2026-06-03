import { Checkbox } from './checkbox.jsx';

if (!customElements.get('dsh-checkbox')) customElements.define('dsh-checkbox', Checkbox);

export * from './checkbox.jsx';
