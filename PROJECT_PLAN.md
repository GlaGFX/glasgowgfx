# TypeScript Error Resolution Plan

## Issues Identified
1. Metadata import errors in portfolio pages
2. Potential module resolution issues with next/link and next/image
3. tsconfig.json configuration needs updates

## Solution Steps

### 1. Update Metadata Imports
```typescript
// Change from:
import { Metadata } from 'next';

// To:
import type { Metadata, ResolvingMetadata } from 'next/types';
```

Files to update:
- app/portfolio/page.tsx
- app/layout.tsx
- Any other pages using Metadata

### 2. Update tsconfig.json
```json
{
  "compilerOptions": {
    "moduleResolution": "node", // Change from "node16"
    "strict": true,
    "strictNullChecks": true,
    "paths": {
      "@/*": ["./*"] // Keep existing path configuration
    }
  }
}
```

### 3. Install Type Definitions
```bash
npm install --save-dev @types/next
```

### 4. Verify Next.js Imports
- Ensure all next/link and next/image imports are properly used
- Check for any deprecated usage patterns

### 5. Run Type Checking
```bash
npm run type-check