import { css } from 'atomico';
import {
  DshSpace0,
  DshSpace100,
  DshColorMonoWhite,
  DshTextFamilyRawsonPro,
  DshStrokeWeightS,
  DshColorPrimaryC0,
  DshColorPrimaryC1,
  DshColorPrimaryC2,
  DshColorPrimaryC4,
  DshColorPrimaryC6,
  DshColorSecondaryG1,
  DshColorComplementaryR1,
  DshColorComplementaryR5,
  DshColorComplementaryR6,
  DshColorSecondaryX6,
  DshColorSecondaryX3,
  DshColorSecondaryX4,
} from '@tokens';

export const styles = css`
  :host {
    display: flex;
    gap: ${DshSpace100};
    align-content: center;
    flex-wrap: wrap;
    outline: none;
    height: calc(60px - (18px * 2));
    padding: 18px;
    width: max-content;
  }
  :host(:focus) {
    padding: 18px;
    border-radius: 8px;
  }
  input[type="radio"] {
    width: 24px;
    height: 24px;
    outline: none;
    appearance: none;
    border-radius: 100%;
    background-color: ${DshColorMonoWhite};
    position: relative;
    padding: ${DshSpace0};
    margin: ${DshSpace0};
    transition: border-color 150ms ease, background-color 150ms ease;
  }
  input[type="radio"]:checked::before {
    display: block;
    position: relative;
    border-radius: 100%;
    content: '';
    width: 16px;
    height: 16px;
    top: 3px;
    left: 3px;
  }
  label {
    display: flex;
    align-content: center;
    gap: ${DshSpace100};
    flex-wrap: wrap;
    font-family: ${DshTextFamilyRawsonPro};
  }
`;

export const lightStyles = css`
  :host(.focus) { outline: 3px solid ${DshColorPrimaryC2}; outline-offset: 3px; }
  input[type="radio"] { border: ${DshStrokeWeightS} solid ${DshColorPrimaryC1}; }
  input[type="radio"]:hover { border: ${DshStrokeWeightS} solid ${DshColorPrimaryC0}; }
  input[type="radio"]:checked::before { background: ${DshColorPrimaryC2}; }
  input[type="radio"].error { background: ${DshColorComplementaryR6}; border: ${DshStrokeWeightS} solid ${DshColorComplementaryR1}; }
  input[type="radio"]:disabled { background: ${DshColorSecondaryX6}; border: ${DshStrokeWeightS} solid ${DshColorSecondaryX4}; }
  label { color: ${DshColorSecondaryG1}; }
  label.disabled { color: ${DshColorSecondaryX4}; }
`;

export const darkStyles = css`
  :host(.focus) { outline: 3px solid ${DshColorPrimaryC2}; outline-offset: 3px; }
  input[type="radio"].dark { border: ${DshStrokeWeightS} solid ${DshColorPrimaryC6}; }
  input[type="radio"].dark:hover { border: ${DshStrokeWeightS} solid ${DshColorPrimaryC4}; }
  input[type="radio"].dark:checked::before { background: ${DshColorPrimaryC2}; }
  input[type="radio"].dark.error { background: ${DshColorComplementaryR6}; border: ${DshStrokeWeightS} solid ${DshColorComplementaryR5}; }
  input[type="radio"].dark:disabled { background: ${DshColorSecondaryX6}; border: ${DshStrokeWeightS} solid ${DshColorSecondaryX4}; }
  label.dark { color: ${DshColorMonoWhite}; }
  label.dark.disabled { color: ${DshColorSecondaryX3}; }
`;
