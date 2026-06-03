import { html } from 'lit-html';
import Props from '@components/select/custom-elements';
import '@components/select';

export default {
  title: 'Components/Atoms/Select',
  component: 'dsh-select',
  tags: ['autodocs'],
  ...Props,
};

export const Default = {
  name: 'Default — Con opciones',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:400px;">
      <dsh-select type="select" label="País" placeholder="Selecciona un país...">
        <dsh-select-option value="cl">Chile</dsh-select-option>
        <dsh-select-option value="ar">Argentina</dsh-select-option>
        <dsh-select-option value="pe">Perú</dsh-select-option>
        <dsh-select-option value="co">Colombia</dsh-select-option>
        <dsh-select-option value="mx">México</dsh-select-option>
      </dsh-select>
    </div>
  `,
};

export const TipoCheckbox = {
  name: 'Tipo checkbox',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:400px;">
      <dsh-select type="checkbox" label="Intereses" placeholder="Selecciona tus intereses...">
        <dsh-select-option value="tech">Tecnología</dsh-select-option>
        <dsh-select-option value="sports">Deportes</dsh-select-option>
        <dsh-select-option value="music">Música</dsh-select-option>
        <dsh-select-option value="travel">Viajes</dsh-select-option>
        <dsh-select-option value="food">Gastronomía</dsh-select-option>
      </dsh-select>
    </div>
  `,
};

export const Modal = {
  name: 'Modal',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:400px;">
      <dsh-select type="select" label="Plan (modo modal)" placeholder="Selecciona tu plan..." modal>
        <dsh-select-option value="basic">Plan Básico — Gratis</dsh-select-option>
        <dsh-select-option value="pro">Plan Pro — $9.99/mes</dsh-select-option>
        <dsh-select-option value="enterprise">Plan Enterprise — Contactar</dsh-select-option>
      </dsh-select>
    </div>
  `,
};

export const Disabled = {
  name: 'Disabled',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:400px;">
      <dsh-select type="select" label="Campo deshabilitado" placeholder="No disponible" disabled>
        <dsh-select-option value="a">Opción A</dsh-select-option>
        <dsh-select-option value="b">Opción B</dsh-select-option>
      </dsh-select>
    </div>
  `,
};

export const ConError = {
  name: 'Con error',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:400px;">
      <dsh-select
        type="select"
        label="Categoría (requerida)"
        placeholder="Selecciona una categoría..."
        error
        helper="Debes seleccionar una categoría para continuar"
      >
        <dsh-select-option value="cat1">Categoría A</dsh-select-option>
        <dsh-select-option value="cat2">Categoría B</dsh-select-option>
        <dsh-select-option value="cat3">Categoría C</dsh-select-option>
      </dsh-select>
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
  args: Props.args,
  argTypes: Props.argTypes,
  render: (args) => html`
    <div style="max-width:400px;">
      <dsh-select
        type="${args.type}"
        label="${args.label}"
        helper="${args.helper}"
        placeholder="${args.placeholder}"
        ?disabled="${args.disabled}"
        ?error="${args.error}"
        ?active="${args.active}"
        ?modal="${args.modal}"
        ?alphabetical-order="${args.alphabeticalOrder}"
        value="${args.value}"
      >
        <dsh-select-option value="opt1">Opción 1</dsh-select-option>
        <dsh-select-option value="opt2">Opción 2</dsh-select-option>
        <dsh-select-option value="opt3">Opción 3</dsh-select-option>
        <dsh-select-option value="opt4">Opción 4</dsh-select-option>
      </dsh-select>
    </div>
  `,
};

export const ReactUsage = {
  name: 'React — Cómo usarlo',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:400px;">
      <dsh-select type="select" label="País" placeholder="Selecciona un país...">
        <dsh-select-option value="cl">Chile</dsh-select-option>
        <dsh-select-option value="ar">Argentina</dsh-select-option>
        <dsh-select-option value="pe">Perú</dsh-select-option>
      </dsh-select>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `// 1. Registrar el componente una vez en el entry de tu app
import 'own-design-system/components/select';

// 2. Declarar el tipo para TypeScript (global.d.ts)
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dsh-select': React.HTMLAttributes<HTMLElement> & {
        type?: 'select' | 'checkbox';
        label?: string;
        helper?: string;
        placeholder?: string;
        disabled?: boolean;
        error?: boolean;
        active?: boolean;
        modal?: boolean;
        alphabeticalOrder?: boolean;
        value?: string;
      };
      'dsh-select-option': React.HTMLAttributes<HTMLElement> & {
        value?: string;
        selected?: boolean;
        disabled?: boolean;
        error?: boolean;
      };
    }
  }
}

// ─── React 19 — soporte nativo de custom elements ───────────────────────────
function CountrySelect() {
  return (
    <dsh-select
      label="País"
      placeholder="Selecciona un país..."
      onclick-option={(e) => console.log('seleccionado:', e.detail)}
    >
      <dsh-select-option value="cl">Chile</dsh-select-option>
      <dsh-select-option value="ar">Argentina</dsh-select-option>
      <dsh-select-option value="pe">Perú</dsh-select-option>
    </dsh-select>
  );
}

// ─── React 18 — via ref + addEventListener ──────────────────────────────────
import { useRef, useEffect, useState } from 'react';

function CountrySelect() {
  const ref = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: CustomEvent) => setSelected(e.detail);
    el.addEventListener('ClickOption', handler);
    return () => el.removeEventListener('ClickOption', handler);
  }, []);

  return (
    <dsh-select ref={ref} label="País" placeholder="Selecciona...">
      <dsh-select-option value="cl">Chile</dsh-select-option>
      <dsh-select-option value="ar">Argentina</dsh-select-option>
      <dsh-select-option value="pe">Perú</dsh-select-option>
    </dsh-select>
  );
}

// ─── Selección múltiple con checkbox ────────────────────────────────────────
function InterestsSelect() {
  const ref = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: CustomEvent) => setSelected(e.detail);
    el.addEventListener('clickCheckbox', handler);
    return () => el.removeEventListener('clickCheckbox', handler);
  }, []);

  return (
    <dsh-select ref={ref} type="checkbox" label="Intereses" placeholder="Selecciona tus intereses...">
      <dsh-select-option value="tech">Tecnología</dsh-select-option>
      <dsh-select-option value="sports">Deportes</dsh-select-option>
      <dsh-select-option value="music">Música</dsh-select-option>
    </dsh-select>
  );
}`,
      },
    },
  },
};
