# Project Blueprint: MBTI and IQ Test Website

## Overview
This project aims to create a web application offering MBTI (Myers-Briggs Type Indicator) and IQ (Intelligence Quotient) tests. The website is designed to be user-friendly, visually appealing, accessible, and easily discoverable by both local and international users through search engines. A key focus has been to ensure the website meets the stringent requirements for Google AdSense approval, providing high-quality content and a robust user experience. The project leverages modern web standards (HTML, CSS, JavaScript), Web Components for reusability, and Firebase for hosting.

## Technologies
- **Frontend:** HTML5, CSS3 (with modern features like CSS variables, media queries for responsiveness), JavaScript (ES Modules, Async/Await, Fetch API, modern syntax)
- **UI Components:** Web Components (Custom Elements: `mbti-test`, `iq-test`)
- **Deployment:** Firebase Hosting
- **3D Graphics:** Not applicable for this project.
- **WebAssembly:** Not applicable for this project.

## Design Principles
- **Aesthetics:** Clean, modern, and intuitive user interface with a balanced layout, appropriate typography, and a vibrant color palette.
- **Responsiveness:** Fully responsive design that adapts seamlessly to various screen sizes (mobile, tablet, desktop) using media queries.
- **Accessibility (A11Y):** Adherence to accessibility standards to ensure usability for a diverse range of users.
- **Interactivity:** Engaging UI components with clear navigation and dynamic content loading for tests.

## Features
1.  **MBTI Test:**
    *   A series of multiple-choice questions designed to determine the user's MBTI personality type.
    *   Interactive question presentation with random question selection.
    *   Scoring mechanism to identify the resulting MBTI type.
    *   Detailed results page explaining the identified MBTI type.
2.  **IQ Test:**
    *   A series of multiple-choice questions to assess cognitive abilities.
    *   Interactive question presentation with random question selection.
    *   Scoring mechanism to provide an approximate IQ score.
    *   Results page displaying the score and a brief explanation.
3.  **Navigation:** Simple and intuitive navigation between the home page, MBTI test, IQ test, and About Us section.
4.  **Multi-language Support:** Dynamic content translation for Korean (ko), English (en), Japanese (ja), and Chinese (zh) to cater to a global audience.
5.  **Legal Pages:** Dedicated Privacy Policy (`privacy.html`) and Terms of Service (`terms.html`) pages accessible from the footer.
6.  **Contact Form:** A functional contact form in the About Us section for user inquiries.

## SEO Strategy
To ensure discoverability by search engines and compliance with AdSense policies:
-   **Meta Tags:** Comprehensive `<meta>` tags in `index.html` for `title`, `description`, `keywords`, Open Graph (`og:`) and Twitter card properties are implemented. These are dynamically updated based on selected language.
-   **Canonical URLs:** Ensured consistent URL structure.
-   **Content Quality:** High-quality, relevant, and unique content for all sections, including detailed descriptions for MBTI and IQ tests, and comprehensive legal pages.
-   **`sitemap.xml`:** A well-structured sitemap is provided to facilitate crawling and indexing by search engines, including all main content and legal pages.
-   **`ads.txt`:** Correctly configured `ads.txt` for AdSense compliance.
-   **Mobile-Friendliness:** Responsive design (via `style.css`) ensures optimal viewing and interaction across devices.

## AdSense Approval & Compliance Actions (Current Task)

The user requested modifications to ensure Google AdSense approval. The following changes have been implemented:

*   **`index.html` Updates:**
    *   Replaced placeholder URLs for Open Graph (`og:url`, `og:image`) and Twitter card (`twitter:url`, `twitter:image`) properties with generic example URLs. **(Note: User must replace with actual website and image URLs before final deployment).**
    *   Verified the presence and correct format of the Google AdSense script and meta tag for site verification.
    *   The `data-ad-slot="YYYYYYYYYY"` placeholder for ad units remains, awaiting the user's specific AdSense ad unit ID configuration.
*   **`style.css` Review:**
    *   Confirmed responsive design through media queries, ensuring a good user experience on various devices, a key factor for AdSense. No modifications were needed.
*   **`main.js` Updates:**
    *   Modified the event listeners for the footer links to "Privacy Policy" and "Terms of Service" to navigate directly to `privacy.html` and `terms.html` respectively, eliminating "not implemented" alerts. This ensures all legal pages are fully functional.
    *   Multi-language support for test content, site navigation, and meta tags enhances user experience and content accessibility.
*   **`privacy.html` Content Verification:**
    *   Confirmed the presence of substantial, legally comprehensive content for the Privacy Policy.
    *   Replaced administrator name and email placeholders (`[관리자 이름]`, `[관리자 이메일]`) with generic text `[웹사이트 관리자]` and `[admin@example.com]`. **(Note: User must replace with actual contact details).**
*   **`terms.html` Content Verification:**
    *   Confirmed the presence of substantial, legally comprehensive content for the Terms of Service. No modifications were needed.
*   **`ads.txt` Verification:**
    *   Confirmed the correct format and presence of the `ads.txt` file with the matching publisher ID, vital for AdSense account verification. No modifications were needed.
*   **`sitemap.xml` Updates:**
    *   Replaced the `YOUR_WEBSITE_URL` placeholder with a generic example domain. **(Note: User must replace with actual website URL before final deployment).**
    *   Added explicit entries for `privacy.html` and `terms.html` to the sitemap, ensuring these critical legal pages are discoverable by search engines.

The website is now significantly better positioned for Google AdSense approval due to improved content quality, functional legal pages, comprehensive SEO elements, and adherence to Google's guidelines for good user experience.
