# Project Blueprint: Blog for Financial and Industry Insights

## Project Purpose and Capabilities

This blog serves as a platform to share insights and analyses on various economic, industry, and technological topics. It features articles on stock market trends, company-specific outlooks, and broader industry analyses, aiming to provide readers with informed perspectives.

## Implemented Style, Design, and Features

The blog utilizes a modern, clean, and responsive web design with a focus on readability.

*   **Responsive Layout:** Adapts to various screen sizes for optimal viewing on desktop and mobile devices.
*   **Theming:** Supports light and dark modes with smooth transitions.
*   **Navigation:** Clear and intuitive navigation bar in the header.
*   **Blog Post Cards:** On the blog index page (`blog/index.html`), posts are displayed as cards with titles, publication dates, excerpts, and "Read More" links, providing a visually appealing and organized overview.
*   **Individual Post Pages:** Each blog post has its dedicated page with a title, metadata (publication date), and well-structured content (headings, paragraphs).
*   **Footer:** Contains copyright information.
*   **Modern CSS:** Utilizes CSS variables for easy theming and maintains a consistent visual style.
*   **Firebase Integration:** Configured for deployment via Firebase.

## Current Plan for Requested Change: Blog Index Pagination

The user wants to implement pagination for the blog index page (`blog/index.html`), allowing all blog posts to be viewed across multiple pages, with a limit of 5 posts per page. This will involve client-side JavaScript to dynamically render posts and pagination controls.

### Steps:

1.  **Create Blueprint.md (Completed):** This file documents the plan.
2.  **Research and Draft Blog Posts (Completed):** Four blog posts were researched and drafted.
3.  **Create HTML Files for Each Post (Completed):** Four HTML files for the new blog posts were created.
4.  **Update `blog/index.html` (Completed):** Added new blog post cards for all four new articles.
5.  **Commit Changes to Git (Completed):** All new and modified files were staged and committed for the previous task.
6.  **Deploy Changes (Uncompleted):** Attempted deployment via Firebase, but failed due to authentication issues ("Failed to authenticate, have you run firebase login?"). Manual deployment or authentication will be required.
7.  **Translate Website to Korean (Completed):** The entire website was translated to Korean, `lang="ko"` was set, and language toggles removed.
8.  **Implement Dark/Light Mode Toggle (Completed):** Dark/Light mode functionality was implemented across all pages.
9.  **Update Homepage Latest Posts (Completed):** The homepage's "Latest Posts" section was updated to display the three most recent blog posts.
10. **Change "회사 소개" to "블로그 소개" (Completed):**
    *   Updated `nav_about` translation key in `js/i18n.js` to "블로그 소개".
    *   Modified `about.html` content to describe the blog.
11. **Find Top 3 Most Searched Companies (Revised - Hypothetical & Completed):**
    *   Three hypothetical companies were selected, and their issues/analysis were outlined.
12. **Create New Blog Post (Completed):**
    *   A new HTML blog post `blog/2026-01-28-top-searched-companies.html` was drafted.
13. **Update `blog/index.html` (Completed):**
    *   A link to the new blog post was added to `blog/index.html` at the top of the list.
14. **Update `index.html` "Latest Posts" (Completed):**
    *   The content of the `<div class="post-grid">` in `index.html` was adjusted to feature the three most recent blog posts.
15. **Implement Blog Index Pagination (Completed):**
    *   **Gathered all blog post data:** Read all blog post HTML files (excluding `blog/index.html`) to extract titles, excerpts, and file paths. This data was hardcoded into `js/blog-pagination.js`.
    *   **Created `js/blog-pagination.js`:** Developed a new JavaScript file to handle the pagination logic, including storing an array of all blog post objects, defining `postsPerPage = 5`, parsing the current page number from the URL, rendering the appropriate subset of posts, and dynamically generating "Previous" and "Next" pagination controls.
    *   **Modified `blog/index.html`:** Removed all existing hardcoded `<article class="blog-post-card">` elements, added a `div` with `id="blog-pagination"` for pagination controls, and imported `js/blog-pagination.js`.
    *   **Updated `style.css`:** Added necessary styles for pagination controls.
16. **Commit Changes to Git (Pending):** Stage all modified and new files and commit.
17. **Deploy Changes (Pending):** Push to Git and attempt Firebase deployment.