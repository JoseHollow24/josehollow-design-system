import { html } from 'lit-html';
import { userEvent, expect } from 'storybook/test';
import Props from '@components/input/custom-elements';
import '@components/input';

export default {
  title: 'Components/Atoms/Input',
  component: 'dsh-input',
  tags: ['autodocs'],
  ...Props,
};

export const Default = {
  name: 'Default',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:400px;">
      <dsh-input id="d1" name="nombre" type="text" label="Nombre completo" placeholder="Ingresa tu nombre..."></dsh-input>
      <dsh-input id="d2" name="codigo" type="number" label="Código" placeholder="000000" helpermessage="Código de 6 dígitos"></dsh-input>
    </div>
  `,
};

export const Password = {
  name: 'Password',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:400px;">
      <dsh-input id="p1" name="password" type="password" label="Contraseña" placeholder="Ingresa tu contraseña..."></dsh-input>
    </div>
  `,
};

export const Email = {
  name: 'Email',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:400px;">
      <dsh-input id="e1" name="email" type="email" label="Correo electrónico" placeholder="ejemplo@correo.com" required></dsh-input>
    </div>
  `,
};

export const Tel = {
  name: 'Tel',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:400px;">
      <dsh-input id="t1" name="tel" type="tel" label="Teléfono" placeholder="+56 9 xxxx xxxx"></dsh-input>
    </div>
  `,
};

export const ConError = {
  name: 'Con error',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:400px;">
      <dsh-input
        id="err1"
        name="email"
        type="email"
        label="Correo electrónico"
        placeholder="ejemplo@correo.com"
        variant="error"
        errormessage="Formato de correo inválido"
        value="correo-invalido"
      ></dsh-input>
    </div>
  `,
};

export const ConExito = {
  name: 'Con éxito',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:400px;">
      <dsh-input
        id="suc1"
        name="usuario"
        type="text"
        label="Usuario"
        placeholder="Ingresa tu usuario..."
        variant="success"
        value="usuario_valido"
      ></dsh-input>
    </div>
  `,
};

export const Clearable = {
  name: 'Clearable',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:400px;">
      <dsh-input
        id="clr1"
        name="busqueda"
        type="text"
        label="Búsqueda"
        placeholder="Buscar productos..."
        clearable
        value="zapatillas deportivas"
      ></dsh-input>
    </div>
  `,
};

export const Disabled = {
  name: 'Disabled',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:400px;">
      <dsh-input id="dis1" name="disabled" type="text" label="Campo deshabilitado" value="No editable" disabled></dsh-input>
      <dsh-input id="dis2" name="disabled2" type="text" label="Campo deshabilitado vacío" placeholder="No disponible" disabled></dsh-input>
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
  args: Props.args,
  argTypes: Props.argTypes,
  render: (args) => html`
    <div style="max-width:400px;">
      <dsh-input
        id="${args.id}"
        name="${args.name}"
        type="${args.type}"
        placeholder="${args.placeholder}"
        label="${args.label}"
        helpermessage="${args.helpermessage}"
        errormessage="${args.errormessage}"
        ?disabled="${args.disabled}"
        variant="${args.variant}"
        ?clearable="${args.clearable}"
        value="${args.value}"
        maxlength="${args.maxlength}"
        ?required="${args.required}"
        aria-label="${args.ariaLabel}"
      ></dsh-input>
    </div>
  `,
};

export const ReactUsage = {
  name: 'React — Cómo usarlo',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:400px;">
      <dsh-input id="r1" name="email" type="email" label="Correo electrónico" placeholder="ejemplo@correo.com"></dsh-input>
      <dsh-input id="r2" name="password" type="password" label="Contraseña" placeholder="Ingresa tu contraseña..."></dsh-input>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `// 1. Registrar el componente una vez en el entry de tu app
import 'josehollow-design-system/components/input';

// 2. Declarar el tipo para TypeScript (global.d.ts)
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dsh-input': React.HTMLAttributes<HTMLElement> & {
        id?: string;
        name?: string;
        type?: 'text' | 'password' | 'email' | 'tel' | 'rut' | 'number';
        placeholder?: string;
        label?: string;
        helpermessage?: string;
        errormessage?: string;
        disabled?: boolean;
        variant?: '' | 'success' | 'error';
        clearable?: boolean;
        value?: string;
        maxlength?: string;
        required?: boolean;
        ariaLabel?: string;
      };
    }
  }
}

// ─── React 19 — soporte nativo de custom elements ───────────────────────────
function LoginForm() {
  return (
    <form>
      <dsh-input
        name="email"
        type="email"
        label="Correo electrónico"
        placeholder="ejemplo@correo.com"
        required
        onchangeinput={(e) => console.log('valor:', e.detail)}
      />
      <dsh-input
        name="password"
        type="password"
        label="Contraseña"
        placeholder="Ingresa tu contraseña..."
        onchangeinput={(e) => console.log('valor:', e.detail)}
      />
    </form>
  );
}

// ─── React 18 — via ref + addEventListener ──────────────────────────────────
import { useRef, useEffect, useState } from 'react';

function ControlledInput({ label, name }: { label: string; name: string }) {
  const ref = useRef<HTMLElement>(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: CustomEvent) => setValue(e.detail);
    el.addEventListener('changeInput', handler);
    return () => el.removeEventListener('changeInput', handler);
  }, []);

  return (
    <dsh-input
      ref={ref}
      name={name}
      label={label}
      value={value}
      type="text"
    />
  );
}`,
      },
    },
  },
};

export const Interaction = {
  name: 'Interacción — Tipeo',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:400px;">
      <dsh-input id="inp-interaction" name="nombre" type="text" label="Nombre" placeholder="Escribe algo..."></dsh-input>
      <dsh-input id="inp-clearable" name="buscar" type="text" label="Búsqueda" placeholder="Texto..." clearable></dsh-input>
    </div>
  `,
  play: async ({ canvasElement }) => {
    await customElements.whenDefined('dsh-input');
    await new Promise(r => setTimeout(r, 80));

    const host = canvasElement.querySelector('#inp-interaction');
    await expect(host).not.toBeNull();

    const input = host?.shadowRoot?.querySelector('input.form-control');
    await expect(input).not.toBeNull();

    await userEvent.click(input);
    await userEvent.type(input, 'José Aguilar');

    await expect(host.value).toBe('José Aguilar');

    // Clearable: escribir y limpiar
    const clearHost = canvasElement.querySelector('#inp-clearable');
    const clearInput = clearHost?.shadowRoot?.querySelector('input.form-control');
    if (clearInput) {
      await userEvent.click(clearInput);
      await userEvent.type(clearInput, 'texto a limpiar');
      await expect(clearHost.value).toBe('texto a limpiar');
    }
  },
};
