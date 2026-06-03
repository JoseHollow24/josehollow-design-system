const Props = {
  args: {
    loop: false,
    progress: 0,
    animationtime: 4000,
    error: false,
  },
  argTypes: {
    loop: {
      name: 'loop',
      description: 'Activa la animación de carga infinita (sin progreso definido)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    progress: {
      name: 'progress',
      description: 'Porcentaje de progreso actual (0–100). Se muestra cuando loop es false',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    animationtime: {
      name: 'animationtime',
      description: 'Duración de la animación de carga en milisegundos',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 4000 },
      },
    },
    error: {
      name: 'error',
      description: 'Muestra el estado de error en lugar del estado de carga',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};

export default Props;
