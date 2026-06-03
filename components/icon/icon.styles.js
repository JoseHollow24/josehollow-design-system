import { html, css } from 'atomico';
import { colorTokens, sizeTokens, fontTokens } from './icon.tokens';

// Los @font-face de FA sí cruzan el shadow DOM boundary cuando se inyectan
// directamente en el <style> del host, pero deben venir del mismo documento.
// Hardcodeamos la CDN URL para que funcione en cualquier entorno (dev, build, npm).
const FA_CDN_URL = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css';

export const customProperties = (color, size) => (
  html`
    <style>
      @import url("${FA_CDN_URL}");
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
      opacity: 0;
    }
  `,
];
