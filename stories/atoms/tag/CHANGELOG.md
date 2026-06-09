# Changelog — dsh-tag

## [1.0.0] — 2026-06-02

### Added
- Implementación inicial de `<dsh-tag>` usando Atomico sobre Shadow DOM
- Prop `variant` para variantes de tipo: `general`, `informative`, `news`, `menu`, `interactive` (default: `informative`)
- Prop `subvariant` para las subvariantes de estado: `success`, `error`, `warning`, `informative` (default: `success`)
- Prop `label` para el texto visible del tag
- Prop `showIcon` para mostrar u ocultar el ícono de estado (boolean)
- Prop `color` para aplicar tokens de color del Design System
- Prop `state` para estados adicionales del tag
- Soporte de íconos internos según subvariante (check, warning, error, info)
- `custom-elements.js` con `args` y `argTypes` para los controles de Storybook
- `index.html` para desarrollo y demo standalone del componente
- `vite.config.js` para build standalone del componente hacia `dist/`
- `web-test-runner.mjs` y `tag.test.js` con casos de prueba
- Stories completas: `Informative`, `General`, `Interactive`, `News`, `Menu`, `Playground`, `ReactUsage`
- `CHANGELOG.md` integrado en la documentación de Storybook
