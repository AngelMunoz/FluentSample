import { Prop_Of_6B8EFA6B, LitElementAttribute } from "../fable_modules/Fable.Lit.1.4.1/LitElement.fs.js";
import { Hook_getContext_343DAFF1 } from "../fable_modules/Fable.Lit.1.4.1/./Hook.fs.js";
import { LitHelpers_html } from "../fable_modules/Fable.Lit.1.4.1/Lit.fs.js";
import { fmt } from "../fable_modules/fable-library.3.7.11/String.js";
import { class_type, unit_type, MethodInfo } from "../fable_modules/fable-library.3.7.11/Reflection.js";

const Counter = (new LitElementAttribute("flit-counter")).Decorate(function () {
    const props = (this).init((arg) => {
        let a;
        a = (arg.props = {
            initial: Prop_Of_6B8EFA6B(0, "initial"),
        });
        return Promise.resolve(undefined);
    })[1];
    let patternInput_1;
    const v = (props.initial) | 0;
    patternInput_1 = Hook_getContext_343DAFF1(this).useState(() => v);
    const setCount = patternInput_1[1];
    const count = patternInput_1[0] | 0;
    return LitHelpers_html(fmt`
    <p>${count}</p>
    <fluent-button @click=${((_arg1) => {
        setCount(count + 1);
    })}>Increment</fluent-button>
    <fluent-button @click=${((_arg2) => {
        setCount(count - 1);
    })}>Decrement</fluent-button>
    <fluent-button @click=${((_arg3) => {
        setCount(props.initial);
    })}>Reset</fluent-button>
  `);
}, new MethodInfo("Counter", [["arg0", unit_type]], class_type("Lit.TemplateResult")));

export function register() {
}

