export const injectMetaThemeTag = (metaThemeTag, themeColor) => {
    // Set the theme color
    if (metaThemeTag) {
        metaThemeTag.setAttribute("content", themeColor);
    } else {
        // If the meta tag doesn't exist, create it
        const newMetaThemeTag = document.createElement("meta");
        newMetaThemeTag.name = "theme-color";
        newMetaThemeTag.content = themeColor;
        document.head.appendChild(newMetaThemeTag);
    }
};
