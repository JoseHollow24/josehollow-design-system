import { css } from 'atomico';
import {
  DshSpace50,
  DshSpace100,
  DshTextSizeLg,
  DshTextLineHeightXl,
  DshTextWeight400,
  DshColorSecondaryG1,
  DshColorSecondaryX4,
  DshColorMonoWhite,
} from '@tokens';

export const styles = css`
  :host {
    display: inline-block;
  }
  label {
    gap: ${DshSpace100};
    display: flex;
    flex-direction: row;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: ${DshTextSizeLg};
    line-height: ${DshTextLineHeightXl};
    font-weight: ${DshTextWeight400};
  }
  label.disabled { cursor: not-allowed; }
  label:focus-within {
    border-radius: ${DshSpace50};
    outline: 0;
  }
`;

export const lightStyles = css`
  label { color: ${DshColorSecondaryG1}; }
  label.disabled { color: ${DshColorSecondaryX4}; }
`;

export const darkStyles = css`
  label.dark { color: ${DshColorMonoWhite}; }
  label.dark.disabled { color: ${DshColorSecondaryX4}; }
`;
