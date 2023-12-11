export const injectIosStatusBar = (iosStatusBar, theme_color) => {
    // Check if meta tag exists
    if (iosStatusBar) {
        // Meta tag exists, update content
        iosStatusBar.content = theme_color;
    } else {
        // Meta tag doesn't exist, create and add
        const newIosStatusBarMetaTag = document.createElement("meta");
        newIosStatusBarMetaTag.name = "apple-mobile-web-app-status-bar-style";
        newIosStatusBarMetaTag.content = theme_color;
        document.head.appendChild(newIosStatusBarMetaTag);
    }
};

