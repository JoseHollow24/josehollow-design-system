# Changelog — dsh-loading

## [1.0.0] — 2026-06-02

### Added
- Implementación inicial de `<dsh-loading>` usando Atomico sobre Shadow DOM
- Prop `loop` para activar la animación de carga infinita (boolean, default: `false`)
- Prop `progress` para mostrar el progreso actual en porcentaje (0–100)
- Prop `animationtime` para controlar la duración de la animación en ms (default: `4000`)
- Prop `error` para mostrar el estado de error en la carga (boolean, default: `false`)
- Slot `message` para mostrar un mensaje personalizado durante la carga
- Slot `btn-group` para incluir acciones (botones) en el estado de error
- Animación CSS con barra de progreso y spinner
- `custom-elements.js` con `args` y `argTypes` para los controles de Storybook
- `index.html` para desarrollo y demo standalone del componente
- `vite.config.js` para build standalone del componente hacia `dist/`
- `web-test-runner.mjs` y `loading.test.js` con casos de prueba
- Stories completas: `LoopInfinito`, `ConProgreso`, `EstadoError`, `Playground`, `ReactUsage`
- `CHANGELOG.md` integrado en la documentación de Storybook
