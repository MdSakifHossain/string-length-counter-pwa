export const injectTitle = (titleTag, newTitle) => {
    if (titleTag) {
        // Title tag exists, update content
        titleTag.textContent = newTitle;
    } else {
        // Title tag doesn't exist, create and then add
        const newTitleTag = document.createElement("title");
        newTitleTag.textContent = newTitle;
        document.head.appendChild(newTitleTag);
    }
};
