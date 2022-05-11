import { Union, Record } from "./fable_modules/fable-library.3.7.11/Types.js";
import { class_type, unit_type, MethodInfo, union_type, list_type, option_type, record_type, string_type, int32_type } from "./fable_modules/fable-library.3.7.11/Reflection.js";
import { cons, length as length_1, filter, empty } from "./fable_modules/fable-library.3.7.11/List.js";
import { Cmd_none } from "./fable_modules/Fable.Elmish.3.1.0/cmd.fs.js";
import { equals } from "./fable_modules/fable-library.3.7.11/Util.js";
import { map, defaultArg } from "./fable_modules/fable-library.3.7.11/Option.js";
import { reverse, length } from "./fable_modules/fable-library.3.7.11/Seq.js";
import { Browser_Types_EventTarget__EventTarget_get_Value, LitHelpers_html } from "./fable_modules/Fable.Lit.1.4.1/Lit.fs.js";
import { fmt } from "./fable_modules/fable-library.3.7.11/String.js";
import { HookComponentAttribute } from "./fable_modules/Fable.Lit.1.4.1/Hook.fs.js";
import { Program_mkHidden, LitElmishExtensions_useElmish } from "./fable_modules/Fable.Lit.Elmish.1.4.0/./Lit.Elmish.fs.js";
import { Hook_getContext_343DAFF1 } from "./fable_modules/Fable.Lit.1.4.1/./Hook.fs.js";
import { repeat } from "lit/directives/repeat.js";

class Note extends Record {
    constructor(Id, Title, Body) {
        super();
        this.Id = (Id | 0);
        this.Title = Title;
        this.Body = Body;
    }
}

function Note$reflection() {
    return record_type("Pages.Notes.Note", [], Note, () => [["Id", int32_type], ["Title", string_type], ["Body", string_type]]);
}

class State extends Record {
    constructor(CurrentNote, Notes) {
        super();
        this.CurrentNote = CurrentNote;
        this.Notes = Notes;
    }
}

function State$reflection() {
    return record_type("Pages.Notes.State", [], State, () => [["CurrentNote", option_type(Note$reflection())], ["Notes", list_type(Note$reflection())]]);
}

class Msg extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Save", "Remove", "SetTitle", "SetBody"];
    }
}

function Msg$reflection() {
    return union_type("Pages.Notes.Msg", [], Msg, () => [[], [["Item", Note$reflection()]], [["Item", string_type]], [["Item", string_type]]]);
}

function init() {
    return [new State(void 0, empty()), Cmd_none()];
}

function update(msg, state) {
    switch (msg.tag) {
        case 1: {
            const note_2 = msg.fields[0];
            return [new State(state.CurrentNote, filter((n) => (!equals(n, note_2)), state.Notes)), Cmd_none()];
        }
        case 2: {
            const title = msg.fields[0];
            let current_1;
            const ifNone = new Note(0, "", "");
            current_1 = defaultArg(map((current) => (new Note(current.Id, title, current.Body)), state.CurrentNote), ifNone);
            return [new State(current_1, state.Notes), Cmd_none()];
        }
        case 3: {
            const body = msg.fields[0];
            let current_3;
            const ifNone_1 = new Note(0, "", "");
            current_3 = defaultArg(map((current_2) => (new Note(current_2.Id, current_2.Title, body)), state.CurrentNote), ifNone_1);
            return [new State(current_3, state.Notes), Cmd_none()];
        }
        default: {
            const matchValue = map((note) => (new Note(length(state.Notes) + 1, note.Title, note.Body)), state.CurrentNote);
            if (matchValue == null) {
                return [state, Cmd_none()];
            }
            else {
                const note_1 = matchValue;
                return [new State(state.CurrentNote, cons(new Note(length_1(state.Notes) + 1, note_1.Title, note_1.Body), state.Notes)), Cmd_none()];
            }
        }
    }
}

function noteTemplate(note, index) {
    return LitHelpers_html(fmt`<li>${note.Id} - ${note.Title}</li>`);
}

export const Notes = (new HookComponentAttribute()).Decorate(function () {
    const patternInput = LitElmishExtensions_useElmish(Hook_getContext_343DAFF1(this), () => Program_mkHidden(init, update));
    const state_1 = patternInput[0];
    const dispatch = patternInput[1];
    const updateTitle = (e) => {
        dispatch(new Msg(2, Browser_Types_EventTarget__EventTarget_get_Value(e.target)));
    };
    const updateBody = (e_1) => {
        dispatch(new Msg(3, Browser_Types_EventTarget__EventTarget_get_Value(e_1.target)));
    };
    return LitHelpers_html(fmt`
    <form @submit=${((e_2) => {
        e_2.preventDefault();
        dispatch(new Msg(0));
    })}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        required
        @input=${updateTitle}
        @blur=${updateTitle}
        />

      <input
        type="text"
        name="body"
        placeholder="Body"
        @input=${updateBody}
        @blur=${updateBody}
        />

        <button type="submit">Add</button>
    </form>
    <section>
      <ul>
      ${repeat(reverse(state_1.Notes), (item) => (`${item.Id}`), noteTemplate)}
      </ul>
    </section>
  `);
}, new MethodInfo("Notes", [["arg0", unit_type]], class_type("Lit.TemplateResult")));

