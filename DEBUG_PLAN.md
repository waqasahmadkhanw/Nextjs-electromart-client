# Debug Plan - Electromart Build Fixes

## Current Status: 96 TypeScript errors across 55 files

### Priority 1 - Easy/Quick Fixes (adds missing exports, fixes env var names, installs deps)

| # | File(s) | Issue | Fix |
|---|---------|-------|-----|
| 1 | `shared/lib/cn.ts` | Missing `tailwind-merge` package | ⏳ Installing |
| 2 | `shared/api/headers.ts` | Wrong axios type `AxiosRequestHeaders` → should be `Record<string, string>` | ✅ Fixed |
| 3 | `shared/api/axios.ts`, `shared/api/refreshToken.ts` | `env.API_BASE_URL` doesn't exist, should be `env.API_URL` | 🔜 |
| 4 | `modules/auth/api/auth.api.ts` | `RegisterRequest` not imported (imported from `auth.types.ts` where it exists) | 🔜 |
| 5 | `modules/auth/types/index.ts` | Barrel re-export conflicts (e.g. `AuthProvider`, `AuthStatus`, `UserRole`, `AuthSession`, `AuthUser` exported from multiple files) | 🔜 |
| 6 | `modules/auth/utils/index.ts` | `UserRole` already exported from `auth.redirect` | 🔜 |
| 7 | `modules/auth/hooks/usePrevious.ts` | `useRef<T>()` needs initial value in React 19 | 🔜 |

### Priority 2 - Type module resolution issues

| # | File(s) | Issue | Fix |
|---|---------|-------|-----|
| 8 | `modules/auth/hooks/use*.ts` (8 files) | Import wrong type names (e.g. `LoginRequest` vs `LoginRequestDto`) | Fix imports to use correct Dto names |
| 9 | `modules/auth/mutations/use*Mutation.ts` (14 files) | Type mismatch between API type and response type | Fix type imports |
| 10 | `modules/auth/pages/*Page.tsx` (5 files) | Missing `onSubmit` prop on form components | Add required props |
| 11 | `modules/auth/utils/auth.mapper.ts` | Missing `expiresIn`, `firstName`, `lastName` etc. in type | Fix mapper implementation |

### Priority 3 - Module not found / missing barrels

| # | File(s) | Issue | Fix |
|---|---------|-------|-----|
| 12 | `modules/auth` barrel | `@/modules/auth` module not found (5 app pages) | Create/update module barrel |
| 13 | `modules/public/api` | Missing `ContactRequest`, `NewsletterRequest` exports | Add missing exports |
| 14 | `modules/public/services` | Wrong method names (`getHomeData` vs `getHome`, `submit` vs `sendMessage`) | Fix method calls |
| 15 | `shared/components/data-display` | Not a module (Table, StatCard, etc.) | Create index files |
| 16 | `shared/components/index.ts` | `./form` module not found, `Modal` duplicate export | Fix barrel exports |
| 17 | `shared/components/form/FormField` | ReactNode not assignable to ReactElement | Fix render prop type |

### Priority 4 - Other issues

| # | File(s) | Issue | Fix |
|---|---------|-------|-----|
| 18 | `modules/auth/utils/auth.cookie.ts` | `forEach(deleteCookie)` type mismatch | Fix callback signature |
| 19 | `modules/auth/validation/register.schema.ts` | `z.literal(true, { errorMap: ... })` wrong API | Fix Zod schema |
| 20 | `modules/public/components/footer/FooterMiddle.tsx` | Missing `title` and `links` props on `FooterLinks` | Add required props |

## Suggested Approach

**Batch 1** (install deps + 6 quick fixes): Fix items 1-7
**Batch 2** (type fixes): Fix items 8-11  
**Batch 3** (barrel/module resolution): Fix items 12-17
**Batch 4** (remaining): Fix items 18-20

