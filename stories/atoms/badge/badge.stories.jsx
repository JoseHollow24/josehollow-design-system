import { html } from 'lit-html';
import Props from '@components/badge/custom-elements';
import '@components/badge';

export default {
  title: 'Components/Atoms/Badge',
  component: 'dsh-badge',
  tags: ['autodocs'],
  ...Props,
};

export const ConCampana = {
  name: 'Con campana',
  render: () => html`
    <div style="display:flex;gap:32px;align-items:center;flex-wrap:wrap;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <div style="position:relative;display:inline-flex;width:40px;height:40px;align-items:center;justify-content:center;background:#e5e7eb;border-radius:8px;">
          <dsh-badge bell position="right"></dsh-badge>
        </div>
        <span style="font-size:11px;color:#888;">bell</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <div style="position:relative;display:inline-flex;width:40px;height:40px;align-items:center;justify-content:center;background:#e5e7eb;border-radius:8px;">
          <dsh-badge bell shake position="right"></dsh-badge>
        </div>
        <span style="font-size:11px;color:#888;">bell + shake</span>
      </div>
    </div>
  `,
};

export const ConConteo = {
  name: 'Con conteo',
  render: () => html`
    <div style="display:flex;gap:32px;align-items:center;flex-wrap:wrap;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <div style="position:relative;display:inline-flex;width:40px;height:40px;align-items:center;justify-content:center;background:#e5e7eb;border-radius:8px;">
          <dsh-badge count="3" position="right"></dsh-badge>
        </div>
        <span style="font-size:11px;color:#888;">3</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <div style="position:relative;display:inline-flex;width:40px;height:40px;align-items:center;justify-content:center;background:#e5e7eb;border-radius:8px;">
          <dsh-badge count="99" position="right"></dsh-badge>
        </div>
        <span style="font-size:11px;color:#888;">99</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <div style="position:relative;display:inline-flex;width:40px;height:40px;align-items:center;justify-content:center;background:#e5e7eb;border-radius:8px;">
          <dsh-badge count="99" size="m" position="right"></dsh-badge>
        </div>
        <span style="font-size:11px;color:#888;">99 (m)</span>
      </div>
    </div>
  `,
};

export const ConPulso = {
  name: 'Con pulso',
  render: () => html`
    <div style="display:flex;gap:32px;align-items:center;flex-wrap:wrap;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <div style="position:relative;display:inline-flex;width:40px;height:40px;align-items:center;justify-content:center;background:#e5e7eb;border-radius:8px;">
          <dsh-badge pulse position="right"></dsh-badge>
        </div>
        <span style="font-size:11px;color:#888;">pulse (s)</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <div style="position:relative;display:inline-flex;width:40px;height:40px;align-items:center;justify-content:center;background:#e5e7eb;border-radius:8px;">
          <dsh-badge pulse size="m" position="right"></dsh-badge>
        </div>
        <span style="font-size:11px;color:#888;">pulse (m)</span>
      </div>
    </div>
  `,
};

export const Posiciones = {
  name: 'Posiciones',
  render: () => html`
    <div style="display:flex;gap:32px;align-items:center;flex-wrap:wrap;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <div style="position:relative;display:inline-flex;width:40px;height:40px;align-items:center;justify-content:center;background:#e5e7eb;border-radius:8px;">
          <dsh-badge count="1" position="left"></dsh-badge>
        </div>
        <span style="font-size:11px;color:#888;">left</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <div style="position:relative;display:inline-flex;width:40px;height:40px;align-items:center;justify-content:center;background:#e5e7eb;border-radius:8px;">
          <dsh-badge count="1" position="right"></dsh-badge>
        </div>
        <span style="font-size:11px;color:#888;">right</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <div style="position:relative;display:inline-flex;width:40px;height:40px;align-items:center;justify-content:center;background:#e5e7eb;border-radius:8px;">
          <dsh-badge count="1" position="vertical-left"></dsh-badge>
        </div>
        <span style="font-size:11px;color:#888;">vertical-left</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <div style="position:relative;display:inline-flex;width:40px;height:40px;align-items:center;justify-content:center;background:#e5e7eb;border-radius:8px;">
          <dsh-badge count="1" position="vertical-right"></dsh-badge>
        </div>
        <span style="font-size:11px;color:#888;">vertical-right</span>
      </div>
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
  args: Props.args,
  argTypes: Props.argTypes,
  render: (args) => html`
    <div style="position:relative;display:inline-flex;width:40px;height:40px;align-items:center;justify-content:center;background:#e5e7eb;border-radius:8px;">
      <dsh-badge
        position="${args.position}"
        size="${args.size}"
        count="${args.count}"
        ?pulse="${args.pulse}"
        ?bell="${args.bell}"
        ?shake="${args.shake}"
        ?disabled="${args.disabled}"
      ></dsh-badge>
    </div>
  `,
};

export const ReactUsage = {
  name: 'React — Cómo usarlo',
  render: () => html`
    <div style="display:flex;gap:32px;align-items:center;">
      <div style="position:relative;display:inline-flex;width:40px;height:40px;align-items:center;justify-content:center;background:#e5e7eb;border-radius:8px;">
        <dsh-badge count="5" position="right"></dsh-badge>
      </div>
      <div style="position:relative;display:inline-flex;width:40px;height:40px;align-items:center;justify-content:center;background:#e5e7eb;border-radius:8px;">
        <dsh-badge bell shake position="right"></dsh-badge>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `// 1. Registrar el componente una vez en el entry de tu app
import 'josehollow-design-system/components/badge';

// 2. Declarar el tipo para TypeScript (global.d.ts)
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dsh-badge': React.HTMLAttributes<HTMLElement> & {
        position?: 'left' | 'right' | 'vertical-left' | 'vertical-right';
        size?: 's' | 'm' | 'l';
        pulse?: boolean;
        count?: number;
        bell?: boolean;
        shake?: boolean;
        disabled?: boolean;
      };
    }
  }
}

// ─── React 19 — soporte nativo de custom elements ───────────────────────────
function NotificationIcon() {
  return (
    <div style={{ position: 'relative', display: 'inline-flex' }}>
      <YourIcon />
      <dsh-badge count={5} position="right" />
    </div>
  );
}

// ─── React 18 — uso directo (sin eventos custom) ────────────────────────────
function NotificationBell() {
  return (
    <div style={{ position: 'relative', display: 'inline-flex' }}>
      <YourIcon />
      <dsh-badge bell shake position="right" />
    </div>
  );
}`,
      },
    },
  },
};
