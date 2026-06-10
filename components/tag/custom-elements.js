const variants = ['general', 'informative', 'news', 'menu', 'interactive'];
const subvariants = ['success', 'error', 'warning', 'informative'];

const Props = {
  args: {
    variant: 'informative',
    subvariant: 'success',
    label: 'Etiqueta',
    showIcon: true,
    color: '',
    state: '',
  },
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Define el tipo principal del tag que determina su comportamiento visual',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'informative' },
      },
      control: { type: 'select' },
      options: variants,
    },
    subvariant: {
      name: 'subvariant',
      description: 'Define el estado semántico del tag (aplica principalmente en variante informative)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'success' },
      },
      control: { type: 'select' },
      options: subvariants,
    },
    label: {
      name: 'label',
      description: 'Texto visible del tag',
      table: { type: { summary: 'string' } },
    },
    showIcon: {
      name: 'showIcon',
      description: 'Muestra u oculta el ícono de estado junto al texto',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    color: {
      name: 'color',
      description: 'Token de color del Design System para personalización adicional',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    state: {
      name: 'state',
      description: 'Estado adicional del tag para variantes con interacción',
      table: { type: { summary: 'string' } },
    },
  },
};

export default Props;
