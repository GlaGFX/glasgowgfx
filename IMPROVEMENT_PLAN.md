# Codebase Improvement Plan

This document outlines the plan for improving and tidying up the Glasgow GFX website codebase.

## Phase 1: Code Structure & Refactoring (`app/page.tsx`)

1.  **Component Extraction:** Break down the large `app/page.tsx` component into smaller, focused components for each major section.
    *   Create new files like:
        *   `components/sections/HeroSection.tsx`
        *   `components/sections/FeaturesSection.tsx`
        *   `components/sections/ProjectsSection.tsx`
        *   `components/sections/TestimonialsSection.tsx`
        *   `components/sections/ContactSection.tsx`
    *   Import and use these new components within `app/page.tsx`.
2.  **Data Externalization:** Move hardcoded content from the newly created section components into dedicated data files.
    *   Create `data/features.ts` for the features section content.
    *   Create `data/testimonials.ts` for the client testimonial content.
    *   Import data into the respective components (`FeaturesSection.tsx`, `TestimonialsSection.tsx`).
3.  **Smooth Scroll Refactor:** Revisit the smooth scrolling logic in `app/page.tsx`.
    *   Option A: Utilize CSS `scroll-behavior: smooth;` applied to the `<html>` element (in `globals.css`).
    *   Option B: Refine the existing JavaScript using React `useRef` hooks.

## Phase 2: Contact Form Implementation

1.  **Backend Logic:** Implement the mechanism to handle form submissions.
    *   Choose an approach: Next.js Server Action or API Route.
2.  **Integration:** Connect the backend logic to an email service (e.g., Resend, SendGrid).
    *   Install necessary SDKs.
    *   Configure API keys securely using environment variables (`.env.local`).
    *   Implement the sending logic.
3.  **Frontend Enhancements:**
    *   Add an `onSubmit` handler to the `<form>` element.
    *   Implement client-side validation.
    *   Add state management for loading/success/error feedback.

## Phase 3: Accessibility & General Cleanup

1.  **Viewport Accessibility:** Modify `app/layout.tsx` to remove `maximum-scale=1` from the `viewport` configuration.
2.  **Code Review:** Perform a broader review of other components for:
    *   Consistency in styling and structure.
    *   Opportunities for further component extraction or data externalization.
    *   Removal of unused code.
    *   Ensuring appropriate use of semantic HTML elements.

## Visual Plan

```mermaid
graph TD
    subgraph Phase 1: Refactor app/page.tsx
        A[app/page.tsx] --> B(Extract Sections);
        B --> C[components/sections/...];
        B --> D(Externalize Data);
        D --> E[data/features.ts];
        D --> F[data/testimonials.ts];
        A --> G(Refactor Smooth Scroll);
    end

    subgraph Phase 2: Contact Form
        H[ContactSection.tsx] --> I{Implement Backend};
        I -- Server Action --> J[actions.ts];
        I -- API Route --> K[app/api/contact/route.ts];
        J --> L[Email Service / API];
        K --> L;
        H --> M(Add Frontend Logic);
        M --> N[Validation, State, Feedback];
    end

    subgraph Phase 3: Cleanup & Accessibility
        O[app/layout.tsx] --> P(Improve Viewport Accessibility);
        Q[Entire Codebase] --> R(General Code Review);
        R --> S[Consistency, Cleanup, Semantics];
    end

    Phase1 --> Phase2;
    Phase2 --> Phase3;