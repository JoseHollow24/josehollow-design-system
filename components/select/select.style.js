import { html, css } from 'atomico';
import {
  DshBorderRadius100,
  DshColorSecondaryG1,
  DshColorSecondaryG2,
  DshColorSecondaryG3,
  DshColorSecondaryG6,
  DshColorComplementaryR2,
  DshColorSecondaryX4,
  DshColorSecondaryX6,
  DshColorMonoBlack,
  DshColorMonoWhite,
  DshColorPrimaryC0,
  DshColorPrimaryC1,
  DshColorPrimaryC2,
  DshColorSecondaryX3,
  DshShadowS,
  DshSpace0,
  DshSpace100,
  DshSpace150,
  DshSpace200,
  DshSpace50,
  DshSpace700,
  DshTextFamilyRawsonPro,
  DshTextLineHeightLg,
  DshTextLineHeightXl,
  DshTextSizeBase,
  DshTextSizeLg,
  DshTextWeight400,
  DshTextWeight500,
  DshTextWeight650,
} from '@tokens';

export const customProperties = () => html`
  <style>
    :host {
      --background: ${DshColorMonoWhite};
      --background-hover: ${DshColorSecondaryG6};
      --background-disabled: ${DshColorSecondaryX6};
      --color-text: ${DshColorSecondaryG1};
      --color-label: ${DshColorMonoBlack};
      --color-helper: ${DshColorSecondaryG2};
      --color-error: ${DshColorComplementaryR2};
      --color-icon-hover: ${DshColorMonoBlack};
      --color-disabled: ${DshColorSecondaryG3};
      --color-modal-top: ${DshColorPrimaryC1};
      --color-modal-bottom: ${DshColorSecondaryG1};
      --border-color: ${DshColorPrimaryC1};
      --border-color-disabled: ${DshColorSecondaryX4};
      --border-color-hover: ${DshColorPrimaryC0};
      --shadow: ${DshShadowS};
      --font-family: ${DshTextFamilyRawsonPro};
      --margin: ${DshSpace0};
    }
  </style>
`;

export const styles = [
  css`
    :host {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      margin: var(--margin);
    }
    .mock { display: none; }
    div.main-container { width: 100%; min-width: 96px; }
    p {
      margin: ${DshSpace0};
      width: 100%;
      font-family: var(--font-family);
    }
    .truncate {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .disabled p.label { color: ${DshColorSecondaryX3}; }
    p.label {
      margin-bottom: ${DshSpace100};
      font-size: ${DshTextSizeBase};
      line-height: ${DshTextLineHeightLg};
      font-weight: ${DshTextWeight500};
      color: var(--color-label);
    }
    p.helper {
      margin-top: ${DshSpace50};
      font-size: ${DshTextSizeBase};
      line-height: ${DshTextLineHeightLg};
      font-weight: ${DshTextWeight400};
      color: var(--color-helper);
    }
    .error p.helper { color: var(--color-error); }
    .disabled p.helper { color: var(--color-helper); }
    p.text {
      height: 24px;
      font-size: ${DshTextSizeLg};
      line-height: ${DshTextLineHeightXl};
      font-weight: ${DshTextWeight400};
      color: var(--color-text);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .disabled p.text { color: var(--color-disabled); }
    .select-box {
      display: flex;
      width: 100%;
      height: 48px;
      flex-direction: column;
      margin: ${DshSpace0};
      position: relative;
    }
    .select-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      margin-bottom: ${DshSpace100};
    }
    .select-container:focus {
      outline: 3px solid ${DshColorPrimaryC2};
      outline-offset: 3px;
      border-radius: ${DshBorderRadius100};
    }
    .disabled .select-box .select-container:focus { outline: 0; outline-offset: 0; }
    .selected {
      box-sizing: border-box;
      width: 100%;
      background: var(--background);
      border-radius: ${DshBorderRadius100};
      padding: ${DshSpace150} ${DshSpace0} ${DshSpace150} ${DshSpace200};
      margin: ${DshSpace0};
      position: relative;
      height: 48px;
      display: flex;
      align-items: center;
      border: 1px solid var(--border-color);
      box-shadow: ${DshShadowS};
    }
    .selected { transition: border-color 150ms ease; }
    .selected:hover { border-color: var(--border-color-hover); }
    .error .selected { border-color: var(--color-error); width: calc(100% - 40px); }
    .disabled .selected {
      background: var(--background-disabled);
      border-color: var(--border-color-disabled);
      cursor: not-allowed;
      width: 100%;
    }
    .icon { width: 32px; height: 32px; margin: 0 ${DshSpace100}; }
    .icon dsh-icon {
      width: 32px;
      display: flex;
      height: 32px;
      align-items: center;
      justify-content: center;
    }
    .error-icon {
      width: 40px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: end;
    }
    .dropdown-list {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      z-index: 100;
      background: var(--background);
      border: 1px solid var(--border-color);
      border-radius: ${DshBorderRadius100};
      box-shadow: ${DshShadowS};
      max-height: 200px;
      overflow-y: auto;
      margin-top: 4px;
    }
    .dropdown-item {
      padding: ${DshSpace100} ${DshSpace200};
      font-size: ${DshTextSizeLg};
      line-height: ${DshTextLineHeightXl};
      font-weight: ${DshTextWeight400};
      color: var(--color-text);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: ${DshSpace100};
    }
    .dropdown-item { transition: background-color 150ms ease; }
    .dropdown-item:hover { background: var(--background-hover); }
    .dropdown-item.disabled { color: var(--color-disabled); cursor: not-allowed; }
    .dropdown-item.selected { font-weight: ${DshTextWeight500}; }
    .dropdown-item.error { color: var(--color-error); }
    .dropdown-checkbox {
      width: 16px;
      height: 16px;
      border: 1px solid var(--border-color);
      border-radius: 3px;
      flex-shrink: 0;
    }
    .hide { display: none; }
    .modal { width: 100%; height: 96px; position: relative; font-family: var(--font-family); }
    .modal-button {
      width: calc(100% - 16px);
      height: 96px;
      cursor: pointer;
      position: absolute;
      padding: 0 ${DshSpace100};
    }
    .modal-button:focus { outline: 3px solid ${DshColorPrimaryC2}; border-radius: ${DshBorderRadius100}; height: 48px; }
    .modal-top {
      box-sizing: border-box;
      width: calc(100% - 8px);
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${DshSpace100} 0;
    }
    .modal-button { transition: background-color 150ms ease; }
    .modal-button:hover { background: var(--background-hover); border-radius: ${DshBorderRadius100}; height: 48px; }
    .modal-label {
      color: var(--color-modal-top);
      font-size: ${DshTextSizeLg};
      line-height: ${DshTextLineHeightXl};
      font-weight: ${DshTextWeight650};
    }
    .modal-bottom {
      width: 100%;
      height: 48px;
      display: flex;
      align-items: start;
      justify-content: start;
      margin-top: ${DshSpace100};
    }
    .modal-placeholder {
      width: 100%;
      height: 48px;
      color: var(--color-modal-bottom);
      font-size: ${DshTextSizeLg};
      line-height: ${DshTextLineHeightXl};
      font-weight: ${DshTextWeight500};
    }
    .modal-dropdown {
      width: 100%;
      position: absolute;
      margin-top: ${DshSpace700};
      z-index: 100;
    }
  `,
];
