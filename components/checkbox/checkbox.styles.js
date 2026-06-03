import { html, css } from 'atomico';
import {
  DshTextFamilyRawsonPro,
  DshStrokeWeightM,
  DshBorderRadius100,
  DshSpace0,
  DshSpace150,
  DshColorPrimaryC3,
  DshBorderRadius50,
  DshSpace200,
  DshColorMonoWhite,
  DshColorPrimaryC0,
  DshColorPrimaryC1,
  DshColorPrimaryC2,
  DshColorPrimaryC4,
  DshColorPrimaryC6,
  DshColorSecondaryX6,
  DshColorSecondaryX4,
  DshColorComplementaryR1,
  DshColorComplementaryR5,
  DshColorComplementaryR6,
  DshColorSecondaryX2,
  DshColorSecondaryX3,
  DshColorSecondaryG3,
  DshColorSecondaryG6,
} from '@tokens';

export const customProperties = (hasSlotContent) => html`
  <style>
    :host {
      --padding: ${hasSlotContent ? `12px ${DshSpace0}` : DshSpace150};
    }
  </style>
`;

export const styles = css`
  :host {
    font-family: ${DshTextFamilyRawsonPro}, sans-serif;
    padding: var(--padding, ${DshSpace150});
    border-radius: ${DshBorderRadius100};
  }
  :host(:focus) {
    outline: 2px solid ${DshColorPrimaryC3};
    outline-offset: ${DshStrokeWeightM};
  }
  input[type='checkbox'] {
    height: 24px;
    width: 24px;
    min-width: 24px;
    min-height: 24px;
    margin: ${DshSpace0};
    padding: ${DshSpace0};
    cursor: pointer;
    vertical-align: middle;
    -webkit-appearance: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline: 0;
    flex-grow: 0;
    transition: background 200ms;
    border-radius: ${DshBorderRadius50};
    box-sizing: border-box;
    position: relative;
  }
  input[type='checkbox']::after {
    content: '';
    display: none;
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%) rotate(45deg);
    border: 2px solid ${DshColorMonoWhite};
    border-top: none;
    border-left: none;
    width: 6px;
    height: 10px;
  }
  input[type='checkbox']:checked::after { display: block; }
  input[type='checkbox'].indeterminate::after {
    transform: translate(-50%, -50%) rotate(0deg);
    width: 12px;
    height: 0;
    border-right: none;
    border-bottom: none;
    border-top: 2px solid ${DshColorMonoWhite};
    top: 50%;
  }
`;

export const lightStyles = css`
  input[type='checkbox'] {
    background: ${DshColorMonoWhite};
    border: ${DshStrokeWeightM} solid ${DshColorPrimaryC1};
  }
  input[type='checkbox']:hover {
    border: ${DshStrokeWeightM} solid ${DshColorPrimaryC0};
  }
  input[type='checkbox']:checked {
    background-color: ${DshColorPrimaryC3};
    border-color: ${DshColorPrimaryC3};
  }
  input[type='checkbox']:indeterminate {
    background-color: ${DshColorPrimaryC3};
    border-color: ${DshColorPrimaryC3};
  }
  input[type='checkbox']:disabled {
    cursor: not-allowed;
    background: ${DshColorSecondaryX6};
    border: ${DshStrokeWeightM} solid ${DshColorSecondaryX4};
  }
  input[type='checkbox']:disabled:hover {
    cursor: not-allowed;
    background: ${DshColorSecondaryX6};
    border: ${DshStrokeWeightM} solid ${DshColorSecondaryX4};
  }
  input[type='checkbox']:disabled:checked {
    cursor: not-allowed;
    background: ${DshColorSecondaryX6};
    border: ${DshStrokeWeightM} solid ${DshColorSecondaryX4};
  }
  input[type='checkbox']:disabled:checked::after {
    border-color: ${DshColorSecondaryG3};
  }
  input[type='checkbox'].error {
    background: ${DshColorComplementaryR6};
    border: ${DshStrokeWeightM} solid ${DshColorComplementaryR1};
  }
  input[type='checkbox'].error:hover {
    background: ${DshColorComplementaryR6};
    border: ${DshStrokeWeightM} solid ${DshColorComplementaryR1};
  }
  input[type='checkbox'].error:checked {
    background: ${DshColorComplementaryR6};
    border: ${DshStrokeWeightM} solid ${DshColorComplementaryR1};
  }
`;

export const darkStyles = css`
  input[type='checkbox'].dark {
    background: ${DshColorMonoWhite};
    border: ${DshStrokeWeightM} solid ${DshColorPrimaryC6};
  }
  input[type='checkbox'].dark:hover {
    border: ${DshStrokeWeightM} solid ${DshColorPrimaryC4};
  }
  input[type='checkbox'].dark:checked {
    background-color: ${DshColorPrimaryC2};
    border: ${DshStrokeWeightM} solid ${DshColorPrimaryC6};
  }
  input[type='checkbox'].dark:disabled {
    cursor: not-allowed;
    background: ${DshColorSecondaryX3};
    border: ${DshStrokeWeightM} solid ${DshColorSecondaryX2};
  }
  input[type='checkbox'].dark:disabled:checked {
    cursor: not-allowed;
    background: ${DshColorSecondaryX3};
    border: ${DshStrokeWeightM} solid ${DshColorSecondaryX2};
  }
  input[type='checkbox'].dark:disabled:checked::after {
    border-color: ${DshColorSecondaryG6};
  }
  input[type='checkbox'].dark.error {
    background: ${DshColorComplementaryR6};
    border: ${DshStrokeWeightM} solid ${DshColorComplementaryR5};
  }
  input[type='checkbox'].dark.error:checked {
    background: ${DshColorComplementaryR6};
    border: ${DshStrokeWeightM} solid ${DshColorComplementaryR5};
  }
`;
