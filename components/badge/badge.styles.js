import { css } from 'atomico';
import { DshSpace0 } from '@tokens';

export const defaultStyles = css`
  :host {
    display: flex;
    position: relative;
    margin: ${DshSpace0};
    padding: ${DshSpace0};
    --fa-animation-duration: 2s;
  }
`;
