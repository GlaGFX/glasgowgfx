# Portfolio Section Implementation Plan

This plan outlines the steps to implement the new portfolio section for the Glasgow GFX website, including a Bento grid layout, dynamic filtering, a centralized data source, and updates to the header navigation.

**Phase 1: Data Centralization & Refactoring**

1.  **Create `data/projects.ts`:**
    *   Create a new file at `data/projects.ts`.
    *   Define a `Project` type (or ensure it's globally available, perhaps in `types.d.ts`). This type should match the structure of the project objects provided, including all fields needed for both the overview and detail pages.
    *   Move the `projects` array definition from `app/portfolio/page.tsx` into `data/projects.ts`.
    *   Export the `projects` array.
    *   Add logic to derive the unique `categories` from the `projects` array and export it.
    ```typescript
    // Example structure for data/projects.ts
    import type { Project } from '@/types'; // Assuming types.d.ts or similar

    export const projects: Project[] = [
      // ... Paste the full projects array here, ensuring all fields are present ...
      {
        id: 1,
        title: "Harmony Finance Platform",
        category: "UI/UX Design",
        description: "A comprehensive redesign focused on accessibility and user experience.",
        client: "Harmony Finance Corp",
        date: "April 2025",
        services: ["UX Research", "UI Design", "Prototyping", "User Testing"],
        challenge: "Harmony Finance needed a complete overhaul...",
        approach: "We conducted extensive user research...",
        outcome: "The redesigned platform saw a 42% increase...",
        imageUrl: "/api/placeholder/800/500?text=Harmony+Finance",
        coverImage: "/api/placeholder/1920/1080?text=Harmony+Finance+Cover",
        images: [
          "/api/placeholder/1200/800?text=Harmony+Finance+1",
          "/api/placeholder/1200/800?text=Harmony+Finance+2",
          "/api/placeholder/800/1200?text=Harmony+Finance+3",
        ],
        color: "from-violet-500 to-purple-500",
        size: "col-span-2 row-span-2",
        slug: "harmony-finance"
      },
      // ... other projects
    ];

    export const categories = [...new Set(projects.map(project => project.category))];
    ```
2.  **Update `app/portfolio/page.tsx`:**
    *   Remove the local `projects` and `categories` definitions.
    *   Import `projects` and `categories` from `../../data/projects`. (Adjust path as needed).
3.  **Update `app/portfolio/[slug]/page.tsx`:**
    *   Remove the local `projects` definition.
    *   Import `projects` from `../../../data/projects`. (Adjust path as needed).
    *   Ensure `generateMetadata` and the component function correctly use the imported `projects`.

**Phase 2: Feature Implementation**

1.  **Implement Dynamic Filtering (`app/portfolio/page.tsx`):**
    *   Add `'use client';` at the top of the file.
    *   Import `useState` from `react`.
    *   Create state for the active filter: `const [activeCategory, setActiveCategory] = useState('All');`
    *   Filter projects before mapping:
        ```typescript
        const filteredProjects = activeCategory === 'All'
          ? projects
          : projects.filter(p => p.category === activeCategory);
        ```
    *   Update category buttons:
        *   Add `onClick={() => setActiveCategory('All')}` to the "All" button.
        *   Add `onClick={() => setActiveCategory(category)}` to the dynamic category buttons.
        *   Apply conditional styling to the active button (e.g., change background/border color).
    *   Map over `filteredProjects` to render the Bento grid, applying dynamic `size` and `color` classes.
2.  **Implement Dynamic Header Dropdown (`components/layout/Header.tsx`):**
    *   Import `categories` from `../../data/projects`. (Adjust path as needed).
    *   Correct the `ThemeToggle` import: `import { ThemeToggle } from '../ThemeToggle';`.
    *   Replace the static links in the dropdown with dynamic ones, linking to `/portfolio` and potentially filtered views (`/portfolio?category=...`). Ensure `onClick` handlers close the menu.
3.  **Verify Project Detail Page (`app/portfolio/[slug]/page.tsx`):**
    *   Double-check that all data fields (`client`, `date`, `services`, `challenge`, `approach`, `outcome`, `images`, `coverImage`) are correctly pulled from the centralized `projects` data and rendered.
    *   Test the next/previous project navigation links.

**Component Interaction Diagram:**

```mermaid
graph TD
    subgraph User Interaction
        A[User] --> B(Browser);
    end

    subgraph Application Flow
        B --> C{Next.js App};
        C --> H(Header Component);
        C --> P(Portfolio Page /portfolio);
        C --> D(Project Detail Page /portfolio/[slug]);
    end

    subgraph Header Components
        H --> T(ThemeToggle Component);
        H --> WD(Work Dropdown);
    end

    subgraph Portfolio Page Components
        P --> F(Category Filters);
        P --> G(Bento Grid);
        G --> L(Project Link Item);
    end

    subgraph Project Detail Page Components
        D --> DH(Detail Hero);
        D --> DO(Detail Overview);
        D --> DS(Detail Sidebar);
        D --> DG(Detail Gallery);
        D --> DN(Detail Navigation);
    end

    subgraph Data Source
        PD[Project Data (data/projects.ts)]
    end

    subgraph Navigation
        H -- Navigates to --> P;
        WD -- Navigates to --> P; # Filtered view
        L -- Navigates to --> D;
        D -- Back link --> P;
        DN -- Next/Prev links --> D;
    end

    subgraph Data Flow
        H --> PD; # For categories
        P --> PD; # For projects & categories
        D --> PD; # For specific project
        F -- Updates filter --> P;
        P -- Filters data for --> G;
    end
```

**Next Steps:**

*   Implement the plan in `code` mode.