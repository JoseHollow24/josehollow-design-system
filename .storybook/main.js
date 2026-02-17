/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  // 1. Mantenemos tus rutas de historias corregidas
  stories: [
    "../stories/components/**/*.stories.jsx",
    "../stories/components/**/*.mdx",
    "../stories/components/**/**/*.stories.jsx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  
  // 2. Añadimos los addons esenciales (Docs, Controls, Actions)
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],

  // 3. CAMBIO CRÍTICO: De React a Web Components
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },

  // 4. Configuración opcional para mejorar el rendimiento de Vite
  core: {
    builder: "@storybook/builder-vite",
  }
};

export default config;