import { html, css } from 'atomico';
import {
  DshBorderRadius50,
  DshBorderRadius200,
  DshColorPrimaryC2,
  DshColorSecondaryG5,
  DshShadowM,
  DshShadowS,
  DshSpace0,
  DshSpace50,
  DshSpace100,
  DshSpace200,
  DshSpace300,
  DshSpace600,
  DshSpaceN400,
} from '@tokens';
import { variantBgTokens, variantBorderTokens } from './message.tokens';

export const customProperties = (variant, closeButton, darkMode) => {
  const  themebg = darkMode ? '#252b3b' : '#ffffff';
  const  themeborder = darkMode ? '#3a4050' : '#ffffff';
  const themecolor = darkMode ? '#e8eaed' : '#000000';

   return html`
    <style>
      :host {
        --background-color: ${ variant ? variantBgTokens[variant] : themebg };
        --border-color: ${ variant ? variantBorderTokens[variant] :  `1px solid ${themeborder}` };
        --margin: ${DshSpace0};
        --side-padding: ${closeButton ? '40px' : '0px'};
        --color: ${variant ? '#000000' : themecolor};
        animation: 0.4s startAnimation;
        animation-fill-mode: forwards;
      }
      @keyframes startAnimation {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes endAnimation {
        from { opacity: 1; }
        to { opacity: 0; }
      }
    </style>
  `
};

export const styles = css`
  :host {
    width: 100%;
    box-sizing: border-box;
    display: inline-flex;
    transition: all 0.4s linear;
    margin: var(--margin);
  }

  :host(.hide-content) {
    animation-name: endAnimation;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }

  .content {
    opacity: 1;
    height: fit-content;
    padding: ${DshSpace200};
    border-radius: ${DshBorderRadius200};
    position: relative;
    box-sizing: border-box;
    background-color: var(--background-color);
    border: var(--border-color);
    color: var(--color);
    box-shadow: ${DshShadowS};
    width: 100%;
    min-width: 288px;
    max-width: 1332px;
  }

  .content-body {
    display: flex;
    align-items: flex-start;
    gap: ${DshSpace100};
  }

  .content-body__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .content-body__text {
    flex: 1;
    min-width: 0;
    padding-right: var(--side-padding, 0px);
  }

  .slot-title ::slotted([slot='title']) {
    font-weight: 650;
    font-size: 1.125rem;
    line-height: 1.5rem;
    margin: 0;
    padding: 0;
  }

  .slot-content ::slotted([slot='content']) {
    margin: 0;
    padding: 0;
  }

  .slot-footer ::slotted([slot='footer']) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: ${DshSpace300};
  }

  .icon-close {
    padding: ${DshSpace0};
    width: 48px;
    height: 48px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;
    position: absolute;
    top: ${DshSpace50};
    right: ${DshSpace50};
    border-radius: ${DshBorderRadius50};
    transition: background-color 150ms ease;
  }

  .icon-close:focus {
    outline: 3px solid ${DshColorPrimaryC2};
    outline-offset: 3px;
  }

  .icon-close:active {
    background-color: ${DshColorSecondaryG5};
  }

  :host([variant='important']) .content {
    padding: ${DshSpace300} ${DshSpace200};
    flex-direction: row;
    align-items: flex-start;
    box-shadow: ${DshShadowM};
  }

  :host([variant='important']) .content.has-icon {
    padding-top: ${DshSpace600};
    margin-top: ${DshSpaceN400};
  }

  :host([variant='important']) .content-inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${DshSpace100};
  }

  :host([variant='important']) .slot-footer {
    margin-top: ${DshSpace300};
  }

  @media (min-width: 768px) {
    :host(:not([variant='important'])) .content {
      min-width: inherit;
    }
  }
`;
