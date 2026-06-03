import '../icon/index.js';
import { Badge } from './badge.jsx';

if (!customElements.get('dsh-badge')) customElements.define('dsh-badge', Badge);

export * from './badge.jsx';
