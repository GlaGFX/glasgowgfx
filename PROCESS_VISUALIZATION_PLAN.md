# Project Plan: Interactive Process Visualization

**Goal:** Replace the static process sections on `app/approach/page.tsx` with an interactive, animated timeline/diagram using Framer Motion and icons from `react-icons`.

**Target Page:** `app/approach/page.tsx`

**Technology:** React, Next.js, TypeScript, Tailwind CSS, Framer Motion, React Icons

**Process Steps:**
1.  Discovery
2.  Design
3.  Development
4.  Deployment
5.  Support

**Implementation Steps:**

1.  **Define Data Structure:**
    *   Create a constant array of objects. Each object will represent a step and include properties: `id`, `title`, `description`, and `icon` (using appropriate components from `react-icons`, e.g., `FaSearch`, `FaPaintBrush`, `FaCode`, `FaRocket`, `FaLifeRing`).
2.  **Create `ProcessVisualization` Component:**
    *   Create file: `components/ProcessVisualization.tsx`.
    *   Import necessary libraries (`React`, `motion`, `react-icons`).
    *   Component will encapsulate visualization logic and rendering.
3.  **Implement Interactive Timeline/Diagram:**
    *   Use `motion.div` elements for structure.
    *   Map over the process steps data to render each step dynamically.
    *   Render the corresponding `icon`, `title`, and implement tooltips for the `description`.
    *   Design a layout incorporating icons (e.g., icon above/beside title).
    *   **Animations:** Use Framer Motion props (`initial`, `animate`, `variants`, `transition`, `whileHover`) for engaging effects.
    *   **Tooltips:** Implement tooltips on hover (HTML `title` or custom component).
    *   **Microcopy:** Display step titles clearly.
4.  **Ensure Responsiveness:**
    *   Utilize Tailwind CSS utility classes for adaptability across screen sizes (e.g., horizontal to vertical layout changes).
5.  **Integrate into Approach Page:**
    *   Modify `app/approach/page.tsx`.
    *   Import `<ProcessVisualization />`.
    *   Remove the existing static `<section>` elements.
    *   Render the `<ProcessVisualization />` component.
6.  **Styling and Refinement:**
    *   Apply Tailwind CSS for consistent styling (colors, fonts, spacing, icon size/color) matching the website theme.
    *   Test thoroughly on different browsers and devices.

**Visual Plan (Mermaid Diagram):**

```mermaid
graph TD
    A[Start: /approach Page Update] --> B(Define Process Steps Data Array with Icons);
    B --> C(Create components/ProcessVisualization.tsx);
    C --> D{Implement Core Logic};
    D -- Map Data --> E[Render Steps with Icons, Titles & motion];
    D -- Framer Motion --> F[Add Animations & Transitions];
    D -- Hover Interaction --> G[Implement Tooltips];
    D -- Tailwind CSS --> H[Ensure Responsive Design];
    C --> I(Integrate <ProcessVisualization /> into app/approach/page.tsx);
    I --> J(Remove Old Static Sections);
    I --> K(Apply Consistent Styling);
    K --> L[End: Interactive Process with Icons Ready];