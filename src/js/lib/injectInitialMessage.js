export const injectInitialMessage = (element, message) => {
    if (!element) {
        console.log(`You haven't provided the element arg..!! 😡`);
        return;
    }
    if (!message) {
        console.log(`Now you haven't provided the message arg..!! 😡`);
        return;
    }
    element.innerHTML = message;
};
