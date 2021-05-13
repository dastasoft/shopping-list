import { Render } from "./render.js";
import { Sections } from "./constants.js";
import { Product } from "./Product.js";
const form = document.querySelector("form");
const section = document.querySelector("select");
const name = document.querySelector("input[name ='name']");
const quantity = document.querySelector("input[name ='quantity']");
const render = new Render();
render.renderSections(section, Sections);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const product = new Product(name.value, quantity.value, section.value);
    product.render();
});
