import '../icon/index.js';
import { Tag } from './tag.jsx';

if (!customElements.get('dsh-tag')) customElements.define('dsh-tag', Tag);

export * from './tag.jsx';
