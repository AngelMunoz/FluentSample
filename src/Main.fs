module Main

open Components
open Fable.Core.JsInterop

importSideEffects "./styles.css"
let allComponents: obj = importMember "@fluentui/web-components"
let provideFluentDesignSystem: unit -> obj = importMember "@fluentui/web-components"

provideFluentDesignSystem()?register(allComponents)

// register your custom elements here
Counter.register ()
Navbar.register ()
App.start ()
