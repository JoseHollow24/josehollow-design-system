import '../icon/index.js';
import { SelectOption, name as optionName } from './components/select-option';

if (!customElements.get(optionName)) customElements.define(optionName, SelectOption);

export * from './select.jsx';
export { SelectOption } from './components/select-option';
