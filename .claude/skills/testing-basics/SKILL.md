---
name: testing-basics
description: Patterns y mejores prácticas de testing para React. Incluye unit tests, component tests, mocking, cobertura. Úsalo cuando escribas tests, menciones testing, o cuando necesites mejorar cobertura de tests.
---

# Testing Basics - React Testing

Guía de testing para React siguiendo estándares de la industria.

## Frameworks Recomendados

- **Vitest** - Compatible con Vite (tu build tool)
- **React Testing Library** - Testing de componentes
- **Playwright** - E2E testing

## Instalación

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

**vite.config.ts:**
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})
```

**src/test/setup.ts:**
```typescript
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)
afterEach(() => {
  cleanup()
})
```

## Principios Fundamentales

### 1. AAA Pattern (Arrange-Act-Assert)

```typescript
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

test('should display hero title', () => {
  // Arrange - Preparar datos
  const expectedTitle = '2026 Color Trends'

  // Act - Renderizar componente
  render(<Hero />)

  // Assert - Verificar resultado
  expect(screen.getByText(expectedTitle)).toBeInTheDocument()
})
```

### 2. Tests de Componentes

**Test básico:**
```typescript
import { render, screen } from '@testing-library/react'
import { ColorIntro } from './ColorIntro'

describe('ColorIntro', () => {
  test('should render Pantone card', () => {
    render(<ColorIntro />)

    expect(screen.getByText('Pantone')).toBeInTheDocument()
    expect(screen.getByText('MOCHA MOUSSE')).toBeInTheDocument()
  })

  test('should render WGSN card', () => {
    render(<ColorIntro />)

    expect(screen.getByText('WGSN')).toBeInTheDocument()
    expect(screen.getByText('TRANSFORMATIVE TEAL')).toBeInTheDocument()
  })
})
```

**Test con interacción:**
```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PaletteCard } from './PaletteCard'

describe('PaletteCard', () => {
  test('should copy HEX to clipboard on click', async () => {
    const user = userEvent.setup()

    render(<PaletteCard color="#F4F4F2" name="Cloud Dancer" />)

    const colorButton = screen.getByRole('button', { name: /cloud dancer/i })
    await user.click(colorButton)

    // Verificar que se copió al clipboard
    const clipboardText = await navigator.clipboard.readText()
    expect(clipboardText).toBe('#F4F4F2')
  })
})
```

### 3. Mocking

**Mock de Framer Motion:**
```typescript
// src/test/__mocks__/framer-motion.ts
export const motion = {
  div: 'div',
  section: 'section',
  button: 'button',
}

export const AnimatePresence = ({ children }: any) => children
```

**Mock de navigator.clipboard:**
```typescript
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn(() => Promise.resolve()),
    readText: vi.fn(() => Promise.resolve('#F4F4F2')),
  },
})
```

### 4. Tests de Accesibilidad

```typescript
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { Hero } from './Hero'

expect.extend(toHaveNoViolations)

test('should have no accessibility violations', async () => {
  const { container } = render(<Hero />)
  const results = await axe(container)

  expect(results).toHaveNoViolations()
})
```

## Estructura de Tests

```
src/
├── components/
│   ├── Hero.tsx
│   ├── Hero.test.tsx           # Test del componente
│   ├── ColorIntro.tsx
│   └── ColorIntro.test.tsx
├── utils/
│   ├── copyToClipboard.ts
│   └── copyToClipboard.test.ts # Test de utilidad
└── test/
    ├── setup.ts                # Setup global
    └── __mocks__/              # Mocks compartidos
        └── framer-motion.ts
```

## Cobertura Mínima

- **Líneas**: >= 80%
- **Branches**: >= 75%
- **Funciones**: >= 90%

**Ejecutar con cobertura:**
```bash
npm run test -- --coverage
```

**package.json:**
```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

## Ejemplos para tu Proyecto

### Test: Hero Component

```typescript
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  test('should render main heading', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { name: /2026 color trends/i })
    ).toBeInTheDocument()
  })

  test('should display animated circles', () => {
    render(<Hero />)

    const circles = screen.getAllByTestId('animated-circle')
    expect(circles).toHaveLength(3)
  })

  test('should render CTA button', () => {
    render(<Hero />)

    const ctaButton = screen.getByRole('button', { name: /explore palettes/i })
    expect(ctaButton).toBeInTheDocument()
  })
})
```

### Test: PaletteGallery Component

```typescript
import { render, screen } from '@testing-library/react'
import { PaletteGallery } from './PaletteGallery'
import { palettes } from '../data/palettes'

describe('PaletteGallery', () => {
  test('should render all 9 palettes', () => {
    render(<PaletteGallery />)

    palettes.forEach((palette) => {
      expect(screen.getByText(palette.name)).toBeInTheDocument()
    })
  })

  test('should display 5 colors per palette', () => {
    render(<PaletteGallery />)

    const colorCards = screen.getAllByTestId('color-card')
    expect(colorCards).toHaveLength(45) // 9 palettes × 5 colors
  })

  test('should show color codes on hover', async () => {
    const user = userEvent.setup()
    render(<PaletteGallery />)

    const firstColor = screen.getAllByTestId('color-card')[0]
    await user.hover(firstColor)

    expect(screen.getByText(/#[0-9A-F]{6}/i)).toBeVisible()
  })
})
```

### Test: copyToClipboard Utility

```typescript
import { copyToClipboard } from './copyToClipboard'

describe('copyToClipboard', () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn(() => Promise.resolve()),
      },
    })
  })

  test('should copy text to clipboard', async () => {
    await copyToClipboard('#F4F4F2')

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('#F4F4F2')
  })

  test('should handle copy failure', async () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn(() => Promise.reject(new Error('Failed'))),
      },
    })

    await expect(copyToClipboard('#F4F4F2')).rejects.toThrow('Failed')
  })
})
```

## Mejores Prácticas

1. **Usa data-testid solo cuando necesario**
   - Prefiere queries por role, label, text
   - data-testid es último recurso

2. **No testees detalles de implementación**
   ```typescript
   // ❌ Malo - Testing state interno
   expect(component.state.isOpen).toBe(true)

   // ✅ Bueno - Testing comportamiento observable
   expect(screen.getByRole('dialog')).toBeVisible()
   ```

3. **Tests deben ser independientes**
   ```typescript
   // ❌ Malo - Tests dependientes
   let user;
   test('create user', () => {
     user = createUser()
   })
   test('update user', () => {
     user.name = 'New' // Depende del anterior
   })

   // ✅ Bueno - Tests independientes
   test('create user', () => {
     const user = createUser()
     expect(user).toBeDefined()
   })
   test('update user', () => {
     const user = createUser() // Crea su propio user
     user.name = 'New'
     expect(user.name).toBe('New')
   })
   ```

4. **Nombra tests descriptivamente**
   ```typescript
   // ❌ Malo
   test('test1', () => { ... })

   // ✅ Bueno
   test('should display error message when email is invalid', () => { ... })
   ```

## Comandos Útiles

```bash
# Ejecutar tests
npm run test

# Watch mode
npm run test -- --watch

# UI mode (visual)
npm run test:ui

# Cobertura
npm run test:coverage

# Test específico
npm run test Hero.test.tsx
```

## Referencias

- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
