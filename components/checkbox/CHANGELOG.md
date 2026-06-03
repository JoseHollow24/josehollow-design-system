# Changelog — dsh-checkbox

## [1.0.0] — 2026-06-02

### Added
- Implementación inicial de `<dsh-checkbox>` usando Atomico sobre Shadow DOM
- Prop `id` para identificación del componente y asociación con `<label>`
- Prop `name` para grupos de formulario
- Prop `label` para el texto visible junto al checkbox
- Prop `value` para el valor del checkbox en formularios
- Prop `focus` para aplicar el estado de foco visual (boolean)
- Prop `checked` para el estado marcado del checkbox (boolean)
- Prop `error` para mostrar el estado de error (boolean)
- Prop `required` para marcar el campo como obligatorio (boolean)
- Prop `disabled` para deshabilitar la interacción (boolean)
- Prop `indeterminate` para el estado intermedio del checkbox (boolean)
- Prop `dark` para el modo oscuro (boolean)
- Prop `tabIndex` para el orden de tabulación (default: `1`)
- Evento `checkbox-change` con detail `{ checked, value, name, id }`
- Evento `checkbox-focus` al recibir el foco
- Evento `checkbox-blur` al perder el foco
- Navegación por teclado (Space para toggle)
- Accesibilidad ARIA completa
- `custom-elements.js` con `args` y `argTypes` para los controles de Storybook
- `index.html` para desarrollo y demo standalone del componente
- `vite.config.js` para build standalone del componente hacia `dist/`
- `web-test-runner.mjs` y `checkbox.test.js` con casos de prueba
- Stories completas: `Default`, `Checked`, `Disabled`, `Error`, `Indeterminate`, `DarkMode`, `Playground`, `ReactUsage`
- `CHANGELOG.md` integrado en la documentación de Storybook
