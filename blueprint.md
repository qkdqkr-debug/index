# Project Blueprint: MBTI and IQ Test Website

## Overview
This project aims to create a web application offering MBTI (Myers-Briggs Type Indicator) and IQ (Intelligence Quotient) tests. The website will be designed to be user-friendly, visually appealing, accessible, and easily discoverable by both Korean and international users through search engines. The project will leverage modern web standards (HTML, CSS, JavaScript), Web Components for reusability, and Firebase for hosting.

## Technologies
- **Frontend:** HTML5, CSS3 (with modern features like Container Queries, Cascade Layers), JavaScript (ES Modules, Async/Await, Fetch API, modern syntax)
- **UI Components:** Web Components (Custom Elements, Shadow DOM, HTML Templates)
- **Deployment:** Firebase Hosting
- **3D Graphics:** Not applicable for this project.
- **WebAssembly:** Not applicable for this project.

## Design Principles
- **Aesthetics:** Clean, modern, and intuitive user interface with a balanced layout, appropriate typography, and a vibrant color palette.
- **Responsiveness:** Fully responsive design that adapts seamlessly to various screen sizes (mobile, tablet, desktop).
- **Accessibility (A11Y):** Adherence to accessibility standards to ensure usability for a diverse range of users.
- **Interactivity:** Engaging UI components with subtle animations and effects.

## Features
1.  **MBTI Test:**
    *   A series of multiple-choice questions designed to determine the user's MBTI personality type.
    *   Clear, interactive question presentation.
    *   Scoring mechanism to identify the resulting MBTI type.
    *   Detailed results page explaining the identified MBTI type.
2.  **IQ Test:**
    *   A series of questions to assess cognitive abilities.
    *   Interactive question presentation.
    *   Scoring mechanism to provide an approximate IQ score.
    *   Results page displaying the score and a brief explanation.
3.  **Navigation:** Simple and intuitive navigation between the home page, MBTI test, and IQ test.

## SEO Strategy
To ensure discoverability by Korean and international users:
-   **Meta Tags:** Implement comprehensive `<meta>` tags in `index.html` for `title`, `description`, and `keywords` in both Korean and English.
    -   **Korean Keywords:** `MBTI 테스트`, `아이큐 테스트`, `성격 유형 검사`, `지능 검사`, `무료 MBTI`, `무료 아이큐 테스트`
    -   **English Keywords:** `MBTI test`, `IQ test`, `personality type test`, `intelligence test`, `free MBTI`, `free IQ test`
-   **Structured Data:** (Considered if time permits) Use Schema.org markup (e.g., `Quiz`, `EducationalTraining`) to provide rich snippets in search results.
-   **Clean URLs:** Ensure readable and semantic URLs.
-   **Content Quality:** Provide high-quality, relevant content for each test and result explanation.

## Current Requested Changes

The user has requested the following modifications:
1.  **MBTI Test:** Increase the number of test questions.
2.  **IQ Test:**
    *   Increase the number of test questions.
    *   Change the question format from free-text input to multiple-choice (4 options).

## Current Plan for Requested Change

### Goal: Implement the requested changes for MBTI and IQ tests.

### Steps:
1.  **Update blueprint.md to reflect the new requirements for increasing question count and changing IQ test format.** (Status: In Progress)
2.  **Develop index.html with basic structure, meta tags for SEO (Korean and English keywords), and links to CSS and JS.** (Status: Completed)
3.  **Develop style.css to implement a modern, visually appealing, and responsive design, adhering to modern CSS practices.** (Status: Completed)
4.  **Develop main.js to implement Web Components for MBTI and IQ tests, including test logic, scoring, and results display.** (Status: Completed)
5.  **Enhance SEO further by ensuring appropriate keywords and descriptions in meta tags and considering schema.org markup.** (Status: Completed)
6.  **Commit all created and modified files to Git with a descriptive message.** (Status: Completed)
7.  **Configure and deploy the website to Firebase.** (Status: Completed)