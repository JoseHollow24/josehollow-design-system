import { html } from 'lit-html';
import Props from '@components/textarea/custom-elements';
import '@components/textarea';

export default {
  title: 'Components/Atoms/Textarea',
  component: 'dsh-textarea',
  tags: ['autodocs'],
  ...Props,
};

export const Default = {
  name: 'Default',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:500px;">
      <dsh-textarea id="t1" name="descripcion" label="Descripción" placeholder="Escribe tu descripción aquí..."></dsh-textarea>
    </div>
  `,
};

export const ConContador = {
  name: 'Con contador',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:500px;">
      <dsh-textarea
        id="t2"
        name="bio"
        label="Biografía (máx. 140 caracteres)"
        placeholder="Cuéntanos sobre ti..."
        maxlength="140"
        counter
      ></dsh-textarea>
    </div>
  `,
};

export const ConHelper = {
  name: 'Con helper message',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:500px;">
      <dsh-textarea
        id="t3"
        name="comentario"
        label="Comentario"
        placeholder="Ingresa tu comentario..."
        helpermessage="Tu comentario será revisado antes de publicarse"
        counter
        maxlength="500"
      ></dsh-textarea>
    </div>
  `,
};

export const ResizeAutomatico = {
  name: 'Resize automático',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:500px;">
      <dsh-textarea
        id="t4"
        name="nota"
        label="Nota (crece automáticamente al escribir)"
        placeholder="Escribe cuanto necesites..."
        resize-height
        rows="2"
      ></dsh-textarea>
    </div>
  `,
};

export const Disabled = {
  name: 'Disabled',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:500px;">
      <dsh-textarea id="t5" name="disabled" label="Campo deshabilitado" value="Este contenido no se puede editar" disabled></dsh-textarea>
    </div>
  `,
};

export const Error = {
  name: 'Error',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:500px;">
      <dsh-textarea id="t6" name="error" label="Descripción (requerida)" placeholder="Este campo es obligatorio" error></dsh-textarea>
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
  args: Props.args,
  argTypes: Props.argTypes,
  render: (args) => html`
    <div style="max-width:500px;">
      <dsh-textarea
        id="${args.id}"
        name="${args.name}"
        placeholder="${args.placeholder}"
        label="${args.label}"
        ?disabled="${args.disabled}"
        value="${args.value}"
        maxlength="${args.maxlength}"
        ?counter="${args.counter}"
        helpermessage="${args.helpermessage}"
        ?resize-height="${args.resizeHeight}"
        rows="${args.rows}"
        ?error="${args.error}"
        ?success="${args.success}"
      ></dsh-textarea>
    </div>
  `,
};

export const ReactUsage = {
  name: 'React — Cómo usarlo',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:500px;">
      <dsh-textarea id="r1" name="mensaje" label="Mensaje" placeholder="Escribe tu mensaje..." counter maxlength="280"></dsh-textarea>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `// 1. Registrar el componente una vez en el entry de tu app
import 'own-design-system/components/textarea';

// 2. Declarar el tipo para TypeScript (global.d.ts)
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dsh-textarea': React.HTMLAttributes<HTMLElement> & {
        id?: string;
        name?: string;
        placeholder?: string;
        label?: string;
        disabled?: boolean;
        value?: string;
        maxlength?: number;
        counter?: boolean;
        helpermessage?: string;
        resizeHeight?: boolean;
        rows?: number;
        error?: boolean;
        success?: boolean;
      };
    }
  }
}

// ─── React 19 — soporte nativo de custom elements ───────────────────────────
function MessageForm() {
  return (
    <dsh-textarea
      name="mensaje"
      label="Mensaje"
      placeholder="Escribe tu mensaje..."
      counter
      maxlength={280}
      onchangetextarea={(e) => console.log('valor:', e.detail)}
    />
  );
}

// ─── React 18 — via ref + addEventListener ──────────────────────────────────
import { useRef, useEffect, useState } from 'react';

function ControlledTextarea() {
  const ref = useRef<HTMLElement>(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: CustomEvent) => setValue(e.detail);
    el.addEventListener('changeTextarea', handler);
    return () => el.removeEventListener('changeTextarea', handler);
  }, []);

  return (
    <dsh-textarea
      ref={ref}
      name="mensaje"
      label="Mensaje"
      value={value}
      counter
      maxlength={280}
    />
  );
}`,
      },
    },
  },
};
