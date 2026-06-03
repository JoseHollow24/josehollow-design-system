# Changelog — dsh-select

## [1.0.0] — 2026-06-02

### Added
- Implementación inicial de `<dsh-select>` usando Atomico sobre Shadow DOM
- Prop `type` para el modo de selección: `select` (única) o `checkbox` (múltiple) (default: `select`)
- Prop `label` para la etiqueta visible del select
- Prop `helper` para texto de ayuda bajo el componente
- Prop `placeholder` para el texto cuando no hay selección
- Prop `disabled` para deshabilitar la interacción (boolean)
- Prop `error` para el estado de error (boolean)
- Prop `active` para controlar el estado abierto/cerrado del dropdown (boolean)
- Prop `modal` para mostrar las opciones en modo modal en lugar de dropdown (boolean)
- Prop `alphabeticalOrder` para ordenar automáticamente las opciones (boolean)
- Prop `value` para el valor seleccionado actualmente
- Componente `<dsh-select-option>` con props: `value`, `text` (inner text), `selected`, `disabled`, `error`
- Evento `ClickOption` que emite el valor de la opción seleccionada (tipo select)
- Evento `clickCheckbox` que emite un array de values seleccionados (tipo checkbox)
- Evento `Selected` emitido al confirmar la selección
- Integración con `dsh-icon` para los íconos del dropdown (chevron, check)
- El build es self-contained: incluye la dependencia `dsh-icon`
- Animación de apertura/cierre del dropdown
- `custom-elements.js` con `args` y `argTypes` para los controles de Storybook
- `index.html` para desarrollo y demo standalone del componente
- `vite.config.js` para build standalone del componente hacia `dist/`
- `web-test-runner.mjs` y `select.test.js` con casos de prueba
- Stories completas: `Default`, `TipoCheckbox`, `Modal`, `Disabled`, `ConError`, `Playground`, `ReactUsage`
- `CHANGELOG.md` integrado en la documentación de Storybook
