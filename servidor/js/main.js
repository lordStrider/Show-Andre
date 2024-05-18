import { templateMenu } from "./template_menu.js";
import { headerTemplate } from "./headerTemplate.js";
import { templaCadastrar } from "./templateCadastrar perguntas.js";
window.addEventListener("load", () => {
    const app = document.querySelector("#app");
    app.innerHTML = headerTemplate + templateMenu + templaCadastrar;
});
