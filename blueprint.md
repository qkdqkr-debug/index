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

## Current Plan for Requested Change: Update Homepage Latest Posts

The user has requested to update the "최신 게시물" (Latest Posts) section on the `index.html` homepage to dynamically display three selected blog posts from the blog directory. For this static site, I will update the hardcoded "Latest Posts" section to feature the three most recently created posts.

### Steps:

1.  **Create Blueprint.md (Completed):** This file documents the plan.
2.  **Research and Draft Blog Posts (Completed):** Four blog posts were researched and drafted.
3.  **Create HTML Files for Each Post (Completed):** Four HTML files for the new blog posts were created.
4.  **Update `blog/index.html` (Completed):** Added new blog post cards for all four new articles.
5.  **Commit Changes to Git (Completed):** All new and modified files were staged and committed for the previous task.
6.  **Deploy Changes (Uncompleted):** Attempted deployment via Firebase, but failed due to authentication issues ("Failed to authenticate, have you run firebase login?"). Manual deployment or authentication will be required.
7.  **Translate Website to Korean (Completed):** The entire website was translated to Korean, `lang="ko"` was set, and language toggles removed.
8.  **Implement Dark/Light Mode Toggle (Completed):** Dark/Light mode functionality was implemented across all pages.
9.  **Update Homepage Latest Posts (Completed):**
    *   Identified the three most recent blog posts: `blog/necessity-of-nuclear-power.html`, `blog/power-shortage-analysis.html`, `blog/semiconductor-industry-outlook.html`.
    *   Read the content of these three blog posts to extract their titles and brief excerpts.
    *   Modified `index.html` to replace the existing hardcoded "Latest Posts" content with the selected three new posts.
10. **Commit Changes to Git (Pending):** Stage `index.html` and `blueprint.md`, then commit.
11. **Deploy Changes (Pending):** Push to Git and attempt Firebase deployment, acknowledging previous authentication issues.