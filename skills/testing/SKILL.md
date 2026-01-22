---
name: testing
description: Testing para React + Vite usando Vitest y React Testing Library. Usa cuando agregues tests de componentes o utilidades.
scope: root
metadata.auto_invoke: ["tests", "testing", "vitest", "react testing", "rtl", "playwright"]
allowed_tools: [read, write, bash]
---

# Testing (React + Vite)

## Tooling
- Vitest para unit e integration
- React Testing Library + @testing-library/jest-dom
- @testing-library/user-event para interacciones
- Playwright para e2e cuando aplique

## Estructura recomendada

```
src/
├── components/
│   └── __tests__/Hero.test.tsx
├── data/
│   └── __tests__/palettes.test.ts
└── utils/
    └── __tests__/colors.test.ts

tests/
└── e2e/ (playwright)
```

## Vitest basico

```ts
import { describe, it, expect, vi } from 'vitest';

describe('add', () => {
  it('adds numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});
```

## React Testing Library

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Hero', () => {
  it('renders title', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { name: /color trends/i })).toBeInTheDocument();
  });

  it('handles CTA click', async () => {
    render(<Hero />);
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /explore palettes/i }));
  });
});
```

## Clipboard mock (copy-to-clipboard)

```ts
import { vi } from 'vitest';

Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn(),
  },
});

expect(navigator.clipboard.writeText).toHaveBeenCalledWith('#F4F4F2');
```

## Setup recomendado

`vite.config.ts`:

```ts
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});
```

`src/setupTests.ts`:

```ts
import '@testing-library/jest-dom';
```

## Patrones

### AAA (Arrange, Act, Assert)

```ts
it('updates user', () => {
  const user = { name: 'Test' };
  const result = updateUser(user, { name: 'Updated' });
  expect(result.name).toBe('Updated');
});
```

## Reglas

1. Un test = un comportamiento
2. Tests independientes
3. Nombres descriptivos: "should X when Y"
4. Mockear dependencias externas
5. Preferir asserts de usuario (roles, texto)
6. Priorizar casos criticos sobre coverage
