import { TextArea } from './textarea.jsx';

if (!customElements.get('dsh-textarea')) customElements.define('dsh-textarea', TextArea);

export * from './textarea.jsx';
