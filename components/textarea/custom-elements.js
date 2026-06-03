const Props = {
  args: {
    id: 'textarea-id',
    name: 'textarea-name',
    placeholder: 'Escribe aquí...',
    label: 'Descripción',
    disabled: false,
    value: '',
    maxlength: 280,
    counter: false,
    helpermessage: '',
    resizeHeight: false,
    rows: 4,
    error: false,
    success: false,
  },
  argTypes: {
    id: {
      name: 'id',
      description: 'Identificador único del textarea',
      table: { type: { summary: 'string' } },
    },
    name: {
      name: 'name',
      description: 'Nombre del campo para formularios',
      table: { type: { summary: 'string' } },
    },
    placeholder: {
      name: 'placeholder',
      description: 'Texto de placeholder visible cuando el campo está vacío',
      table: { type: { summary: 'string' } },
    },
    label: {
      name: 'label',
      description: 'Etiqueta visible del campo',
      table: { type: { summary: 'string' } },
    },
    disabled: {
      name: 'disabled',
      description: 'Deshabilita la interacción con el textarea',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    value: {
      name: 'value',
      description: 'Valor actual del textarea (modo controlado)',
      table: { type: { summary: 'string' } },
    },
    maxlength: {
      name: 'maxlength',
      description: 'Longitud máxima de caracteres permitida',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 280 },
      },
    },
    counter: {
      name: 'counter',
      description: 'Muestra el contador de caracteres restantes bajo el textarea',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    helpermessage: {
      name: 'helpermessage',
      description: 'Mensaje de ayuda mostrado bajo el campo',
      table: { type: { summary: 'string' } },
    },
    resizeHeight: {
      name: 'resizeHeight',
      description: 'Activa el auto-resize: el textarea crece según el contenido',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    rows: {
      name: 'rows',
      description: 'Número de filas visibles iniciales',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 4 },
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
    success: {
      name: 'success',
      description: 'Activa el estado visual de éxito',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    changeTextarea: {
      name: 'changeTextarea',
      description: 'Evento disparado al cambiar el valor. Emite el nuevo texto como detail',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
      },
    },
  },
};

export default Props;
