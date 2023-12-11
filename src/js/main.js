import "/src/css/main.css";

const input = document.getElementById("input_taker");
const output = document.getElementById("answer");
const reset_button = document.getElementById("reset_button");
const meta_theme_tag = document.querySelector(`meta[name="theme-color"]`);
const title_tag = document.querySelector("head title");
const stylesheetLinkTag = document.querySelector(`link[rel="stylesheet"]`);
const faviconLinkTag = document.querySelector(`link[rel="icon"]`);
const iosStatusBar = document.querySelector(
    `meta[name="apple-mobile-web-app-status-bar-style"]`
);
// const manifest_link_tag = document.querySelector(`link[rel="manifest"]`);
import { copyContent } from "./lib/copy-to-clipboard.js";
import { lenCounter } from "./lib/length-counter.js";
import { resetElementContent } from "./lib/reset-element-content.js";
import { injectMetaThemeTag } from "./lib/injectMetaThemeTag.js";
import { injectTitle } from "./lib/injectTitle.js";
// import { injectStylesheet } from "./lib/injectStylesheet.js";
import { injectFavicon } from "./lib/injectFavicon.js";
import { injectIosStatusBar } from "./lib/injectIosStatusBar.js";
// import { injectManifestLinkTag } from "./lib/injectManifestLinkTag.js";
import { injectInitialMessage } from "./lib/injectInitialMessage.js";
import {
    theme_color,
    new_title,
    initial_output_message,
    // stylesheetPath,
    faviconProps,
    // manifestProps
} from "./constants/index.js";

// helper function for this file
const reset_stuff = () => {
    resetElementContent(input);
    resetElementContent(output, 0);
};

// ~~~~~UFO~~~~~ //

// ~~~~~UFO~~~~~ //

const render_in_html = () => {
    injectMetaThemeTag(meta_theme_tag, theme_color);
    injectTitle(title_tag, new_title);
    // it's a vite project so im not injecting stylesheet 
    // vite will Automatically inject the stylesheet for us. 
    // injectStylesheet(stylesheetLinkTag, stylesheetPath);
    injectFavicon(faviconLinkTag, faviconProps);
    injectIosStatusBar(iosStatusBar, theme_color);
    // vite isn't injecting the manifest 
    // i don't know wtf is wrong
    // but, im doing it manually. 
    // injectManifestLinkTag(manifest_link_tag, manifestProps);
    injectInitialMessage(output, initial_output_message);
};

output.addEventListener("click", () => copyContent(output));
input.addEventListener("keyup", () => lenCounter(input, output));
reset_button.addEventListener("click", () => reset_stuff());

render_in_html();
