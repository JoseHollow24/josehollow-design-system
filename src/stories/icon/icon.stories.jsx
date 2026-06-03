import { html } from 'lit-html';
import Props from '@components/icon/custom-elements';
import '@components/icon';

export default {
  title: 'Components/Atoms/Icon',
  component: 'dsh-icon',
  tags: ['autodocs'],
  ...Props,
};

export const Tamanos = {
  name: 'Tamaños (s1–s5)',
  render: () => html`
    <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-end;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <dsh-icon icon-name="fa-bell" fa-styles="fas" size="s1"></dsh-icon>
        <span style="font-size:11px;color:#888;">s1</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <dsh-icon icon-name="fa-bell" fa-styles="fas" size="s2"></dsh-icon>
        <span style="font-size:11px;color:#888;">s2</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <dsh-icon icon-name="fa-bell" fa-styles="fas" size="s3"></dsh-icon>
        <span style="font-size:11px;color:#888;">s3</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <dsh-icon icon-name="fa-bell" fa-styles="fas" size="s4"></dsh-icon>
        <span style="font-size:11px;color:#888;">s4</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <dsh-icon icon-name="fa-bell" fa-styles="fas" size="s5"></dsh-icon>
        <span style="font-size:11px;color:#888;">s5</span>
      </div>
    </div>
  `,
};

export const Colores = {
  name: 'Colores',
  render: () => html`
    <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <dsh-icon icon-name="fa-star" fa-styles="fas" size="s3" color="c1"></dsh-icon>
        <span style="font-size:11px;color:#888;">c1</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <dsh-icon icon-name="fa-star" fa-styles="fas" size="s3" color="r1"></dsh-icon>
        <span style="font-size:11px;color:#888;">r1</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <dsh-icon icon-name="fa-star" fa-styles="fas" size="s3" color="v1"></dsh-icon>
        <span style="font-size:11px;color:#888;">v1</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <dsh-icon icon-name="fa-star" fa-styles="fas" size="s3" color="a1"></dsh-icon>
        <span style="font-size:11px;color:#888;">a1</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
        <dsh-icon icon-name="fa-star" fa-styles="fas" size="s3" color="g1"></dsh-icon>
        <span style="font-size:11px;color:#888;">g1</span>
      </div>
    </div>
  `,
};

export const IconosPopulares = {
  name: 'Íconos populares',
  render: () => html`
    <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:12px;background:white;border:1px solid #eee;border-radius:8px;">
        <dsh-icon icon-name="fa-bell" fa-styles="fas" size="s3" color="c1"></dsh-icon>
        <span style="font-size:11px;color:#888;">fa-bell</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:12px;background:white;border:1px solid #eee;border-radius:8px;">
        <dsh-icon icon-name="fa-user" fa-styles="fas" size="s3" color="c1"></dsh-icon>
        <span style="font-size:11px;color:#888;">fa-user</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:12px;background:white;border:1px solid #eee;border-radius:8px;">
        <dsh-icon icon-name="fa-star" fa-styles="fas" size="s3" color="a1"></dsh-icon>
        <span style="font-size:11px;color:#888;">fa-star</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:12px;background:white;border:1px solid #eee;border-radius:8px;">
        <dsh-icon icon-name="fa-heart" fa-styles="fas" size="s3" color="r1"></dsh-icon>
        <span style="font-size:11px;color:#888;">fa-heart</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:12px;background:white;border:1px solid #eee;border-radius:8px;">
        <dsh-icon icon-name="fa-check" fa-styles="fas" size="s3" color="v1"></dsh-icon>
        <span style="font-size:11px;color:#888;">fa-check</span>
      </div>
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
  args: Props.args,
  argTypes: Props.argTypes,
  render: (args) => html`
    <dsh-icon
      icon-name="${args.iconName}"
      fa-styles="${args.faStyles}"
      size="${args.size}"
      color="${args.color}"
      class="${args.class}"
    ></dsh-icon>
  `,
};

export const ReactUsage = {
  name: 'React — Cómo usarlo',
  render: () => html`
    <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center;">
      <dsh-icon icon-name="fa-bell" fa-styles="fas" size="s3" color="c1"></dsh-icon>
      <dsh-icon icon-name="fa-user" fa-styles="fas" size="s3" color="g1"></dsh-icon>
      <dsh-icon icon-name="fa-heart" fa-styles="fas" size="s3" color="r1"></dsh-icon>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `// 1. Registrar el componente una vez en el entry de tu app
import 'own-design-system/components/icon';

// 2. Declarar el tipo para TypeScript (global.d.ts)
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dsh-icon': React.HTMLAttributes<HTMLElement> & {
        iconName?: string;
        faStyles?: 'fas' | 'far' | 'fal' | 'fab';
        color?: string;
        size?: 's1' | 's2' | 's3' | 's4' | 's5' | 's6' | 's7';
        class?: string;
      };
    }
  }
}

// ─── React 19 — soporte nativo de custom elements ───────────────────────────
function MyIcon() {
  return (
    <dsh-icon
      icon-name="fa-bell"
      fa-styles="fas"
      size="s3"
      color="c1"
    />
  );
}

// ─── React 18 — uso directo (sin eventos custom) ────────────────────────────
function MyIcon() {
  return (
    <dsh-icon
      icon-name="fa-heart"
      fa-styles="fas"
      size="s4"
      color="r1"
    />
  );
}`,
      },
    },
  },
};
