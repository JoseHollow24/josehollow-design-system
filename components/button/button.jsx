import { c, useRef, useEffect, useState, useEvent, Fragment } from 'atomico';
import { useSlot } from "@atomico/hooks/use-slot";

import './assets/loading';
import componentProps from './button.props';
import { baseStyles, primaryLight, secondaryLight, tertiaryLight } from './button.styles';

const Component = (props) => {
  const {
    label, variant, color, type, disabled, href, target,
    vertical, full, fluid, loading, width, id, name: btnName, parentComponent,
  } = props;

  const [classes, setClasses] = useState('');
  const [hostClasses, setHostClasses] = useState('');
  const [truncatedText, setTruncatedText] = useState('');

  const refSlotStart = useRef();
  const refSlotMain = useRef();
  const refSlotEnd = useRef();
  const refAnchor = useRef();
  const refButton = useRef();
  const lastInteractionRef = useRef(null);

  const slotStart = useSlot(refSlotStart);
  const slotMain = useSlot(refSlotMain);
  const slotEnd = useSlot(refSlotEnd);

  const dispatchOnClick = useEvent('onClick', {
    bubbles: true,
    composed: true,
  });

  const trackInteraction = (eventType) => {
    if (!href) return;
    const hostElement = refButton.current?.getRootNode()?.host;
    const parentEl = hostElement?.closest?.('[data-gtm-parent]');
    const resolvedParent = parentComponent || parentEl?.getAttribute('data-gtm-parent') || null;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      component: 'dsh-button',
      event: eventType,
      parentComponent: resolvedParent,
      destination: href,
      origin: window.location.pathname,
      id,
      timestamp: new Date().toISOString(),
    });
  };

  const methods = {
    on: {
      click: (event) => {
        dispatchOnClick(event);
        if (href && lastInteractionRef.current !== 'keyboard') trackInteraction('mouse');
        lastInteractionRef.current = null;
        if (href && target) refAnchor?.current?.click(event);
      },
      keydown: (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          lastInteractionRef.current = 'keyboard';
          if (href) {
            trackInteraction('keyboard');
            refButton.current?.click();
          }
        }
      },
    },
    calculate: {
      hostClasses: () => {
        let current = '';
        current += fluid ? ` fluid` : '';
        current += full ? ` full` : '';
        setHostClasses(current.trim());
      },
      classes: () => {
        let current = '';
        current += variant ?? '';
        current += color ? ` ${color}` : '';
        current += fluid ? ` fluid` : '';
        current += full ? ` full` : '';
        current += vertical ? ` vertical` : '';
        setClasses(current.trim());
      },
    },
  };

  useEffect(() => {
    if (slotMain.length > 0) {
      const textNode = slotMain.find(
        (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0
      );
      if (textNode) {
        const text = textNode.textContent.trim();
        setTruncatedText(text.length > 24 ? text.slice(0, 24) + '...' : '');
      } else {
        setTruncatedText('');
      }
    }
  }, [slotMain]);

  useEffect(() => {
    methods.calculate.classes();
    methods.calculate.hostClasses();
  }, [variant, color, full, disabled, vertical, fluid]);

  return (
    <host shadowDom className={hostClasses}>
      <a ref={refAnchor} href={href} target={target} className="hidden" aria-hidden="true"></a>
      <button
        ref={refButton}
        className={classes}
        onclick={methods.on.click}
        onkeydown={methods.on.keydown}
        disabled={disabled}
        style={{ width }}
        part="dsh-button__button"
        data-gtm-component="dsh-button"
        data-gtm-destination={href}
        type={type}
        name={btnName}
        id={id}
      >
        {!loading ? (
          <Fragment>
            <slot name="left" ref={refSlotStart}></slot>
            {truncatedText || <slot ref={refSlotMain}>{label}</slot>}
            <slot name="right" ref={refSlotEnd}></slot>
          </Fragment>
        ) : (
          <dsh-button-loading variant={variant} color={color} disabled={disabled}></dsh-button-loading>
        )}
      </button>
    </host>
  );
};

Component.props = {
  ...componentProps,
  parentComponent: { type: String, value: null },
};

Component.styles = [baseStyles, primaryLight, secondaryLight, tertiaryLight];

if (!customElements.get('dsh-button')) customElements.define('dsh-button', c(Component));
export { Component as Button };
