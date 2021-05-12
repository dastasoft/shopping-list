import { Render } from "./render.js";
import { Sections } from "./constants.js";
const render = new Render();
render.renderSections(document.querySelector("select"), Sections);
