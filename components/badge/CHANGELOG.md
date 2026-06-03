# Changelog — dsh-badge

## [1.0.0] — 2026-06-02

### Added
- Implementación inicial de `<dsh-badge>` usando Atomico sobre Shadow DOM
- Prop `position` para posicionar el badge: `left`, `right`, `vertical-left`, `vertical-right`
- Prop `size` para el tamaño del badge: `s`, `m`, `l` (default: `s`)
- Prop `pulse` para animar el badge con efecto de pulso (boolean)
- Prop `count` para mostrar un número de conteo dentro del badge
- Prop `bell` para mostrar una campana de notificación en lugar del dot (boolean)
- Prop `shake` para animar la campana con efecto de vibración (boolean)
- Prop `disabled` para deshabilitar el badge (boolean)
- Composición interna de `<dsh-icon>` para el ícono de campana
- El build es self-contained: incluye la dependencia `dsh-icon`
- `custom-elements.js` con `args` y `argTypes` para los controles de Storybook
- `index.html` para desarrollo y demo standalone del componente
- `vite.config.js` para build standalone del componente hacia `dist/`
- `web-test-runner.mjs` y `badge.test.js` con casos de prueba
- Stories completas: `ConCampana`, `ConConteo`, `ConPulso`, `Posiciones`, `Playground`, `ReactUsage`
- `CHANGELOG.md` integrado en la documentación de Storybook
