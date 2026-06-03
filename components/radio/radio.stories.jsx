import { html } from 'lit-html';
import Props from '@components/radio/custom-elements';
import '@components/radio';

export default {
  title: 'Components/Atoms/Radio',
  component: 'dsh-radio',
  tags: ['autodocs'],
  ...Props,
};

export const Default = {
  name: 'Default',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <dsh-radio id="r1" name="group1" value="opt1" label="Opción 1"></dsh-radio>
      <dsh-radio id="r2" name="group1" value="opt2" label="Opción 2"></dsh-radio>
      <dsh-radio id="r3" name="group1" value="opt3" label="Opción 3"></dsh-radio>
    </div>
  `,
};

export const Checked = {
  name: 'Checked',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <dsh-radio id="c1" name="group2" value="opt1" label="Seleccionado" checked></dsh-radio>
      <dsh-radio id="c2" name="group2" value="opt2" label="No seleccionado"></dsh-radio>
    </div>
  `,
};

export const Disabled = {
  name: 'Disabled',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <dsh-radio id="d1" name="group3" value="opt1" label="Deshabilitado" disabled></dsh-radio>
      <dsh-radio id="d2" name="group3" value="opt2" label="Deshabilitado seleccionado" disabled checked></dsh-radio>
    </div>
  `,
};

export const Error = {
  name: 'Error',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <dsh-radio id="e1" name="group4" value="opt1" label="Con error" error></dsh-radio>
      <dsh-radio id="e2" name="group4" value="opt2" label="Error seleccionado" error checked></dsh-radio>
    </div>
  `,
};

export const RadioGroup = {
  name: 'Radio Group',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:4px;">
      <p style="margin:0 0 8px;font-size:14px;font-weight:500;color:#333;">Selecciona tu plan:</p>
      <dsh-radio-group>
        <dsh-radio id="rg1" name="plan" value="basic" label="Plan Básico — Gratis"></dsh-radio>
        <dsh-radio id="rg2" name="plan" value="pro" label="Plan Pro — $9.99/mes" checked></dsh-radio>
        <dsh-radio id="rg3" name="plan" value="enterprise" label="Plan Enterprise — Contactar ventas"></dsh-radio>
      </dsh-radio-group>
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
  args: Props.args,
  argTypes: Props.argTypes,
  render: (args) => html`
    <dsh-radio
      id="${args.id}"
      name="${args.name}"
      value="${args.value}"
      ?focus="${args.focus}"
      ?checked="${args.checked}"
      ?disabled="${args.disabled}"
      ?error="${args.error}"
      ?dark="${args.dark}"
      aria-label="${args.ariaLabel}"
    ></dsh-radio>
  `,
};

export const ReactUsage = {
  name: 'React — Cómo usarlo',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <dsh-radio id="sr1" name="suscripcion" value="mensual" label="Mensual"></dsh-radio>
      <dsh-radio id="sr2" name="suscripcion" value="anual" label="Anual (ahorra 20%)" checked></dsh-radio>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `// 1. Registrar el componente una vez en el entry de tu app
import 'josehollow-design-system/components/radio';

// 2. Declarar el tipo para TypeScript (global.d.ts)
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dsh-radio': React.HTMLAttributes<HTMLElement> & {
        id?: string;
        name?: string;
        value?: string;
        focus?: boolean;
        checked?: boolean;
        disabled?: boolean;
        error?: boolean;
        dark?: boolean;
        tabIndex?: number;
        ariaLabel?: string;
        label?: string;
      };
      'dsh-radio-group': React.HTMLAttributes<HTMLElement>;
    }
  }
}

// ─── React 19 — soporte nativo de custom elements ───────────────────────────
function PlanSelector() {
  return (
    <dsh-radio-group>
      <dsh-radio name="plan" value="basic" label="Plan Básico" onclick={(e) => console.log('onClick', e)} />
      <dsh-radio name="plan" value="pro" label="Plan Pro" checked onclick={(e) => console.log('onClick', e)} />
    </dsh-radio-group>
  );
}

// ─── React 18 — via ref + addEventListener ──────────────────────────────────
import { useRef, useEffect } from 'react';

function PlanRadio({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: Event) => console.log('onClick', e);
    el.addEventListener('onClick', handler);
    return () => el.removeEventListener('onClick', handler);
  }, []);

  return <dsh-radio ref={ref} name="plan" value={value} label={label} />;
}`,
      },
    },
  },
};
