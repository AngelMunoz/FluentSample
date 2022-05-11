import { provideFluentDesignSystem as provideFluentDesignSystem_1, allComponents as allComponents_1 } from "@fluentui/web-components";
import { register } from "./Components/Counter.fs.js";
import { register as register_1 } from "./Components/Navbar.fs.js";
import { start } from "./App.fs.js";
import "./styles.css";


export const allComponents = allComponents_1;

export const provideFluentDesignSystem = provideFluentDesignSystem_1;

provideFluentDesignSystem().register(allComponents);

register();

register_1();

start();

