export const resetElementContent = (element, content = "") => {
    if (element.tagName.toLowerCase() === "input") {
        // If the element is an input, set its value to the provided content or an empty string
        element.value = content;
    } else {
        // For other elements, set innerHTML to the provided content or an empty string
        element.innerHTML = content;
    }
};

// Example usage:
// resetElementContent(document.getElementById('myInput'), 'Default Text');
// resetElementContent(document.getElementById('myDiv'), '<p>Default Content</p>');
// resetElementContent(document.getElementById('anotherDiv')); // Defaults to an empty string
