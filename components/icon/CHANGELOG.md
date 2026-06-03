# Changelog — dsh-icon

## [1.0.0] — 2026-06-02

### Added
- Implementación inicial de `<dsh-icon>` usando Atomico sobre Shadow DOM
- Prop `iconName` para seleccionar el ícono de FontAwesome (default: `fa-bell`)
- Prop `faStyles` para la familia de íconos FontAwesome (`fas`, `far`, `fal`, `fab`, default: `fas`)
- Prop `color` para aplicar tokens de color del Design System (default: `g1`)
- Prop `size` para controlar el tamaño del ícono con escala `s1`–`s7` (default: `s1`)
- Prop `class` para clases CSS adicionales
- Soporte de tokens de tamaño y color del Design System DSH
- `custom-elements.js` con `args` y `argTypes` para los controles de Storybook
- `index.html` para desarrollo y demo standalone del componente
- `vite.config.js` para build standalone del componente hacia `dist/`
- `web-test-runner.mjs` y `icon.test.js` con casos de prueba (props, tamaños, colores)
- Stories completas: `Tamaños`, `Colores`, `Íconos populares`, `Playground`, `ReactUsage`
- `CHANGELOG.md` integrado en la documentación de Storybook
