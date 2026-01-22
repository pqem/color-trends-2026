# color-trends-landing

Landing page profesional para mostrar 9 paletas de color 2026 con codigos HEX/RGB/CMYK,
copy-to-clipboard y animaciones suaves.

<!-- SKILL-SYNC:START -->
## Skills Reference
- [commits](skills/commits/SKILL.md) - Formato de commits convencionales. Usa cuando hagas commits o prepares cambios para commit. (tools: bash) (scope: root)
- [docs](skills/docs/SKILL.md) - Crear y mantener documentación. Usa cuando escribas README, docs, o comentarios. (tools: read, write) (scope: root)
- [pr](skills/pr/SKILL.md) - Crear Pull Requests con formato consistente. Usa cuando prepares un PR. (tools: bash, read) (scope: root)
- [react](skills/react/SKILL.md) - Desarrollo con React. Usa cuando crees componentes, hooks, o trabajes con estado/efectos. (tools: read, write) (scope: ui)
- [tailwind](skills/tailwind/SKILL.md) - Estilos con Tailwind CSS. Usa cuando escribas clases de Tailwind o crees componentes con estilos. (tools: read, write) (scope: ui)
- [testing](skills/testing/SKILL.md) - Testing para React + Vite usando Vitest y React Testing Library. Usa cuando agregues tests de componentes o utilidades. (tools: read, write, bash) (scope: root)
- [typescript](skills/typescript/SKILL.md) - Desarrollo con TypeScript. Usa cuando definas tipos, interfaces, o necesites tipado estricto. (tools: read, write) (scope: root)

## Auto-invoke Skills
- `commits`: commits, git commit, mensaje de commit
- `docs`: documentación, README, docs
- `pr`: pull request, PR, gh pr create
- `react`: React, componentes, hooks
- `tailwind`: tailwind, clases, estilos
- `testing`: tests, testing, vitest, react testing, rtl, playwright
- `typescript`: TypeScript, tipos, interfaces
<!-- SKILL-SYNC:END -->

## Estructura del Proyecto
- `src/components/`: secciones de la landing (Hero, ColorIntro, PaletteGallery, DownloadCTA, Footer)
- `src/data/palettes.ts`: datos de las 9 paletas
- `src/App.tsx`: composicion principal
- `src/index.css`: estilos globales y Tailwind

## Stack Tecnologico
- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Lineamientos de Diseno
- Emotional Minimalism: calido, humano, sin frialdad corporativa
- Regla 60/30/10 para uso de color
- Accesibilidad WCAG AA en contrastes

## Lineamientos de Calidad
- Accesibilidad: contraste minimo 4.5:1 para texto, focus visible, semantica HTML
- SEO: titles y meta description claros, headings jerarquicos, alt text en imagenes
- Performance: imagenes optimizadas, evitar re-render innecesario, lazy load si aplica

## Convenciones

### Commits
Formato: `tipo(scope): descripción`
- `feat`: nueva funcionalidad
- `fix`: corrección de bug
- `docs`: documentación
- `refactor`: refactorización

### Archivos
- Nombres en kebab-case para archivos
- PascalCase para componentes

## Skills Disponibles

- `commits`
- `pr`
- `docs`
- `react`
- `tailwind`
- `typescript`
- `testing`

### Auto-invocación de Skills
Cuando trabajes en este proyecto:
- **Commits**: Usa la skill `commits` para formatear mensajes
- **Pull Requests**: Usa la skill `pr` para crear PRs consistentes
- **Documentación**: Usa la skill `docs` para mantener docs actualizados

## Contexto para el Agente

Nivel del usuario: 🌿 Intermedio

El usuario conoce lo básico. Puedes ser más directo pero explica decisiones arquitectónicas.
