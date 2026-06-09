import { html } from 'lit-html';
import Props from '@components/loading/custom-elements';
import '@components/loading';

export default {
  title: 'Components/Atoms/Loading',
  component: 'dsh-loading',
  tags: ['autodocs'],
  ...Props,
};

export const LoopInfinito = {
  name: 'Loop infinito',
  render: () => html`
    <dsh-loading loop>
      <span slot="message">Cargando datos...</span>
    </dsh-loading>
  `,
};

export const ConProgreso = {
  name: 'Con progreso',
  render: () => html`
    <dsh-loading progress="65">
      <span slot="message">Procesando archivo... 65%</span>
    </dsh-loading>
  `,
};

export const EstadoError = {
  name: 'Estado error',
  render: () => html`
    <dsh-loading error>
      <span slot="message">No se pudo completar la operación</span>
      <div slot="btn-group" style="display:flex;gap:8px;margin-top:12px;">
        <button onclick="alert('Reintentar')">Reintentar</button>
        <button onclick="alert('Cancelar')">Cancelar</button>
      </div>
    </dsh-loading>
  `,
};

export const Playground = {
  name: 'Playground',
  args: Props.args,
  argTypes: Props.argTypes,
  render: (args) => html`
    <dsh-loading
      ?loop="${args.loop}"
      progress="${args.progress}"
      animationtime="${args.animationtime}"
      ?error="${args.error}"
    >
      <span slot="message">Cargando...</span>
    </dsh-loading>
  `,
};

export const ReactUsage = {
  name: 'React — Cómo usarlo',
  render: () => html`
    <dsh-loading loop>
      <span slot="message">Cargando datos...</span>
    </dsh-loading>
  `,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `// 1. Registrar el componente una vez en el entry de tu app
import 'josehollow-design-system/components/loading';

// 2. Declarar el tipo para TypeScript (global.d.ts)
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dsh-loading': React.HTMLAttributes<HTMLElement> & {
        loop?: boolean;
        progress?: number;
        animationtime?: number;
        error?: boolean;
      };
    }
  }
}

// ─── React 19 — Loop infinito ───────────────────────────────────────────────
function LoadingScreen() {
  return (
    <dsh-loading loop>
      <span slot="message">Cargando datos...</span>
    </dsh-loading>
  );
}

// ─── React 18 — Con progreso ────────────────────────────────────────────────
function ProgressLoader({ progress }: { progress: number }) {
  return (
    <dsh-loading progress={progress}>
      <span slot="message">Procesando... {progress}%</span>
    </dsh-loading>
  );
}

// ─── Estado de error con acciones ───────────────────────────────────────────
function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <dsh-loading error>
      <span slot="message">No se pudo completar la operación</span>
      <div slot="btn-group">
        <button onClick={onRetry}>Reintentar</button>
      </div>
    </dsh-loading>
  );
}`,
      },
    },
  },
};
