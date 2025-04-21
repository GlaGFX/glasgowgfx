# Bento Grid Fix Plan

## Problem

The bento grid layout in the "Our Work" section (`app/gallery/page.tsx`) is displaying incorrectly. Specifically:
*   Tiles/cards are rendering very small.
*   Only 3 items are visible, despite 8 projects being defined in `data/projects.ts`.

## Analysis

1.  **`app/gallery/page.tsx`:** Uses Tailwind CSS grid layout. Grid items (`Link` components) use a `project.size` property (e.g., `md:col-span-2 md:row-span-2`) for sizing. Images (`next/image`) use the `fill` prop.
2.  **`data/projects.ts`:** Defines 8 projects, each with a `size` property containing Tailwind grid span classes. These classes appear syntactically correct.
3.  **`tailwind.config.ts`:** Configuration seems correct; the `content` array includes the necessary paths for Tailwind to scan the classes.
4.  **`app/globals.css`:** No obvious conflicting global styles were found that would override the grid layout.
5.  **Hypothesis:** The primary issue is likely the lack of explicit row height definition on the grid container (`<div className="grid ...">` in `app/gallery/page.tsx`). The `auto-rows-[...]` class was previously removed. Without defined row heights, the parent `Link` components might not have dimensions for the `next/image` with `fill` to correctly occupy, causing the tiles to collapse or render very small. The small size might also make it seem like fewer items are present.

## Proposed Plan

1.  **Fix Tile Size:** Modify `app/gallery/page.tsx` by adding an explicit row height class (e.g., `auto-rows-[250px]`) back to the main grid `div` (line 12). This should provide a consistent height for grid rows, allowing the `Link` and `Image` components to size correctly.
2.  **Verify Item Count:** After applying the fix, visually confirm that all 8 projects from `data/projects.ts` are rendering correctly in the grid.
3.  **Add More Projects (If Needed):** If the user requires more than 8 projects displayed, add the necessary project data objects to the `projects` array in `data/projects.ts`.

## Diagram

```mermaid
graph TD
    A[Start: Bento Grid Issues (Tiny Tiles, 3 Items)] --> B{Analyze Code};
    B --> C[Hypothesis: Missing Row Height / Item Count];
    C --> D[Plan 1: Add `auto-rows-[250px]` to Grid in `app/gallery/page.tsx`];
    D --> E[Plan 2: Verify if all 8 items render correctly];
    E --> F{Need > 8 items?};
    F -- Yes --> G[Plan 3: Add more data to `data/projects.ts`];
    F -- No --> H[Plan Complete];
    G --> H;
    H --> I[User Review];
    I --> J[Switch to Code Mode];
```

## Next Steps

*   User approved this plan.
*   Proceed to switch to Code mode for implementation.