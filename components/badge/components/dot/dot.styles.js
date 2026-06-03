import { css, html } from 'atomico';
import {
  DshColorMonoBlack,
  DshColorComplementaryN3,
  DshColorComplementaryN5,
  DshColorPrimaryA3,
  DshTextFamilyRawsonPro,
  DshTextSizeXs,
  DshColorSecondaryG1,
  DshSpace50,
  DshTextWeight500,
  DshTextLineHeightBase,
} from '@tokens';

export const customVariables = (props) => {
  const { textWidth = '3px', textHeight } = props;
  return html`
    <style>
      :host {
        --dsh-badge-text-width: ${textWidth};
        --dsh-badge-text-height: ${textHeight};
      }
    </style>
  `;
};

export const defaultStyle = css`
  :host {
    border: 1px solid ${DshColorMonoBlack};
    box-sizing: border-box;
    border-radius: 50px;
    position: relative;
    display: inline-block;
    padding: 0;
    margin: 0;
  }
`;

export const dotStyle = css`
  :host {
    width: 8px;
    height: 8px;
    background: ${DshColorPrimaryA3};
    z-index: 1;
    position: relative;
  }
  :host(.size-s) { width: 8px; height: 8px; }
  :host(.size-m) { width: 12px; height: 12px; }
  :host(.size-l) { width: 16px; height: 16px; }
  :host(.left) { position: absolute; top: 0; left: var(--dsh-badge-text-width); }
  :host(.right) { position: absolute; top: 0; right: var(--dsh-badge-text-width); }
  :host(.vertical-left) { position: absolute; top: 0; left: var(--dsh-badge-text-width); }
  :host(.vertical-right) { position: absolute; top: 0; right: var(--dsh-badge-text-width); }
  :host(.disabled) { color: currentColor; background: currentColor; border: 1px solid currentColor; }
`;

export const bellStyle = css`
  :host(.bell) {
    width: 8px;
    height: 8px;
    background: ${DshColorPrimaryA3};
    margin: -10px -13px 0 0;
    z-index: 1;
  }
`;

export const textStyle = css`
  :host(.text) { width: auto; height: 15px; }
  span.text {
    font-size: ${DshTextSizeXs};
    font-family: ${DshTextFamilyRawsonPro};
    color: ${DshColorSecondaryG1};
    font-weight: ${DshTextWeight500};
    padding: 0 ${DshSpace50};
    line-height: calc(${DshTextLineHeightBase} - 2px);
    margin: 0;
    display: flex;
  }
  span.text.disabled { color: currentColor; }
`;

export const pulseStyle = css`
  :host(.pulse) {
    width: 8px;
    height: 8px;
    margin: 8px 10px;
    background-color: ${DshColorComplementaryN3};
    animation: dsh-badge-pulse 1s linear infinite;
  }
  @keyframes dsh-badge-pulse {
    0% { box-shadow: 0 0 0 0 ${DshColorComplementaryN5}, 0 0 0 0 ${DshColorComplementaryN5}; }
    50% { box-shadow: 0 0 0 0 transparent, 0 0 0 0 ${DshColorComplementaryN5}; }
    100% { box-shadow: 0 0 0 0 transparent, 0 0 0 6px transparent; }
  }
`;
