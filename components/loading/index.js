import { Loading } from './loading.jsx';

if (!customElements.get('dsh-loading')) customElements.define('dsh-loading', Loading);

export * from './loading.jsx';
