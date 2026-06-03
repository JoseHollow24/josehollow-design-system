import { c } from 'atomico';

const Component = () => {
  return (
    <host>
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        xmlns="http://www.w3.org/2000/svg"
        style="margin: auto; background: transparent; display: block; shape-rendering: auto;"
      >
        <g>
          <path
            fill="none"
            style="stroke: currentColor; stroke-width: 12px;"
            d="M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843">
          </path>
          <path
            d="M49 3L49 27L61 15L49 3"
            style="fill: currentColor;">
          </path>
          <animateTransform
            dur="1s"
            type="rotate"
            repeatCount="indefinite"
            attributeName="transform"
            values="0 50 50;360 50 50" keyTimes="0;1">
          </animateTransform>
        </g>
      </svg>
    </host>
  );
};

export default c(Component);
export const Name = 'dsh-button-loading';
