import '../icon/index.js';
import { InputOption, name as optionName } from './components/input-option';

if (!customElements.get(optionName)) customElements.define(optionName, InputOption);

export * from './input.jsx';
export { InputOption } from './components/input-option';
