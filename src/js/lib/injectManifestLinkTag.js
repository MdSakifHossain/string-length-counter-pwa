export const injectManifestLinkTag = (manifest_link_tag, manifestProps) => {
    // Manifest link tag exists, update href
    if (manifest_link_tag) {
        manifest_link_tag.href = manifestProps.href;
    } else {
        // Manifest link tag doesn't exist, create and add
        const newManifestLink = document.createElement("link");
        newManifestLink.rel = manifestProps.rel;
        newManifestLink.href = manifestProps.href;
        document.head.appendChild(newManifestLink);
    }
};
