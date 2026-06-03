const Props = {
  args: {
    id: 'checkbox-id',
    name: 'checkbox-name',
    label: 'Acepto los términos y condiciones',
    value: 'checkbox-value',
    focus: false,
    checked: false,
    error: false,
    required: false,
    disabled: false,
    indeterminate: false,
    dark: false,
    tabIndex: 1,
  },
  argTypes: {
    id: {
      name: 'id',
      description: 'Identificador único del checkbox, usado también para la asociación con el label',
      table: { type: { summary: 'string' } },
    },
    name: {
      name: 'name',
      description: 'Nombre del campo para grupos de formulario',
      table: { type: { summary: 'string' } },
    },
    label: {
      name: 'label',
      description: 'Texto visible junto al checkbox',
      table: { type: { summary: 'string' } },
    },
    value: {
      name: 'value',
      description: 'Valor del checkbox enviado en el formulario',
      table: { type: { summary: 'string' } },
    },
    focus: {
      name: 'focus',
      description: 'Aplica el estado visual de foco al checkbox',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    checked: {
      name: 'checked',
      description: 'Estado marcado del checkbox',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    error: {
      name: 'error',
      description: 'Muestra el estado de error visual en el checkbox',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    required: {
      name: 'required',
      description: 'Marca el checkbox como campo obligatorio',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      name: 'disabled',
      description: 'Deshabilita la interacción con el checkbox',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    indeterminate: {
      name: 'indeterminate',
      description: 'Estado intermedio del checkbox (ni marcado ni desmarcado)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    dark: {
      name: 'dark',
      description: 'Activa el modo oscuro del checkbox',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    tabIndex: {
      name: 'tabIndex',
      description: 'Orden de tabulación del elemento en el formulario',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
    },
    'checkbox-change': {
      name: 'checkbox-change',
      description: 'Evento disparado al cambiar el estado. Detail: <code>{ checked, value, name, id }</code>',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
      },
    },
    'checkbox-focus': {
      name: 'checkbox-focus',
      description: 'Evento disparado cuando el checkbox recibe el foco',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
      },
    },
    'checkbox-blur': {
      name: 'checkbox-blur',
      description: 'Evento disparado cuando el checkbox pierde el foco',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
      },
    },
  },
};

export default Props;
