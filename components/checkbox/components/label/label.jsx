import { c, useState, useEffect } from 'atomico';
import componentProps from './label.props';
import { styles, lightStyles, darkStyles } from './label.styles';

const Label = (props) => {
  const { htmlFor, disabled, error, dark } = props;
  const defaultClass = 'dsh-checkbox-label';
  const [labelClass, setLabelClass] = useState(defaultClass);

  useEffect(() => {
    let current = `${defaultClass} `;
    if (dark) current += 'dark ';
    if (disabled) current += 'disabled ';
    if (error) current += 'error ';
    setLabelClass(current.trim());
  }, [disabled, error, dark]);

  return (
    <host shadowDom>
      <label htmlFor={htmlFor} className={labelClass}>
        <slot></slot>
      </label>
    </host>
  );
};

Label.props = componentProps;
Label.styles = [styles, lightStyles, darkStyles];

export default c(Label);
export const name = 'dsh-checkbox-label';
