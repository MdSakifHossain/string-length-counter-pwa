export const copyContent = async element => {
    const content = element.value || element.innerText;
    try {
        await navigator.clipboard.writeText(content);
        alert("Content copied to clipboard");
        /* Resolved - text copied to clipboard successfully */
    } catch (err) {
        alert("Failed to copy: ", err);
        /* Rejected - text failed to copy to the clipboard */
    }
};
