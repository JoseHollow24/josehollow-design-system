import { css } from 'atomico';

// Tokens
import {
  DshTextFamilyRawsonPro,
  DshTextSizeLg,
  DshTextWeight500,
  DshSpace50,
  DshSpace100,
  DshSpace150,
  DshSpace200,
  DshSpace300,
  DshTextLineHeightXl,
  DshBorderRadius50,
  DshColorMonochromaticW1,
  DshStrokeWeightM,
  DshColorPrimaryC0,
  DshColorPrimaryC1,
  DshColorPrimaryC2,
  DshColorPrimaryC3,
  DshColorSecondaryG3,
  DshColorSecondaryG5,
  DshSpace0,
} from '../../generated-tokens/tokens.js'

const DshColorTransparent = 'transparent';

export const baseStyles = css`
  :host {
    box-sizing: border-box;
    display: inline-block;
    position: relative;
  }
  :host(.full) {
    width: 100%;
  }
  button {
    margin: ${DshSpace0};
    gap: ${DshSpace100};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${DshTextSizeLg};
    font-weight: ${DshTextWeight500};
    font-family: ${DshTextFamilyRawsonPro};
    line-height: ${DshTextLineHeightXl};
    padding: ${DshSpace150} ${DshSpace300};
    border-radius: ${DshBorderRadius50};
    border: none;
    outline: none;
    height: 48px;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
    white-space: nowrap;
  }
  button:hover {
    cursor: pointer;
  }
  button:hover:disabled {
    cursor: not-allowed;
  }
  button:disabled {
    background: none;
  }
  button:focus-visible {
    outline: none;
  }
  button.vertical {
    flex-direction: column;
    gap: ${DshSpace50};
    height: 76px;
  }
  .hidden {
    display: none;
  }
  .full {
    width: 100% !important;
  }
  @media only screen and (width <= 479px) {
    :host(.fluid) {
      width: 100%;
    }
    .fluid {
      width: 100% !important;
    }
  }
`;

export const primaryLight = css`
  button.primary.blue {
    color: ${DshColorMonochromaticW1};
    background-color: ${DshColorPrimaryC1};
  }
  button.primary.blue:hover {
    background-color: ${DshColorPrimaryC0};
  }
  button.primary.blue:active {
    color: ${DshColorSecondaryG5};
    background-color: ${DshColorPrimaryC0};
    border: 3px solid ${DshColorPrimaryC3};
    padding: calc(${DshSpace150} - 3px) calc(${DshSpace300} - 3px);
  }
  button.primary.blue:focus {
    color: ${DshColorMonochromaticW1};
    background-color: ${DshColorPrimaryC1};
    outline: ${DshStrokeWeightM} solid ${DshColorPrimaryC2};
    outline-offset: ${DshStrokeWeightM};
  }
  button.primary.blue:active:focus {
    color: ${DshColorSecondaryG5};
    background-color: ${DshColorPrimaryC0};
    border: 3px solid ${DshColorPrimaryC3};
    padding: calc(${DshSpace150} - 3px) calc(${DshSpace300} - 3px);
    outline: none;
    outline-offset: 0;
  }
  button.primary.blue.vertical:focus {
    border: 3px solid ${DshColorPrimaryC3};
    padding: calc(${DshSpace150} - 3px) calc(${DshSpace200} - 3px);
  }
  button.primary.blue.vertical {
    padding: ${DshSpace150} ${DshSpace200};
  }
  button.primary:disabled {
    color: ${DshColorMonochromaticW1} !important;
    background-color: ${DshColorSecondaryG3} !important;
    outline: none !important;
    outline-offset: 0 !important;
    border: none !important;
    padding: 12px 24px !important;
  }
`;