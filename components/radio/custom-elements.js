const Props = {
  args: {
    id: 'radio-id',
    name: 'radio-group',
    focus: false,
    value: 'radio-value',
    disabled: false,
    error: false,
    dark: false,
    checked: false,
    tabIndex: 1,
    ariaLabel: 'radio-aria-label',
  },
  argTypes: {
    id: {
      name: 'id',
      description: 'Identificador único del radio button',
      table: { type: { summary: 'string' } },
    },
    name: {
      name: 'name',
      description: 'Nombre del grupo de radio buttons. Los radios con el mismo name forman un grupo de selección única',
      table: { type: { summary: 'string' } },
    },
    focus: {
      name: 'focus',
      description: 'Aplica el estado visual de foco al radio button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    value: {
      name: 'value',
      description: 'Valor del radio button enviado cuando está seleccionado',
      table: { type: { summary: 'string' } },
    },
    disabled: {
      name: 'disabled',
      description: 'Deshabilita la interacción con el radio button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    error: {
      name: 'error',
      description: 'Muestra el estado de error visual en el radio button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    dark: {
      name: 'dark',
      description: 'Activa el modo oscuro del radio button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    checked: {
      name: 'checked',
      description: 'Estado seleccionado del radio button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    tabIndex: {
      name: 'tabIndex',
      description: 'Orden de tabulación del elemento',
      table: { type: { summary: 'number' } },
    },
    ariaLabel: {
      name: 'ariaLabel',
      description: 'Etiqueta ARIA para accesibilidad cuando no hay label visible',
      table: {
        category: 'Accessibility',
        type: { summary: 'string' },
      },
    },
    onClick: {
      name: 'onClick',
      description: 'Evento disparado al seleccionar el radio. Escuchable con <code>addEventListener("onClick", fn)</code>',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
      },
    },
  },
};

export default Props;
