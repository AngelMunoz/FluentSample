import { LitHelpers_html } from "./fable_modules/Fable.Lit.1.4.1/Lit.fs.js";
import { fmt } from "./fable_modules/fable-library.3.7.11/String.js";

export function Home() {
    return LitHelpers_html(fmt`
    <h3>Counter at 0</h3>
    <flit-counter></flit-counter>
    <h3>Counter at 100</h3>
    <flit-counter initial="100"></flit-counter>
  `);
}

