# Changelog — dsh-input

## [1.0.0] — 2026-06-02

### Added
- Implementación inicial de `<dsh-input>` usando Atomico sobre Shadow DOM
- Prop `id` para identificación y asociación de label
- Prop `name` para formularios
- Prop `type` para tipos de campo: `text`, `password`, `email`, `tel`, `rut`, `number` (default: `text`)
- Prop `placeholder` para el texto de ayuda dentro del campo
- Prop `label` para la etiqueta visible del campo
- Prop `helpermessage` para texto de ayuda bajo el campo
- Prop `errormessage` para mensaje de error bajo el campo
- Prop `disabled` para deshabilitar la interacción (boolean)
- Prop `variant` para estados visuales: `''` (default), `success`, `error`
- Prop `clearable` para mostrar botón de limpieza (boolean)
- Prop `value` para el valor controlado del campo
- Prop `maxlength` para limitar la longitud del texto
- Prop `required` para campos obligatorios (boolean)
- Prop `ariaLabel` para accesibilidad ARIA
- Evento `changeInput` con el nuevo valor del campo
- Evento `clickClear` al hacer click en el botón de limpieza
- Evento `ValidateRut` para validación de RUT chileno (tipo rut)
- Toggle de visibilidad para campos tipo password
- Integración con `dsh-icon` para íconos internos (ojo, limpiar, etc.)
- `custom-elements.js` con `args` y `argTypes` para los controles de Storybook
- `index.html` para desarrollo y demo standalone del componente
- `vite.config.js` para build standalone del componente hacia `dist/`
- `web-test-runner.mjs` y `input.test.js` con casos de prueba
- Stories completas: `Default`, `Password`, `Email`, `Tel`, `ConError`, `ConExito`, `Clearable`, `Disabled`, `Playground`, `ReactUsage`
- `CHANGELOG.md` integrado en la documentación de Storybook
