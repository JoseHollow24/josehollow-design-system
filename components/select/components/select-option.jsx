import { c } from 'atomico';
import componentProps from './select-option.props';

function SelectOptionComponent() {
  return <host shadowDom></host>;
}

SelectOptionComponent.props = componentProps;

export const SelectOption = c(SelectOptionComponent);
export const name = 'dsh-select-option';
