import { c, useEffect, useEvent, useProp, useRef, useState } from 'atomico';
import { useSlot } from "@atomico/hooks/use-slot";

import './components/label';
import componentProps from './checkbox.props';
import { customProperties, styles, lightStyles, darkStyles } from './checkbox.styles';

const Component = (props) => {
  const { id, name, focus, indeterminate, required, disabled, value, dark, tabIndex } = props;

  const hostRef = useRef();
  const inputRef = useRef();
  const slotRef = useRef();

  const defaultClass = 'dsh-checkbox-input';
  const [checked, setChecked] = useProp('checked');
  const [error, setError] = useProp('error');
  const [customClass, setCustomClass] = useState(defaultClass);
  const [hasSlotContent, setHasSlotContent] = useState(false);

  const dispatchChangeEvent = useEvent('checkbox-change', { bubbles: true, composed: true });
  const dispatchFocusEvent = useEvent('checkbox-focus', { bubbles: true, composed: true });
  const dispatchBlurEvent = useEvent('checkbox-blur', { bubbles: true, composed: true });

  const methods = {
    on: {
      click: (event) => {
        if (!disabled) {
          setError(false);
          const newValue = !checked;
          setChecked(newValue);
          dispatchChangeEvent({ checked: newValue, value, name, id, originalEvent: event });
        }
      },
      focus: (event) => {
        if (!disabled) dispatchFocusEvent({ id, name, originalEvent: event });
      },
      blur: (event) => {
        dispatchBlurEvent({ id, name, originalEvent: event });
      },
      keyDown: (event) => {
        const { key, code } = event;
        if (key === 'Enter' && code === 'Enter' && !disabled) {
          if (inputRef.current) inputRef.current.indeterminate = false;
          setError(false);
          const newValue = !checked;
          setChecked(newValue);
          dispatchChangeEvent({ checked: newValue, value, name, id, originalEvent: event });
        }
      },
    },
    calculate: {
      class: () => {
        let current = `${defaultClass} `;
        if (dark) current += 'dark ';
        if (checked) current += 'checked ';
        if (required) current += 'required ';
        if (disabled) current += 'disabled ';
        if (error) current += 'error ';
        if (indeterminate) current += 'indeterminate ';
        setCustomClass(current.trim());
      },
    },
    observeSlotChanges: () => {
      const slotElement = slotRef.current;
      if (!slotElement) return;
      const checkSlotContent = () => {
        const assignedNodes = slotElement.assignedNodes().filter(
          (node) => node.nodeType !== Node.TEXT_NODE || node.textContent.trim() !== ''
        );
        setHasSlotContent(assignedNodes.length > 0);
      };
      checkSlotContent();
      slotElement.addEventListener('slotchange', checkSlotContent);
      return () => slotElement.removeEventListener('slotchange', checkSlotContent);
    },
  };

  useEffect(() => { methods.calculate.class(); }, [checked, required, disabled, value, error, dark, indeterminate]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
    return () => { if (inputRef.current) inputRef.current.indeterminate = false; };
  }, [indeterminate]);

  useEffect(() => {
    if (inputRef.current) {
      if (focus && !disabled) inputRef.current.focus();
      else inputRef.current.blur();
    }
    return () => { if (inputRef.current) inputRef.current.blur(); };
  }, [focus, disabled, inputRef]);

  useEffect(() => methods.observeSlotChanges(), []);

  return (
    <host ref={hostRef} shadowDom>
      {customProperties(hasSlotContent)}
      <dsh-checkbox-label htmlFor={id} error={error} disabled={disabled} dark={dark}>
        <input
          type="checkbox"
          role="checkbox"
          id={id}
          ref={inputRef}
          tabIndex={tabIndex}
          aria-checked={checked}
          className={customClass}
          name={name}
          checked={checked}
          required={required}
          disabled={disabled}
          value={value}
          onblur={methods.on.blur}
          onfocus={methods.on.focus}
          onclick={methods.on.click}
          onkeydown={methods.on.keyDown}
        />
        <slot ref={slotRef}></slot>
      </dsh-checkbox-label>
    </host>
  );
};

Component.props = componentProps;
Component.styles = [styles, lightStyles, darkStyles];

const Checkbox = c(Component);

export { Checkbox };

customElements.define('dsh-checkbox', Checkbox);
