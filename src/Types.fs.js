import { Union } from "./fable_modules/fable-library.3.7.11/Types.js";
import { union_type } from "./fable_modules/fable-library.3.7.11/Reflection.js";

export class Types_Page extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Home", "Notes"];
    }
}

export function Types_Page$reflection() {
    return union_type("Extensions.Types.Page", [], Types_Page, () => [[], []]);
}

