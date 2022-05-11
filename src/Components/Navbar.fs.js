import { LitElementAttribute } from "../fable_modules/Fable.Lit.1.4.1/LitElement.fs.js";
import { LitHelpers_html } from "../fable_modules/Fable.Lit.1.4.1/Lit.fs.js";
import { fmt } from "../fable_modules/fable-library.3.7.11/String.js";
import { partialApply } from "../fable_modules/fable-library.3.7.11/Util.js";
import { Types_Page } from "../Types.fs.js";
import { class_type, unit_type, MethodInfo } from "../fable_modules/fable-library.3.7.11/Reflection.js";

const NavBar = (new LitElementAttribute("flit-navbar")).Decorate(function () {
    (this).init((_arg1) => (Promise.resolve(undefined)))[0];
    const goback = (ev) => {
        const evt = new Event("go-back", {
            bubbles: true,
            cancelable: true,
            composed: true,
        });
        return ev.target.dispatchEvent(evt);
    };
    const gotoPage = (page, ev_1) => {
        const evt_1 = new CustomEvent("go-to-page", {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: page,
        });
        return ev_1.target.dispatchEvent(evt_1);
    };
    return LitHelpers_html(fmt`
    <fluent-button @click=${goback}>Back</fluent-button>
    <fluent-button @click=${partialApply(1, gotoPage, [new Types_Page(0)])}>Home</fluent-button>
    <fluent-button @click=${partialApply(1, gotoPage, [new Types_Page(1)])}>Notes</fluent-button>
  `);
}, new MethodInfo("NavBar", [["arg0", unit_type]], class_type("Lit.TemplateResult")));

export function register() {
}

