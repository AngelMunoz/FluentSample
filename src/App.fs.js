import { HookComponentAttribute } from "./fable_modules/Fable.Lit.1.4.1/Hook.fs.js";
import { Hook_getContext_343DAFF1 } from "./fable_modules/Fable.Lit.1.4.1/./Hook.fs.js";
import { Types_Page } from "./Types.fs.js";
import { fmt, printf, toConsole } from "./fable_modules/fable-library.3.7.11/String.js";
import { defaultArg } from "./fable_modules/fable-library.3.7.11/Option.js";
import { Notes } from "./Notes.fs.js";
import { Home } from "./Home.fs.js";
import { Lit_render, LitHelpers_html } from "./fable_modules/Fable.Lit.1.4.1/Lit.fs.js";
import { class_type, unit_type, MethodInfo } from "./fable_modules/fable-library.3.7.11/Reflection.js";

const app = (new HookComponentAttribute()).Decorate(function () {
    const patternInput = Hook_getContext_343DAFF1(this).useState(() => (new Types_Page(0)));
    const state = patternInput[0];
    const setState = patternInput[1];
    const onBackRequested = (_arg1) => {
        toConsole(printf("Back requested"));
    };
    const goToPage = (ev) => {
        const page = defaultArg(ev.detail, new Types_Page(0));
        setState(page);
    };
    const getPage = (page_1) => {
        if (page_1.tag === 1) {
            return Notes();
        }
        else {
            return Home();
        }
    };
    return LitHelpers_html(fmt`
      <fluent-card style="padding: 2em">
         <flit-navbar @go-back=${onBackRequested} @go-to-page=${goToPage}></flit-navbar>
        <fluent-button>Hello</fluent-button>
        ${getPage(state)}
      </fluent-card>
  `);
}, new MethodInfo("app", [["arg0", unit_type]], class_type("Lit.TemplateResult")));

export function start() {
    const arg10 = app();
    Lit_render(document.querySelector("#lit-app"), arg10);
}

