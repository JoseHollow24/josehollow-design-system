import { html, css } from 'atomico';
import {
  DshTextFamilyRawsonPro,
  DshSpace0,
  DshSpace300,
  DshColorPrimaryC1,
  DshColorPrimaryC3,
  DshColorSecondaryG5,
  DshColorComplementaryR2,
} from '@tokens';

export const customProperties = (size) => html`
  <style>
    :host {
      --margin: ${DshSpace0};
      --spinner-size: ${size === 'sm' ? '32px' : size === 'lg' ? '96px' : '64px'};
      --stroke-width: ${size === 'sm' ? '3' : size === 'lg' ? '6' : '5'};
    }
  </style>
`;

export const styles = [
  css`
    :host {
      font-family: ${DshTextFamilyRawsonPro};
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: ${DshSpace300};
      margin: var(--margin);
    }

    .spinner-wrap {
      position: relative;
      width: var(--spinner-size);
      height: var(--spinner-size);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .spinner-wrap svg {
      width: 100%;
      height: 100%;
    }

    .track {
      stroke: ${DshColorSecondaryG5};
    }

    .arc {
      stroke: ${DshColorPrimaryC1};
      stroke-linecap: round;
      transform-origin: center;
      transform: rotate(-90deg);
      transition: stroke-dashoffset 0.4s ease;
    }

    .arc.spinning {
      animation: dsh-spin 1s linear infinite;
    }

    @keyframes dsh-spin {
      to { transform: rotate(270deg); }
    }

    .error-icon {
      color: ${DshColorComplementaryR2};
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ::slotted([slot="message"]) {
      color: #000;
      font-size: 1rem;
      line-height: 1.5;
      font-weight: 500;
      text-align: center;
      margin: 0;
    }

    .btn-slot {
      display: flex;
      justify-content: center;
    }

    @media (max-width: 480px) {
      :host {
        --spinner-size: 48px;
      }
    }
  `,
];
