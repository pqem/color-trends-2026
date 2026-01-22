# 🎨 2026 Color Trends Landing Page

> Landing page profesional showcasing 9 comprehensive color palettes for 2026, built with React, TypeScript, and Tailwind CSS.

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Stack Tecnológico](#stack-tecnológico)
- [Setup del Proyecto](#setup-del-proyecto)
- [Estructura del Código](#estructura-del-código)
- [Convenciones](#convenciones)
- [Testing](#testing)
- [Seguridad](#seguridad)
- [Comandos Útiles](#comandos-útiles)
- [Skills de Claude](#skills-de-claude)
- [MCP Servers](#mcp-servers)
- [Recursos](#recursos)

---

## Descripción

Landing page para mostrar las 9 paletas de colores principales de 2026, basadas en investigación de:
- **Pantone Color Institute** - MOCHA MOUSSE
- **WGSN + Coloro** - TRANSFORMATIVE TEAL
- **Color Marketing Group**

### Propósito

Proporcionar a diseñadores y creadores una referencia visual completa de las tendencias de color 2026, con:
- 9 paletas completas (45 colores total)
- Códigos HEX, RGB, CMYK
- Animaciones suaves
- Copy to clipboard
- 100% responsive

### Características Destacadas

✅ **Diseño Profesional** - Emotional Minimalism (warm, calm, human)
✅ **Accesibilidad WCAG AA** - Contrast ratios verificados
✅ **Mobile-First** - Responsive 320px a 2560px+
✅ **Animaciones** - Framer Motion powered
✅ **TypeScript** - Fully typed
✅ **Modern Stack** - React 19 + Vite 7 + Tailwind 4

---

## Stack Tecnológico

### Frontend

- **Framework**: React 19.2 (latest)
- **Lenguaje**: TypeScript 5.9
- **Build Tool**: Vite 7.2
- **Styling**: Tailwind CSS 4.1 (latest)
- **Animaciones**: Framer Motion 12.23
- **Iconos**: Lucide React 0.562
- **Fuentes**: Inter (Google Fonts)

### DevOps & Tools

- **CI/CD**: Por configurar
- **Hosting**: Por configurar (Vercel recomendado)
- **Monitoreo**: Por configurar (Sentry recomendado)
- **Linting**: ESLint 9.39
- **Formatting**: Prettier (auto en hooks)

### Versiones Requeridas

- Node.js: >= 18.0.0
- npm: >= 9.0.0

---

## Setup del Proyecto

### Instalación

```bash
# 1. Clonar o navegar al proyecto
cd color-trends-landing

# 2. Instalar dependencias
npm install

# 3. Iniciar desarrollo
npm run dev

# 4. Abrir navegador
# http://localhost:5173
```

### Build para Producción

```bash
# Build
npm run build

# Preview build local
npm run preview
```

---

## Estructura del Código

```
color-trends-landing/
├── src/
│   ├── components/           # Componentes React
│   │   ├── Hero.tsx           # Hero section + animated circles
│   │   ├── ColorIntro.tsx     # Pantone + WGSN cards
│   │   ├── PaletteGallery.tsx # 9 palettes showcase
│   │   ├── DownloadCTA.tsx    # Download CTA
│   │   └── Footer.tsx         # Footer con links
│   ├── data/
│   │   └── palettes.ts        # Datos de 9 palettes
│   ├── App.tsx                # Main app
│   ├── index.css              # Global styles + Tailwind
│   └── main.tsx               # Entry point
├── public/                    # Assets estáticos
├── .claude/                   # Claude Code config
│   ├── CLAUDE.md             # Este archivo
│   ├── settings.json          # Permisos y hooks
│   └── skills/                # Skills del proyecto
│       ├── git-commits/       # Conventional Commits
│       └── testing-basics/    # React testing patterns
├── index.html                 # HTML template
├── vite.config.ts             # Vite configuration
├── tailwind.config.js         # Tailwind customization
├── tsconfig.json              # TypeScript config
├── eslint.config.js           # ESLint rules
├── package.json               # Dependencies
└── README.md                  # Documentación principal
```

### Componentes Clave

**Hero.tsx**
- Hero section con título principal
- 3 círculos animados con Framer Motion
- CTA button "Explore Palettes"

**ColorIntro.tsx**
- 2 cards destacadas:
  - Pantone MOCHA MOUSSE
  - WGSN TRANSFORMATIVE TEAL

**PaletteGallery.tsx**
- Grid responsive de 9 paletas
- Cada paleta muestra 5 colores
- Click para copiar HEX code
- Hover effects con Tailwind

**DownloadCTA.tsx**
- Call-to-action para descargar guía completa

**Footer.tsx**
- Créditos y links
- Metadata del proyecto

---

## Convenciones

### Estilo de Código

#### Formato General

- **Indentación**: 2 espacios
- **Línea máxima**: 100 caracteres
- **Comillas**: Single `'`
- **Punto y coma**: Sí
- **Trailing commas**: Sí
- **Formateo automático**: Prettier (hook PostToolUse)

#### Nomenclatura

**Archivos:**
```
PascalCase.tsx              # Componentes React
camelCase.ts                # Utilidades
kebab-case.css              # Estilos
```

**Código:**
```typescript
// Componentes
const Hero = () => { };
const ColorIntro = () => { };

// Funciones
const copyToClipboard = () => { };
const formatHexColor = () => { };

// Variables
const isVisible = true;
const paletteCount = 9;

// Constantes
const MAX_COLORS = 5;
const ANIMATION_DURATION = 0.6;

// Tipos/Interfaces
interface Palette {
  name: string;
  colors: Color[];
}

interface Color {
  name: string;
  hex: string;
  rgb: string;
  cmyk: string;
}
```

### Imports

```typescript
// 1. React
import React from 'react';
import { useState, useEffect } from 'react';

// 2. Librerías externas
import { motion } from 'framer-motion';
import { Copy, Download } from 'lucide-react';

// 3. Data
import { palettes } from './data/palettes';

// 4. Components
import { Hero } from './components/Hero';
import { ColorIntro } from './components/ColorIntro';

// 5. Types
import type { Palette, Color } from './types';
```

### Git Workflow

#### Branches

```
main                    # Producción
develop                 # Desarrollo
feature/nombre          # Nueva funcionalidad
fix/nombre              # Bug fix
chore/nombre            # Mantenimiento
```

#### Commits (Conventional Commits)

Usa el skill `git-commits` para generar mensajes automáticamente.

**Formato:**
```
<tipo>(<scope>): <descripción>

<cuerpo opcional>
```

**Tipos comunes en este proyecto:**
- `feat(ui)`: Nueva funcionalidad UI
- `fix(ui)`: Bug fix en componentes
- `style(ui)`: Cambios de estilo/formato
- `refactor(ui)`: Refactoring de componentes
- `perf(ui)`: Mejoras de performance
- `docs`: Documentación
- `chore(build)`: Build/dependencias

**Ejemplos:**
```bash
feat(ui): agregar animación fade-in a Hero

fix(ui): corregir responsive en mobile < 375px

style(ui): aplicar prettier a todos los componentes

refactor(ui): extraer lógica de copy to clipboard

perf(ui): optimizar renderizado con lazy loading

docs(readme): actualizar instrucciones de instalación
```

---

## Testing

### Framework

Por configurar. Recomendado:
- **Vitest** - Compatible con Vite
- **React Testing Library** - Component testing
- **Playwright** - E2E testing

### Instalación Recomendada

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

Consulta el skill `testing-basics` para guías completas.

### Cobertura Objetivo

- **Líneas**: >= 80%
- **Branches**: >= 75%
- **Funciones**: >= 90%

### Áreas Prioritarias para Tests

1. **Hero Component**
   - Renderizado de título
   - Animaciones de círculos
   - CTA button

2. **PaletteGallery Component**
   - Renderizado de 9 palettes
   - Copy to clipboard functionality
   - Responsive grid

3. **ColorIntro Component**
   - Renderizado de Pantone card
   - Renderizado de WGSN card

4. **Utils**
   - copyToClipboard function
   - Color format conversions (si aplica)

---

## Seguridad

### Checklist de Seguridad

- [x] **No secrets en código** - No hay .env por ahora
- [x] **HTTPS** - Vite dev server usa HTTPS cuando se configura
- [x] **Dependencies** - Actualizadas a últimas versiones
- [ ] **Auditoría regular** - `npm audit` periódicamente
- [ ] **CSP Headers** - Configurar en producción

### Validación de Input

Por ahora no hay formularios. Si se agregan:
- Validar todo input de usuario
- Sanitizar output
- Prevenir XSS

### Auditoría de Dependencias

```bash
# Revisar vulnerabilidades
npm audit

# Fix automático
npm audit fix

# Update dependencies
npm update
```

---

## Comandos Útiles

### Desarrollo

```bash
# Iniciar dev server (http://localhost:5173)
npm run dev

# Build para producción
npm run build

# Preview build local
npm run preview
```

### Linting y Formato

```bash
# Lint
npm run lint

# Prettier (manual, normalmente hook automático)
npx prettier --write "src/**/*.{ts,tsx}"

# Type checking
npx tsc --noEmit
```

### Testing (cuando se configure)

```bash
# Run tests
npm run test

# Watch mode
npm run test:watch

# Coverage
npm run test:coverage
```

---

## Skills de Claude

Skills disponibles en este proyecto:

### Skills Globales (Personal)

- **clean-code-practices** - Revisión de calidad de código
- **security-review** - Auditoría de seguridad
- **project-init** - Inicialización inteligente de proyectos

### Skills de Proyecto (en .claude/skills/)

- **git-commits** - Conventional Commits automáticos
- **testing-basics** - Patterns de testing para React

### Skills Oficiales (Plugins)

- **frontend-design** - UI/UX profesional ✅ Instalado
- **context7** - Búsqueda en documentación de librerías
- **github** - Integración con GitHub (requiere configuración)
- **typescript-lsp** - Inteligencia de código TypeScript

### Cómo Usar Skills

```bash
# Listar skills disponibles
/agents

# Skill de commits
> Genera un mensaje de commit para estos cambios

# Skill de testing
> Crea tests para el componente Hero

# Skill de código limpio
> Revisa este componente y sugiere mejoras
```

---

## MCP Servers

MCP servers por configurar:

### Recomendados para Este Proyecto

**GitHub** (Alta prioridad)
- Gestión de código, PRs, issues
- Requiere: Personal Access Token
- Instalación: Ver instrucciones en documentación padre

**Sentry** (Media prioridad)
- Monitoreo de errores en producción
- Configurar cuando se haga deploy

**Figma** (Baja prioridad)
- Si necesitas colaborar con diseñadores
- Obtener specs de diseño

### Cómo Configurar MCP

```bash
# GitHub (cuando tengas token)
claude mcp add --transport http github https://api.githubcopilot.com/mcp/ \
  --header "Authorization: Bearer TU_TOKEN"

# Verificar configuración
claude mcp list
```

---

## Recursos

### Documentación del Proyecto

Este proyecto fue construido siguiendo documentación en directorio padre:

- `../color-trends-2026-project/docs/01-PROJECT-BRIEF.md`
- `../color-trends-2026-project/docs/02-DESIGN-SYSTEM.md`
- `../color-trends-2026-project/docs/03-COLOR-PALETTES.md`
- `../color-trends-2026-project/design/color-system.json`

### Paletas de Colores

**9 Palettes Completas:**

1. **Quiet Modern Minimal** - Essential warmth without corporate coldness
2. **Synthesized Wellness** - Nature + Technology + Mental wellbeing
3. **Earth & Heritage** - Sustainability and artisanal authenticity
4. **Vivid Contrast** - High energy for social media
5. **Metallic Warmth** - Warm luxury and accessible sophistication
6. **Cyber-Organic** - Biological futurism and bio-digital fusion
7. **Radical Optimism** - 70s retro-future energy and vitality
8. **Nocturnal Dream** - Elevated dark mode experience
9. **Mineral Comfort** - New generation neutrals

### Colores Principales

```css
/* Primary Colors */
--cloud-dancer: #F4F4F2;        /* Background */
--transformative-teal: #316064;  /* CTAs, accents */
--deep-black: #0D0D0D;          /* Headlines */
--baltic-sea: #455A64;          /* Body text */
```

### Design Philosophy

**Emotional Minimalism:**
- Warm, human, inviting (not cold)
- Calm without boredom
- Professional without coldness

**60-30-10 Rule:**
- 60% Cloud Dancer (background)
- 30% Deep Black/Baltic Sea (text)
- 10% Transformative Teal (accents)

**White Space:**
- 40-50% breathing room
- Generous spacing
- Max 3 colors per section

### Enlaces Útiles

- **React Docs**: https://react.dev/
- **Vite Docs**: https://vite.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **Framer Motion**: https://www.framer.com/motion/
- **Pantone Color Institute**: https://www.pantone.com/color-institute
- **WGSN**: https://www.wgsn.com/
- **Color Marketing Group**: https://colormarketing.org/

---

## Notas Adicionales

### Para Nuevos Desarrolladores

1. Lee este archivo completo
2. Ejecuta setup del proyecto (`npm install` + `npm run dev`)
3. Explora componentes en `src/components/`
4. Revisa datos de paletas en `src/data/palettes.ts`
5. Experimenta con colores y animaciones

### Para Claude Code

Este proyecto está configurado para trabajar con Claude Code:

- **Memoria**: `.claude/CLAUDE.md` (este archivo)
- **Skills**: `.claude/skills/` (git-commits, testing-basics)
- **Configuración**: `.claude/settings.json`
- **Hooks**: Prettier auto-format en PostToolUse

Al hacer preguntas a Claude sobre este proyecto, automáticamente cargará este contexto.

### Next Steps Sugeridos

1. [ ] Configurar testing (Vitest + React Testing Library)
2. [ ] Agregar tests para componentes principales
3. [ ] Configurar GitHub MCP cuando tengas token
4. [ ] Setup CI/CD (GitHub Actions)
5. [ ] Deploy a Vercel/Netlify
6. [ ] Configurar Sentry para monitoreo
7. [ ] Agregar animaciones adicionales
8. [ ] Optimizar performance (lazy loading)
9. [ ] SEO optimization
10. [ ] Analytics (opcional)

---

## Summary Instructions

When you are using compact (auto-compaction or `/compact` command):
- Focus on code changes and test results
- Preserve component structure and architecture decisions
- Keep color palette data and design system information
- Maintain skill references (git-commits, testing-basics)

---

**Última actualización**: December 28, 2025
**Versión**: 1.1.0
**Built with**: React 19 + Vite 7 + Tailwind 4 + Claude Code

**Built with clarity. Designed with purpose. Documented with care.** 🎨✨

## Session Update

**Date:** 2026-01-22
**Goal:** Integrar agent-automatizado en color-trends-2026
**Completed:** Ejecutados init, add-skill typescript, skill-sync, sync y mcp setup (preset web-dev); AGENTS.md actualizado con descripcion, stack y lineamientos; skill testing ajustada a React/Vite
**Status:** AGENTS.md actualizado y sincronizado; skills y configs IDE/MCP generadas
**Next:** Revisar si hace falta ajustar scopes o agregar skills extra
**Decisions:** Usar preset MCP web-dev para tooling frontend

## Session Update

**Date:** 2026-01-22
**Goal:** Cerrar acceso publico y dejar configuracion local segura
**Completed:** Servidor Vite atado a localhost, escaneo rapido sin secretos reales, agregado ignore para mcp.local, y task local de VS Code
**Status:** Repo listo con entorno local seguro; mcp.local.json preparado (no versionado)
**Next:** Configurar token en mcp.local.json en la otra PC si hace falta MCP GitHub
**Decisions:** Mantener servidores solo en 127.0.0.1 para evitar exposicion
