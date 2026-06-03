import { c, useEffect, useRef, useState } from 'atomico';
import componentProps from './dot.props';
import {
  customVariables, defaultStyle, dotStyle, textStyle, bellStyle, pulseStyle,
} from './dot.styles';

const Component = (props) => {
  const { position, size, pulse, count, companion, disabled } = props;

  const textRef = useRef();
  const [text, setText] = useState(undefined);
  const [hostClass, setHostClass] = useState('');
  const [variables, setVariables] = useState({ textWidth: '3px', textHeight: '0px' });

  const methods = {
    calculate: {
      hostClass: () => {
        let current = '';
        current += companion ? ` companion` : '';
        current += size ? ` size-${size}` : '';
        current += position ? ` ${position}` : '';
        current += count ? ` text` : '';
        current += pulse ? ' pulse' : '';
        current += disabled ? ' disabled' : '';
        setHostClass(current.trim());
      },
      count: () => {
        if (count) {
          setText(count > 999 ? '999+' : count.toString());
        }
      },
      textSizes: () => {
        const textWidth = textRef.current.clientWidth;
        const calculatedWidth = () => {
          if (text) return `calc(0.5rem - ${textWidth}px)`;
          if (['s'].includes(size)) return '2px';
          if (['m'].includes(size)) return '-2px';
          if (['l'].includes(size)) {
            if (['left', 'right'].includes(position)) return '-5px';
            if (['vertical-left', 'vertical-right'].includes(position)) return '12px';
          }
          return '3px';
        };
        setVariables({ textWidth: calculatedWidth(), textHeight: '3px' });
      },
    },
  };

  useEffect(() => { methods.calculate.count(); }, [count]);
  useEffect(() => {
    if (textRef.current && position && (size || text)) methods.calculate.textSizes();
  }, [textRef, text, position, size]);
  useEffect(() => { methods.calculate.hostClass(); }, [companion, count, position, size, pulse, disabled]);

  return (
    <host className={hostClass} shadowDom>
      {customVariables(variables)}
      {text && <span ref={textRef} className={`text ${disabled ? 'disabled' : ''}`.trim()}>{text}</span>}
      {!text && <span ref={textRef}>&nbsp;</span>}
    </host>
  );
};

Component.props = componentProps;
Component.styles = [defaultStyle, dotStyle, textStyle, bellStyle, pulseStyle];

export default c(Component);
export const name = 'dsh-badge-dot';
