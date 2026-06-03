import { c } from 'atomico';
import componentProps from './input-options.props';

function InputOptionComponent() {
  return <host shadowDom></host>;
}

InputOptionComponent.props = componentProps;

const InputOption = c(InputOptionComponent);

export default InputOption;
export { InputOption };
export const name = 'dsh-input-option';
