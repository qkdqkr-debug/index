# Project Blueprint

## Overview
This project is a simple web application featuring IQ and MBTI tests. It has been enhanced with a light and dark mode theme toggle for improved user experience.

## Implemented Features
### Initial Version
*   **IQ Test**: A simple multiple-choice IQ test with a scoring mechanism.
*   **MBTI Test**: A simple MBTI-like personality test with a basic result interpretation.
*   **Basic Styling**: Minimal inline CSS for layout and aesthetics.
*   **Single-page Application**: All content and functionality are within `index.html`.

### Current Version (Theme Toggle Feature)
*   **Code Refactoring**:
    *   Moved inline CSS from `index.html` to `style.css`.
    *   Moved inline JavaScript from `index.html` to `main.js`.
*   **Theme Toggle Functionality**:
    *   Added a "Toggle Theme" button to `index.html`.
    *   Implemented CSS variables in `style.css` to define colors for both light and dark modes.
    *   Used `data-theme` attribute on the `<html>` element to switch between themes.
    *   Added JavaScript in `main.js` to:
        *   Detect and apply user's saved theme preference from `localStorage` on page load.
        *   Detect and apply system's preferred color scheme if no preference is saved.
        *   Toggle the theme (`data-theme` attribute) and save the new preference to `localStorage` when the button is clicked.
    *   Added basic styling for the theme toggle button and updated overall page styling to utilize CSS variables for easier theming.
*   **Firebase Configuration**:
    *   Updated `.idx/mcp.json` with Firebase server configurations for deployment.

## Plan for Current Request: Implement Dark/Light Mode and Deploy

### Steps Taken:
1.  **Read Files**: Reviewed `index.html`, `style.css`, and `main.js` to understand existing structure.
2.  **Refactor CSS**: Extracted inline CSS from `index.html` and moved it to `style.css`. Linked `style.css` in `index.html`.
3.  **Refactor JavaScript**: Extracted inline JavaScript from `index.html` and moved it to `main.js`. Linked `main.js` in `index.html`.
4.  **Update `index.html`**:
    *   Added `<div class="header"> <button id="theme-toggle">Toggle Theme</button> </div>` above the `h1` element.
    *   Set `data-theme="light"` on the `<html>` tag as a default.
5.  **Update `style.css`**:
    *   Defined `--bg-color`, `--text-color`, `--button-bg-color`, `--button-text-color`, `--container-bg-color`, `--footer-color` CSS variables.
    *   Applied these variables for the default (light) theme.
    *   Created `[data-theme="dark"]` selector to override these variables for the dark theme.
    *   Added styling for the `.header` and `#theme-toggle` button.
    *   Updated existing styles to use CSS variables.
6.  **Update `main.js`**:
    *   Implemented `applyThemePreference()` to load theme from `localStorage` or system preference.
    *   Implemented `toggleTheme()` to switch themes and save preference.
    *   Added event listener to `#theme-toggle` button.
    *   Called `applyThemePreference()` on `DOMContentLoaded`.
7.  **Update `.idx/mcp.json`**: Added Firebase server configuration.

### Next Steps:
1.  **Verification**: Confirm the theme toggle functionality in the browser preview.
2.  **Git Commit**: Commit all changes to the git repository.
3.  **Deployment**: Deploy the application using Firebase.
