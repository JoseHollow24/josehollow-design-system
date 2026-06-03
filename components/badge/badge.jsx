import { c, useEffect, useProp } from 'atomico';

import './components/dot';
import { defaultStyles } from './badge.styles';
import componentProps from './badge.props';

const Component = (props) => {
  const { size, pulse, count, bell, shake, disabled } = props;
  const [position, setPosition] = useProp('position');

  useEffect(() => {
    if (bell && !position) setPosition('left');
    if (!bell && position) setPosition(undefined);
  }, [bell, position]);

  return (
    <host shadowDom>
      {(['left', 'vertical-left'].includes(position) || !position) && (
        <dsh-badge-dot position={position} size={size} pulse={pulse} count={count} disabled={disabled}></dsh-badge-dot>
      )}
      {bell && (
        <dsh-icon
          color="current"
          icon-name="fa-bell"
          fa-styles="fas"
          className={shake && !disabled ? 'fa-shake' : ''}
          size="s2"
        ></dsh-icon>
      )}
      {['right', 'vertical-right'].includes(position) && (
        <dsh-badge-dot position={position} size={size} pulse={pulse} count={count} disabled={disabled}></dsh-badge-dot>
      )}
    </host>
  );
};

Component.props = componentProps;
Component.styles = [defaultStyles];

const Badge = c(Component);

export { Badge };

customElements.define('dsh-badge', Badge);
