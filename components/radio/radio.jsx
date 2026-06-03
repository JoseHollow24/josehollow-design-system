import { c, useEffect, useState, useProp, useRef, useEvent } from 'atomico';

import './components/group';
import componentProps from './radio.props';
import { styles, lightStyles, darkStyles } from './radio.styles';

const Component = (props) => {
  const { id, focus, value, disabled, name, dark, tabIndex } = props;

  const [error, setError] = useProp('error');
  const [checked, setChecked] = useProp('checked');
  const [customClass, setCustomClass] = useState('');

  const hostRef = useRef();
  const inputRef = useRef();

  const dispatchOnClick = useEvent('onClick', { bubbles: true, composed: true });
  const dispatchOnArrowUp = useEvent('onArrowUp', { bubbles: true, composed: true });
  const dispatchOnArrowDown = useEvent('onArrowDown', { bubbles: true, composed: true });
  const dispatchOnArrowLeft = useEvent('onArrowLeft', { bubbles: true, composed: true });
  const dispatchOnArrowRight = useEvent('onArrowRight', { bubbles: true, composed: true });

  const methods = {
    on: {
      click: () => {
        setError(false);
        setChecked((prev) => !prev);
        dispatchOnClick();
      },
      focus: () => { hostRef.current.classList.add('focus'); },
      blur: () => { hostRef.current.classList.remove('focus'); },
      keyDown: (event) => {
        const { key, code } = event;
        if (key === 'ArrowUp' && code === 'ArrowUp') dispatchOnArrowUp();
        if (key === 'ArrowDown' && code === 'ArrowDown') dispatchOnArrowDown();
        if (key === 'ArrowLeft' && code === 'ArrowLeft') dispatchOnArrowLeft();
        if (key === 'ArrowRight' && code === 'ArrowRight') dispatchOnArrowRight();
        if (key === 'Enter' && code === 'Enter') {
          setError(false);
          setChecked((prev) => !prev);
          dispatchOnClick();
        }
      },
    },
    calculate: {
      class: () => {
        let classes = error ? 'error' : '';
        classes += disabled ? ' disabled' : '';
        classes += checked ? ' checked' : '';
        classes += dark ? ' dark' : '';
        setCustomClass(classes.trim());
      },
    },
  };

  useEffect(() => { methods.calculate.class(); }, [error, disabled, checked, dark]);

  useEffect(() => {
    if (inputRef.current) {
      if (focus) inputRef.current.focus();
      else inputRef.current.blur();
    }
    return () => { if (inputRef.current) inputRef.current.blur(); };
  }, [inputRef, focus]);

  return (
    <host shadowDom ref={hostRef}>
      <label htmlFor={id} className={customClass}>
        <input
          type="radio"
          role="radio"
          id={id}
          ref={inputRef}
          tabindex={tabIndex}
          className={customClass}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onfocus={methods.on.focus}
          onblur={methods.on.blur}
          onclick={methods.on.click}
          onkeydown={methods.on.keyDown}
          aria-checked={checked}
        />
        <slot></slot>
      </label>
    </host>
  );
};

Component.props = componentProps;
Component.styles = [styles, lightStyles, darkStyles];

const Radio = c(Component);

export { Radio };

customElements.define('dsh-radio', Radio);
