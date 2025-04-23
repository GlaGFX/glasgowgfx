# API and Data Handling Standards - Glasgow GFX

This document outlines the standardized patterns for handling API interactions (mutations) and data fetching (reads) within the Glasgow GFX Next.js project.

## 1. Mutations (Create/Update/Delete Operations)

-   **Mechanism:** Use **Next.js Server Actions**. Define actions in relevant files within the `lib/` directory (e.g., `lib/actions/contact.ts`, `lib/actions/user.ts`).
-   **Validation:** Implement server-side input validation using **Zod**. Define schemas clearly alongside the actions or in a shared types/schemas location.
-   **Return State:** Server Actions **must** return a consistent, typed state object. This object should clearly indicate:
    -   `success`: boolean (true/false)
    -   `message`: string | null (User-friendly feedback message)
    -   `errors`: Optional object containing validation errors keyed by field name (e.g., `{ name?: string[], email?: string[] }`).
    -   Example:
        ```typescript
        export type ActionResultState = {
          success: boolean;
          message: string | null;
          errors?: { [key: string]: string[] | undefined };
          // Optionally include returned data on success
          data?: any;
        };
        ```
-   **Security:** Store all sensitive credentials (API keys, database passwords, email service credentials) securely in environment variables (`.env.local`, `.env.production`) and access them via `process.env`. **Never** commit sensitive keys to the repository.
-   **Error Handling:** Use `try...catch` blocks within Server Actions to handle unexpected errors. Log detailed errors server-side (using `console.error` or a dedicated logging service) and return a generic, user-friendly error message in the state object.

## 2. Data Fetching (Read Operations)

-   **Static Data:**
    -   **Source:** For data that rarely changes (e.g., feature lists, testimonials, team members, basic service descriptions), store it in TypeScript files (e.g., `.ts`) within the `data/` directory. Export typed arrays or objects.
    -   **Usage:** Import this data directly into components (Server or Client Components).
    -   **Example:** `import { featuresData } from ''data/features';`' (see below for file content)

-   **Dynamic Data (from CMS, Database, External APIs):**
    -   **Primary Method (Server Components):** Fetch data directly within **async Server Components**. This is the preferred method as it leverages Next.js server-side rendering, caching, and performance benefits.
        ```typescript
        // Example in app/some-page/page.tsx
        async function getData() {
          const res = await fetch('https://api.example.com/...', { next: { revalidate: 3600 } }); // Example revalidation
          if (!res.ok) {
            throw new Error('Failed to fetch data');
          }
          return res.json();
        }

        export default async function Page() {
          const data = await getData();
          // Render data...
        }
        ```
    -   **Client-Side Fetching (Client Components):** Use only when necessary (e.g., data depends on user interaction, real-time updates, complex client-side filtering/sorting).
        -   **Recommended Libraries:** Use **SWR** or **React Query** for managing client-side data fetching, caching, and state.
        -   **Data Source:** These libraries can fetch data from:
            -   **API Route Handlers (`app/api/`)**: Preferred for dedicated data endpoints.
            -   **Server Actions**: Can be used if the action is designed specifically for data retrieval, though primarily intended for mutations.
        -   **Example (SWR with API Route):**
            ```typescript
            // In a Client Component ('use client')
            import useSWR from 'swr';

            const fetcher = (url: string) => fetch(url).then((res) => res.json());

            function MyComponent() {
              const { data, error, isLoading } = useSWR('/api/my-data', fetcher);
              // Handle loading, error, and render data...
            }
            ```

-   **API Route Handlers (`app/api/`):**
    -   **Purpose:** Reserve for specific, well-defined use cases:
        -   Handling webhook requests from third-party services.
        -   Serving data to external clients or applications (if the project acts as an API provider).
        -   Providing dedicated endpoints for client-side fetching libraries (SWR/React Query).
        -   Server-to-server communication that shouldn't be exposed via Server Actions.

## 3. State Management (Client-Side)

-   **Local State:** Use React's built-in hooks (`useState`, `useReducer`) for state confined to a single component or its immediate children.
-   **Shared/Global State:**
    -   **Context API:** Suitable for passing data down the component tree without prop drilling, especially for relatively static data or simple state updates.
    -   **Dedicated Libraries (Zustand/Redux Toolkit):** Consider for more complex global state scenarios involving frequent updates, asynchronous logic, or state shared across many unrelated components. Evaluate based on project needs (refer to `lib/store.ts` if already set up). Document the chosen library and its usage patterns clearly.

## 4. Error Handling

-   **Server Actions:** Implement `try...catch`. Log detailed errors server-side. Return user-friendly messages via the standard action state object.
-   **Server Components (Data Fetching):** Use `try...catch` around fetch calls. Utilize Next.js error boundaries (`error.tsx` files) to handle rendering errors gracefully.
-   **Client Components (Data Fetching):** Leverage the error handling capabilities of SWR/React Query. For manual fetches, use `try...catch` and update component state to display appropriate error messages or UI feedback to the user.

## 5. Typing

-   **TypeScript:** Use TypeScript consistently throughout the codebase.
-   **Shared Types:** Define shared interfaces and types in `types.d.ts` or dedicated type definition files (e.g., `lib/types/index.ts`).
-   **Zod Schemas:** Use Zod schemas not only for validation but also to infer TypeScript types (`z.infer<typeof MySchema>`) for data consistency.