const positions = ['left', 'right', 'vertical-left', 'vertical-right'];
const sizes = ['s', 'm', 'l'];

const Props = {
  args: {
    position: 'right',
    size: 's',
    pulse: false,
    count: 0,
    bell: false,
    shake: false,
    disabled: false,
  },
  argTypes: {
    position: {
      name: 'position',
      description: 'Define la posición del badge relativa al elemento padre',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'right' },
      },
      control: { type: 'select' },
      options: positions,
    },
    size: {
      name: 'size',
      description: 'Define el tamaño del badge (s = pequeño, m = mediano, l = grande)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 's' },
      },
      control: { type: 'select' },
      options: sizes,
    },
    pulse: {
      name: 'pulse',
      description: 'Activa la animación de pulso para llamar la atención sobre el badge',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    count: {
      name: 'count',
      description: 'Número de notificaciones o elementos a mostrar dentro del badge',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
    },
    bell: {
      name: 'bell',
      description: 'Muestra una campana de notificación en lugar del indicador dot',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    shake: {
      name: 'shake',
      description: 'Activa la animación de vibración en la campana (requiere bell=true)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      name: 'disabled',
      description: 'Deshabilita el badge visualmente',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};

export default Props;
