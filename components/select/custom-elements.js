const types = ['select', 'checkbox'];

const Props = {
  args: {
    type: 'select',
    label: 'Selecciona una opción',
    helper: '',
    placeholder: 'Seleccionar...',
    disabled: false,
    error: false,
    active: false,
    modal: false,
    alphabeticalOrder: false,
    value: '',
  },
  argTypes: {
    type: {
      name: 'type',
      description: 'Modo de selección: "select" permite una opción, "checkbox" permite múltiples',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'select' },
      },
      control: { type: 'select' },
      options: types,
    },
    label: {
      name: 'label',
      description: 'Etiqueta visible del selector',
      table: { type: { summary: 'string' } },
    },
    helper: {
      name: 'helper',
      description: 'Texto de ayuda mostrado bajo el selector',
      table: { type: { summary: 'string' } },
    },
    placeholder: {
      name: 'placeholder',
      description: 'Texto mostrado cuando no hay ninguna opción seleccionada',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Seleccionar...' },
      },
    },
    disabled: {
      name: 'disabled',
      description: 'Deshabilita la interacción con el selector',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    error: {
      name: 'error',
      description: 'Activa el estado visual de error',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    active: {
      name: 'active',
      description: 'Controla el estado abierto/cerrado del dropdown de forma programática',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    modal: {
      name: 'modal',
      description: 'Muestra las opciones en un modal en lugar de dropdown (recomendado en mobile)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    alphabeticalOrder: {
      name: 'alphabeticalOrder',
      description: 'Ordena automáticamente las opciones en orden alfabético',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    value: {
      name: 'value',
      description: 'Valor seleccionado actualmente (modo controlado)',
      table: { type: { summary: 'string' } },
    },
    ClickOption: {
      name: 'ClickOption',
      description: 'Evento disparado al seleccionar una opción (type="select"). Emite el value seleccionado',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
      },
    },
    clickCheckbox: {
      name: 'clickCheckbox',
      description: 'Evento disparado al seleccionar/deseleccionar opciones (type="checkbox"). Emite array de values',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
      },
    },
    Selected: {
      name: 'Selected',
      description: 'Evento disparado al confirmar la selección',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
      },
    },
  },
};

export default Props;
