import { RadioGroup, radioGroupName } from './components/group';

if (!customElements.get(radioGroupName)) customElements.define(radioGroupName, RadioGroup);

export * from './radio.jsx';
export { RadioGroup } from './components/group';
