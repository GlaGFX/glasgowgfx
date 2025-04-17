# Project Plan: Glasgow GFX Website

**1. Goal:** Create a high-performance, visually appealing website using Next.js to showcase the studio's portfolio and attract high-end clients.

**2. Technology Stack:**
    *   **Framework:** Next.js 15+ (TypeScript)
    *   **Deployment:** Vercel
    *   **Styling:** Tailwind CSS (+ PostCSS, Autoprefixer)
    *   **Animation:** Framer Motion (Primary), GSAP (Optional, if complex timelines needed later)
    *   **Image Handling:** Next.js Image Component

**3. Phases & Tasks:**

    **Phase 1: Setup & Foundation (Developer Task)**
        *   **Task 1.1: Verify Initial Setup:** Confirm `create-next-app` with TypeScript was successful.
        *   **Task 1.2: Install Dependencies:**
            *   Install Framer Motion: `npm install framer-motion`
            *   Verify Tailwind CSS is installed and configured.
            *   *(Optional: Install GSAP `npm install gsap` if specific complex animations are identified)*
        *   **Task 1.3: Configure Tailwind:** Ensure `tailwind.config.ts` is set up according to branding guidelines (colors, fonts, spacing). Integrate theme values from mockups.
        *   **Task 1.4: Establish Project Structure:** Create directories for components, pages, styles, utilities, hooks, and data.
            ```mermaid
            graph TD
                A[Project Root] --> B(app);
                A --> C(components);
                A --> D(public);
                A --> E(styles);
                A --> F(lib);
                A --> G(data);

                B --> B1(layout.tsx);
                B --> B2(page.tsx);
                B --> B3(about/page.tsx);
                B --> B4(portfolio/page.tsx);
                B --> B5(portfolio/[slug]/page.tsx);
                B --> B6(contact/page.tsx);

                C --> C1(common/);
                C --> C2(layout/);
                C --> C3(ui/);
                C --> C4(animations/);

                C1 --> C1a(Button.tsx);
                C1 --> C1b(Card.tsx);
                C2 --> C2a(Header.tsx);
                C2 --> C2b(Footer.tsx);
                C2 --> C2c(Navigation.tsx);
                C3 --> C3a(Input.tsx);
                C3 --> C3b(TextArea.tsx);
                C4 --> C4a(PageTransition.tsx);
                C4 --> C4b(FadeIn.tsx);

                E --> E1(globals.css);

                F --> F1(utils.ts);
                F --> F2(hooks.ts);

                G --> G1(portfolioData.ts); // Example for storing project details
            ```
        *   **Task 1.5: Setup Vercel:** Connect the GitHub repository to Vercel for CI/CD.

    **Phase 2: Core Component & Page Development (Developer Task)**
        *   **Task 2.1: Develop Layout Components:** Build reusable `Header`, `Footer`, and `Navigation` components. Implement responsive design.
        *   **Task 2.2: Implement Base Styling:** Apply global styles and configure base Tailwind settings.
        *   **Task 2.3: Build Static Pages:**
            *   **Home Page (`app/page.tsx`)**
            *   **About Us Page (`app/about/page.tsx`)**
        *   **Task 2.4: Build Portfolio Pages:**
            *   **Portfolio Index (`app/portfolio/page.tsx`)**
            *   **Individual Project Page (`app/portfolio/[slug]/page.tsx`)**
        *   **Task 2.5: Build Contact Page (`app/contact/page.tsx`):** Implement contact form (Recommend `mailto:` or Formspree initially).
        *   **Task 2.6: Implement Basic Animations:** Integrate Framer Motion for page transitions and entrance animations.

    **Phase 3: Refinement & Deployment (Developer Task)**
        *   **Task 3.1: Image Optimization:** Ensure all images use `next/image`.
        *   **Task 3.2: SEO Basics:** Implement titles and descriptions using Next.js metadata.
        *   **Task 3.3: Cross-Browser/Device Testing:** Test on major browsers and device sizes.
        *   **Task 3.4: Final Deployment:** Deploy via Vercel and verify.

**4. Instructions for Manager (You):**

1.  **Kick-off Meeting:**
    *   Share goal, tech stack, designs, branding.
    *   Present this plan & structure.
    *   Decide on contact form implementation.
    *   Provide assets.
2.  **Phase 1 Check-in:**
    *   Verify setup, dependencies, Tailwind config, structure, Vercel connection.
3.  **Phase 2 Review:**
    *   Review layout components, static pages, portfolio pages (index/detail), contact form, animations.
4.  **Phase 3 Final Review & Launch:**
    *   Confirm image optimization, SEO basics.
    *   Perform UAT.
    *   Approve production deployment.

**5. Potential Upgrades/Future Considerations:**

*   Headless CMS (Prismic/Contentful)
*   Advanced Animations (GSAP)
*   Three.js Integration
*   Custom Contact Form Backend
*   Blog Section