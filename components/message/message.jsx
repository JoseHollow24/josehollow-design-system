import { c, useRef, useState, useEffect } from 'atomico';
import { useSlot } from '@atomico/hooks/use-slot';
import '@components/icon';
import Props from './message.props';
import { customProperties, styles } from './message.styles';

//Static  icons
const ICONS = {
  info: (
    <dsh-icon icon-name="fa-utility-fill fa-semibold fa-circle-info" size="s3" color="c1"></dsh-icon>
  ),
  success: (
    <dsh-icon icon-name="fa-sharp fa-solid fa-circle-check" size="s3" color="v1"></dsh-icon>
  ),
  error: (
    <dsh-icon icon-name="fa-jelly-fill fa-regular fa-circle-xmark" size="s3" color="r1"></dsh-icon>
  ),
  warning: (
    <dsh-icon icon-name="fa-solid fa-triangle-exclamation" size="s3" color="a1"></dsh-icon>
  ),
};

function MessageComponent({ variant, closeButton, timeout, showComponent, ariaLabel, id, darkMode }) {
  const nodeRef = useRef();
  const iconSlotRef = useRef();
  const iconSlot = useSlot(iconSlotRef);

  const [display, setDisplay] = useState(showComponent);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    setHiding(!showComponent);
    setTimeout(() => setDisplay(showComponent), 500);
  }, [showComponent]);

  useEffect(() => {
    if (timeout > 0) {
      setTimeout(() => closeMsg(), timeout);
    }
  }, [timeout]);

  const closeMsg = () => {
    setHiding(true);
    setTimeout(() => {
      nodeRef.current?.dispatchEvent(
        new CustomEvent('hide-message', { detail: false, bubbles: true, composed: true }),
      );
      setDisplay(false);
    }, 500);
  };

  const isImportant = variant === 'important';
  const isActionType = ['informative', 'success', 'error', 'warning'].includes(variant);
  const icon = ICONS[variant] || ICONS.info;
  const hasIcon = iconSlot.length > 0;

  if (isImportant) {
    return (
      <host shadowDom style={{ display: display ? 'inline-flex' : 'none' }}>
        {customProperties(variant, false)}
        <div className={`content ${hasIcon ? 'has-icon' : ''}`}>
          <slot name="icon" ref={iconSlotRef}></slot>
          <div className="content-inner">
            <div className="slot-title"><slot name="title"></slot></div>
            <div className="slot-content"><slot name="content"></slot></div>
            <div className="slot-footer"><slot name="footer"></slot></div>
          </div>
        </div>
      </host>
    );
  }
  
  return (
    <host
      shadowDom
      ref={nodeRef}
      id={id}
      aria-label={ariaLabel}
      className={hiding ? 'hide-content' : ''}
      style={{ display: display ? 'inline-flex' : 'none' }}
    >
      {customProperties(variant, closeButton, darkMode)}
      <div className="content">
        {closeButton && (
          <button
            className="icon-close"
            onclick={() => closeMsg()}
            tabindex="1"
          >
            <dsh-icon
              icon-name="fa-times"
              size="s2"
              color={darkMode && variant === '' ? 'white' : 'black'}
            ></dsh-icon>
          </button>
        )}
        <div className="content-body">
          <div className="content-body__icon">{icon}</div>
          <div className="content-body__text">
            <div className="slot-title"><slot name="title"></slot></div>
            <div className="slot-content"><slot name="content"></slot></div>
            <div className="slot-footer"><slot name="footer"></slot></div>
          </div>
        </div>
      </div>
    </host>
  );
}

MessageComponent.props = Props;
MessageComponent.styles = [styles];

export const Message = c(MessageComponent);

if (!customElements.get('dsh-message'))
  customElements.define('dsh-message', Message);
