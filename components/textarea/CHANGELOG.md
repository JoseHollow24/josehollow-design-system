# Changelog — dsh-textarea

## [1.0.0] — 2026-06-02

### Added
- Implementación inicial de `<dsh-textarea>` usando Atomico sobre Shadow DOM
- Prop `id` para identificación y asociación de label
- Prop `name` para formularios
- Prop `placeholder` para el texto de ayuda dentro del área
- Prop `label` para la etiqueta visible del campo
- Prop `disabled` para deshabilitar la interacción (boolean)
- Prop `value` para el valor controlado del textarea
- Prop `maxlength` para limitar la longitud del texto (default: `280`)
- Prop `counter` para mostrar el contador de caracteres restantes (boolean)
- Prop `helpermessage` para texto de ayuda bajo el campo
- Prop `resizeHeight` para permitir redimensionamiento automático según el contenido (boolean)
- Prop `rows` para controlar la altura inicial en filas
- Prop `error` para el estado de error (boolean)
- Prop `success` para el estado de éxito (boolean)
- Evento `changeTextarea` que emite el nuevo valor del campo
- Auto-resize del height cuando `resizeHeight` está activo
- Contador de caracteres con indicador visual al acercarse al límite
- `custom-elements.js` con `args` y `argTypes` para los controles de Storybook
- `index.html` para desarrollo y demo standalone del componente
- `vite.config.js` para build standalone del componente hacia `dist/`
- `web-test-runner.mjs` y `textarea.test.js` con casos de prueba
- Stories completas: `Default`, `ConContador`, `ConHelper`, `ResizeAutomatico`, `Disabled`, `Error`, `Playground`, `ReactUsage`
- `CHANGELOG.md` integrado en la documentación de Storybook
