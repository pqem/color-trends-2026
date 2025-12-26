---
name: git-commits
description: Genera mensajes de commit descriptivos siguiendo Conventional Commits. Analiza cambios y sugiere mensajes claros. Úsalo cuando escribas commits, analices cambios con git status/diff, o cuando menciones "commit".
---

# Git Commits - Conventional Commits

Este skill ayuda a escribir commits siguiendo el estándar de la industria: Conventional Commits.

## Formato Estándar

```
<tipo>(<scope>): <descripción>

<cuerpo opcional>

<footer opcional>
```

### Tipos Permitidos

- **feat**: Nueva funcionalidad
- **fix**: Bug fix
- **docs**: Cambios en documentación
- **style**: Cambios de formato (espacios, comas, etc)
- **refactor**: Refactoring de código (ni feat ni fix)
- **perf**: Mejoras de performance
- **test**: Agregar o modificar tests
- **chore**: Cambios en build, dependencias, etc

### Scope para este Proyecto

- `ui` - Componentes de interfaz (Hero, ColorIntro, PaletteGallery, etc)
- `data` - Datos de paletas
- `styles` - Tailwind/CSS
- `animation` - Framer Motion
- `build` - Vite configuration
- `docs` - Documentación

## Proceso

### 1. Analizar Cambios

```bash
git status
git diff --staged
```

### 2. Identificar Tipo y Scope

- ¿Es feature nueva? → `feat`
- ¿Es bug fix? → `fix`
- ¿Es solo docs? → `docs`

### 3. Generar Mensaje

**Descripción:**
- Máximo 72 caracteres
- Imperativo ("add" no "added")
- Sin punto final
- Minúsculas después de los dos puntos

**Ejemplos para este proyecto:**

```
feat(ui): agregar animación de entrada a Hero

Implementar fade-in con Framer Motion en Hero section.
Duración 0.6s con easing ease-out.
```

```
fix(ui): corregir responsive en PaletteGallery

Los cards se desbordaban en mobile < 375px.
Ajustar grid columns a 1 en breakpoint xs.
```

```
docs(readme): actualizar instrucciones de desarrollo

Agregar sección sobre variables de entorno y npm scripts.
```

```
style(ui): aplicar prettier a todos los componentes

Formato consistente en Hero, ColorIntro y Footer.
```

```
perf(ui): optimizar renderizado de paletas

Implementar lazy loading de imágenes de paletas.
Reduce First Contentful Paint en 0.3s.
```

## Reglas

1. **Primera línea < 72 caracteres**
2. **Línea en blanco entre header y body**
3. **Body explica el "por qué", no el "qué"**
4. **Footer para issue references (Closes #123)**
5. **Breaking changes con "BREAKING CHANGE:" en footer**

## Anti-Patrones (❌ Evitar)

```
❌ "updated files"
❌ "fixes"
❌ "WIP"
❌ "changes"
❌ "asdf"
❌ "final version"
❌ "this should work now"
```

## Flujo de Trabajo

1. Hacer cambios en el código
2. Revisar cambios: `git diff`
3. Preguntar a Claude: "Genera mensaje de commit para estos cambios"
4. Claude analiza y genera mensaje siguiendo Conventional Commits
5. Commit: `git commit -m "mensaje generado"`

## Changelog Automático

Con Conventional Commits, puedes generar changelogs automáticamente:

```bash
# Usando standard-version
npx standard-version

# Usando commitizen
npx commitizen
```

## Referencias

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Angular Commit Guidelines](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)
