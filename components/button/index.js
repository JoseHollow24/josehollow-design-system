import { Button } from './button.jsx';

if (!customElements.get('dsh-button')) customElements.define('dsh-button', Button);

export * from './button.jsx';
