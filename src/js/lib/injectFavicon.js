export const injectFavicon = (faviconLinkTag, faviconProps) => {
    // Check if favicon link tag exists
    if (faviconLinkTag) {
        // Favicon link tag exists, update
        faviconLinkTag.rel = faviconProps.rel;
        faviconLinkTag.type = faviconProps.type;
        faviconLinkTag.href = faviconProps.href;
        faviconLinkTag.sizes = faviconProps.sizes;
    } else {
        // Favicon link tag doesn't exist, create and add
        const newFaviconLinkTag = document.createElement("link");
        newFaviconLinkTag.rel = faviconProps.rel;
        newFaviconLinkTag.type = faviconProps.type;
        newFaviconLinkTag.href = faviconProps.href;
        newFaviconLinkTag.sizes = faviconProps.sizes;
        document.head.appendChild(newFaviconLinkTag);
    }
};
