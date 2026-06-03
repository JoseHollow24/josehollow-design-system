import { html, css } from 'atomico';
import { colorTokens, sizeTokens, fontTokens } from './icon.tokens';

export const customProperties = (color, size) => (
  html`
    <style>
      :host {
        --color: ${colorTokens[color] || colorTokens['g1']};
        --icon-size: ${sizeTokens[size] || sizeTokens['s1']};
        --icon-text-size: ${fontTokens[size] || fontTokens['s1']};
        --margin: 0;
      }
    </style>
  `
);

export const mainStyles = [
  css`
    :host {
      display: inline-block;
      width: var(--icon-size);
      height: var(--icon-size);
      margin: var(--margin);
    }

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      color: var(--color);
      font-size: var(--icon-text-size);
      width: var(--icon-size);
      height: var(--icon-size);
    }

    .content.font-hidden {
      visibility: hidden;
    }
  `,
];
