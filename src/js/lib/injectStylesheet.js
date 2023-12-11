export const injectStylesheet = (stylesheetLinkTag, stylesheetPath) => {
    // Check if stylesheet link tag exists
    if (stylesheetLinkTag) {
        // Stylesheet link tag exists, update href
        stylesheetLinkTag.href = stylesheetPath;
    } else {
        // Stylesheet link tag doesn't exist, create and add
        const newStylesheetLinkTag = document.createElement("link");
        newStylesheetLinkTag.rel = "stylesheet";
        newStylesheetLinkTag.href = stylesheetPath;
        document.head.appendChild(newStylesheetLinkTag);
    }
};
