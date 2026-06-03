# Changelog — dsh-radio

## [1.0.0] — 2026-06-02

### Added
- Implementación inicial de `<dsh-radio>` usando Atomico sobre Shadow DOM
- Prop `id` para identificación del componente
- Prop `name` para agrupar radios en un formulario
- Prop `focus` para el estado de foco visual (boolean)
- Prop `value` para el valor del radio en formularios
- Prop `disabled` para deshabilitar la interacción (boolean)
- Prop `error` para mostrar el estado de error (boolean)
- Prop `dark` para el modo oscuro (boolean)
- Prop `checked` para el estado seleccionado del radio (boolean)
- Prop `tabIndex` para el orden de tabulación
- Prop `ariaLabel` para accesibilidad ARIA
- Evento `onClick` con detail del valor seleccionado
- Componente `<dsh-radio-group>` para envolver múltiples radios con gestión automática de selección
- Navegación por teclado (flechas arriba/abajo para navegar entre radios del grupo)
- Accesibilidad ARIA completa (role="radio", aria-checked)
- `custom-elements.js` con `args` y `argTypes` para los controles de Storybook
- `index.html` para desarrollo y demo standalone del componente
- `vite.config.js` para build standalone del componente hacia `dist/`
- `web-test-runner.mjs` y `radio.test.js` con casos de prueba
- Stories completas: `Default`, `Checked`, `Disabled`, `Error`, `RadioGroup`, `Playground`, `ReactUsage`
- `CHANGELOG.md` integrado en la documentación de Storybook
