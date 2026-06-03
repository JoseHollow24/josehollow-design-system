import { html } from 'lit-html';
import Props from '@components/tag/custom-elements';
import '@components/tag';

export default {
  title: 'Components/Atoms/Tag',
  component: 'dsh-tag',
  tags: ['autodocs'],
  ...Props,
};

export const Informative = {
  name: 'Informative — Subvariantes',
  render: () => html`
    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;">
      <dsh-tag variant="informative" subvariant="success" label="Éxito" show-icon></dsh-tag>
      <dsh-tag variant="informative" subvariant="error" label="Error" show-icon></dsh-tag>
      <dsh-tag variant="informative" subvariant="warning" label="Advertencia" show-icon></dsh-tag>
      <dsh-tag variant="informative" subvariant="informative" label="Informativo" show-icon></dsh-tag>
    </div>
  `,
};

export const General = {
  name: 'General',
  render: () => html`
    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;">
      <dsh-tag variant="general" label="General"></dsh-tag>
      <dsh-tag variant="general" label="Categoría"></dsh-tag>
      <dsh-tag variant="general" label="Etiqueta larga de ejemplo"></dsh-tag>
    </div>
  `,
};

export const Interactive = {
  name: 'Interactive',
  render: () => html`
    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;">
      <dsh-tag variant="interactive" label="Filtro activo"></dsh-tag>
      <dsh-tag variant="interactive" label="Seleccionado"></dsh-tag>
      <dsh-tag variant="interactive" label="Opción 3"></dsh-tag>
    </div>
  `,
};

export const News = {
  name: 'News',
  render: () => html`
    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;">
      <dsh-tag variant="news" label="Nuevo"></dsh-tag>
      <dsh-tag variant="news" label="Actualizado"></dsh-tag>
      <dsh-tag variant="news" label="Beta"></dsh-tag>
    </div>
  `,
};

export const Menu = {
  name: 'Menu',
  render: () => html`
    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;">
      <dsh-tag variant="menu" label="Inicio"></dsh-tag>
      <dsh-tag variant="menu" label="Productos"></dsh-tag>
      <dsh-tag variant="menu" label="Servicios"></dsh-tag>
      <dsh-tag variant="menu" label="Contacto"></dsh-tag>
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
  args: Props.args,
  argTypes: Props.argTypes,
  render: (args) => html`
    <dsh-tag
      variant="${args.variant}"
      subvariant="${args.subvariant}"
      label="${args.label}"
      ?show-icon="${args.showIcon}"
      color="${args.color}"
      state="${args.state}"
    ></dsh-tag>
  `,
};

export const ReactUsage = {
  name: 'React — Cómo usarlo',
  render: () => html`
    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;">
      <dsh-tag variant="informative" subvariant="success" label="Éxito" show-icon></dsh-tag>
      <dsh-tag variant="informative" subvariant="error" label="Error" show-icon></dsh-tag>
      <dsh-tag variant="general" label="General"></dsh-tag>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `// 1. Registrar el componente una vez en el entry de tu app
import 'own-design-system/components/tag';

// 2. Declarar el tipo para TypeScript (global.d.ts)
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dsh-tag': React.HTMLAttributes<HTMLElement> & {
        variant?: 'general' | 'informative' | 'news' | 'menu' | 'interactive';
        subvariant?: 'success' | 'error' | 'warning' | 'informative';
        label?: string;
        showIcon?: boolean;
        color?: string;
        state?: string;
      };
    }
  }
}

// ─── React 19 — soporte nativo de custom elements ───────────────────────────
function MyTag() {
  return (
    <dsh-tag
      variant="informative"
      subvariant="success"
      label="Aprobado"
      show-icon
    />
  );
}

// ─── React 18 — uso directo (sin eventos custom) ────────────────────────────
function MyTag() {
  return (
    <dsh-tag
      variant="general"
      label="Mi etiqueta"
    />
  );
}`,
      },
    },
  },
};
