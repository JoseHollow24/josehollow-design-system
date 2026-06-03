const types = ['text', 'password', 'email', 'tel', 'rut', 'number'];
const variants = ['', 'success', 'error'];

const Props = {
  args: {
    id: 'input-id',
    name: 'input-name',
    type: 'text',
    placeholder: 'Ingresa un valor...',
    label: 'Campo de texto',
    helpermessage: '',
    errormessage: '',
    disabled: false,
    variant: '',
    clearable: false,
    value: '',
    maxlength: '',
    required: false,
    ariaLabel: 'input-aria-label',
  },
  argTypes: {
    id: {
      name: 'id',
      description: 'Identificador único del input',
      table: { type: { summary: 'string' } },
    },
    name: {
      name: 'name',
      description: 'Nombre del campo para formularios',
      table: { type: { summary: 'string' } },
    },
    type: {
      name: 'type',
      description: 'Tipo de campo de entrada',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
      control: { type: 'select' },
      options: types,
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
    helpermessage: {
      name: 'helpermessage',
      description: 'Mensaje de ayuda mostrado bajo el campo',
      table: { type: { summary: 'string' } },
    },
    errormessage: {
      name: 'errormessage',
      description: 'Mensaje de error mostrado cuando variant es "error"',
      table: { type: { summary: 'string' } },
    },
    disabled: {
      name: 'disabled',
      description: 'Deshabilita la interacción con el campo',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    variant: {
      name: 'variant',
      description: 'Estado visual del campo: vacío (default), success, error',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: { type: 'select' },
      options: variants,
    },
    clearable: {
      name: 'clearable',
      description: 'Muestra un botón para limpiar el contenido del campo',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    value: {
      name: 'value',
      description: 'Valor actual del campo (modo controlado)',
      table: { type: { summary: 'string' } },
    },
    maxlength: {
      name: 'maxlength',
      description: 'Longitud máxima de caracteres permitida',
      table: { type: { summary: 'string' } },
    },
    required: {
      name: 'required',
      description: 'Marca el campo como obligatorio',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    ariaLabel: {
      name: 'ariaLabel',
      description: 'Etiqueta ARIA para accesibilidad',
      table: {
        category: 'Accessibility',
        type: { summary: 'string' },
      },
    },
    changeInput: {
      name: 'changeInput',
      description: 'Evento disparado al cambiar el valor. Emite el nuevo valor como detail',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
      },
    },
    clickClear: {
      name: 'clickClear',
      description: 'Evento disparado al hacer click en el botón de limpieza (requiere clearable)',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
      },
    },
    ValidateRut: {
      name: 'ValidateRut',
      description: 'Evento disparado para validación de RUT (requiere type="rut")',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
      },
    },
  },
};

export default Props;
