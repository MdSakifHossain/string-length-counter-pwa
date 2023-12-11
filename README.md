# String Length Counter PWA 📱🔥✨

## Overview️ 🪐✨🎉

This is a Progressive Web App (PWA) built with Vite vanilla js template.⚡ It serves as a `String Length Counter` with a sleek user interface. 🎨

## Key Features 🚀

-   Real-time string length counting ⏱️
-   Responsive design (not sure) 😅
-   Installable as a PWA 💾

## Technology Stack 💪

-   HTML 🌐
-   CSS 🎨
-   Vanilla JavaScript 🧠
-   Vite ⚡

## How to Use 🧑‍💻🛩️

```sh
git clone <this_repo_link>
cd string-length-counter-pwa
npm install
npm run dev
```

## Customization ⚙️🛠️

### Changing App Icon/Favicon

> You have to change in 2 places manually in Favicon and Manifest

##### Favicon
Open `/src/js/constants/index.js`
```js
/* ... */
const icon_path = "path/to/your/icon.svg";
/* ... */

```
##### Manifest
Open `/manifest.json`
```json
/* /manifest.json */
{
    "icons": [
        {
            "src": "path/to/your/icon.svg",
            "type": "image/svg+xml",
            "sizes": "any"
        }
    ]
    /* ... */
}
```

### Modifying App/Website Title

> You have to change in 2 places manually.

##### Website title
Open `/src/js/constants/index.js`
```js
/* ... */
const new_title = "Your desired title";
/* ... */
```
##### App name
Open `/manifest.json`
```json
{
	"name": "Your desired app name",
    "short_name": "Your desired app name", // this will be shown to the use-user
    /* ... */
}
```

### Adjusting Theme Color

> To change the theme color, You have to change in 2 places manually.

##### Change website theme Color
Open `/src/js/constants/index.js`
```js
/* ... */
const theme_color = "#YourDesiredColor";
/* ... */
```

##### Change app theme Color
Open `/manifest.json`
```json
{
    /* ... */
    "background_color": "#YourDesiredColor",
    "theme_color": "#YourDesiredColor",
    /* ... */
}
```

## Useful Links
-   [About PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
-   [About Vite](https://vitejs.dev/)


## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.