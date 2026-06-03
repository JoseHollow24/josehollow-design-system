import { html } from 'lit-html';
import { userEvent, expect } from 'storybook/test';
import Props from '@components/button/custom-elements';
import '@components/button';

export default {
  title: 'Components/Atoms/Button',
  component: 'dsh-button',
  tags: ['autodocs'],
  ...Props,
};

export const Primary = {
  name: 'Primary',
  render: () => html`
    <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center;">
      <dsh-button variant="primary" color="blue">Primary Blue</dsh-button>
      <dsh-button variant="primary" color="yellow">Primary Yellow</dsh-button>
      <dsh-button variant="primary" color="blue" disabled>Primary Disabled</dsh-button>
      <dsh-button variant="primary" color="blue" loading>Primary Loading</dsh-button>
    </div>
  `,
};

export const Secondary = {
  name: 'Secondary',
  render: () => html`
    <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center;">
      <dsh-button variant="secondary" color="blue">Secondary Blue</dsh-button>
      <dsh-button variant="secondary" color="blue" disabled>Secondary Disabled</dsh-button>
      <dsh-button variant="secondary" color="blue" loading>Secondary Loading</dsh-button>
    </div>
  `,
};

export const Tertiary = {
  name: 'Tertiary',
  render: () => html`
    <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center;">
      <dsh-button variant="tertiary" color="blue">Tertiary Blue</dsh-button>
      <dsh-button variant="tertiary" color="blue" disabled>Tertiary Disabled</dsh-button>
      <dsh-button variant="tertiary" color="blue" loading>Tertiary Loading</dsh-button>
    </div>
  `,
};

export const Full = {
  name: 'Full Width',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:12px;width:400px;">
      <dsh-button variant="primary" color="blue" full>Primary Blue Full</dsh-button>
      <dsh-button variant="secondary" color="blue" full>Secondary Blue Full</dsh-button>
      <dsh-button variant="tertiary" color="blue" full>Tertiary Blue Full</dsh-button>
    </div>
  `,
};

export const Slots = {
  name: 'Slots (íconos)',
  render: () => html`
    <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center;">
      <dsh-button variant="primary" color="blue">
        <span slot="left">←</span>
        Ícono izquierda
      </dsh-button>
      <dsh-button variant="secondary" color="blue">
        Ícono derecha
        <span slot="right">→</span>
      </dsh-button>
      <dsh-button variant="tertiary" color="blue">
        <span slot="left">★</span>
        Ambos íconos
        <span slot="right">→</span>
      </dsh-button>
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
  args: Props.args,
  argTypes: Props.argTypes,
  render: (args) => html`
    <dsh-button
      variant="${args.variant}"
      color="${args.color}"
      ?disabled="${args.disabled}"
      ?loading="${args.loading}"
      ?full="${args.full}"
      ?fluid="${args.fluid}"
      aria-label="${args.ariaLabel}"
    >${args.label || 'Button'}</dsh-button>
  `,
};

export const ReactUsage = {
  name: 'React — Cómo usarlo',
  render: () => html`
    <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center;">
      <dsh-button variant="primary" color="blue">Primary Blue</dsh-button>
      <dsh-button variant="secondary" color="blue">Secondary Blue</dsh-button>
      <dsh-button variant="tertiary" color="blue">Tertiary Blue</dsh-button>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `// 1. Registrar el componente una vez en el entry de tu app
import 'josehollow-design-system/components/button';

// 2. Declarar el tipo para TypeScript (global.d.ts)
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dsh-button': React.HTMLAttributes<HTMLElement> & {
        variant?: 'primary' | 'secondary' | 'tertiary';
        color?: 'blue' | 'yellow';
        disabled?: boolean;
        loading?: boolean;
        full?: boolean;
        fluid?: boolean;
        href?: string;
        target?: string;
        label?: string;
      };
    }
  }
}

// ─── React 19 — soporte nativo de custom elements ───────────────────────────
// El evento se escucha directamente con la prop onclick (lowercase)
function MyButton() {
  return (
    <dsh-button
      variant="primary"
      color="blue"
      onclick={(e) => console.log('onClick', e)}
    >
      Primary Blue
    </dsh-button>
  );
}

// ─── React 18 — via ref + addEventListener ──────────────────────────────────
import { useRef, useEffect } from 'react';

function MyButton() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: Event) => console.log('onClick', e);
    el.addEventListener('onClick', handler);
    return () => el.removeEventListener('onClick', handler);
  }, []);

  return (
    <dsh-button ref={ref} variant="primary" color="blue">
      Primary Blue
    </dsh-button>
  );
}`,
      },
    },
  },
};

export const Interaction = {
  name: 'Interacción — Click',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;align-items:flex-start;">
      <dsh-button id="btn-click" variant="primary" color="blue">Haz click aquí</dsh-button>
      <dsh-button id="btn-disabled" variant="primary" color="blue" disabled>Deshabilitado</dsh-button>
      <p id="log" style="font-family:monospace;font-size:13px;color:#586264;">Esperando click...</p>
    </div>
  `,
  play: async ({ canvasElement }) => {
    await customElements.whenDefined('dsh-button');
    const host = canvasElement.querySelector('#btn-click');
    await expect(host).not.toBeNull();

    let clicked = false;
    host.addEventListener('onClick', () => { clicked = true; });

    const innerBtn = host?.shadowRoot?.querySelector('button');
    await expect(innerBtn).not.toBeNull();
    await userEvent.click(innerBtn);

    await expect(clicked).toBe(true);

    // El botón deshabilitado no dispara eventos
    const disabled = canvasElement.querySelector('#btn-disabled');
    let disabledClicked = false;
    disabled.addEventListener('onClick', () => { disabledClicked = true; });
    const innerDisabled = disabled?.shadowRoot?.querySelector('button');
    await userEvent.click(innerDisabled);
    await expect(disabledClicked).toBe(false);
  },
};
