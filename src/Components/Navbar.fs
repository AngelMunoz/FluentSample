[<RequireQualifiedAccess>]
module Components.Navbar

open Lit
open Browser.Types
open Types

[<LitElement("flit-navbar")>]
let private NavBar () =

  LitElement.init () |> ignore

  let goback (ev: Event) =
    let evt =
      createEvent
        "go-back"
        {| bubbles = true
           cancelable = true
           composed = true |}

    ev.target.dispatchEvent (evt)

  let gotoPage page (ev: Event) =
    let evt =
      createCustomEvent
        "go-to-page"
        {| bubbles = true
           cancelable = true
           composed = true
           detail = page |}

    ev.target.dispatchEvent evt

  html
    $"""
    <fluent-button @click={goback}>Back</fluent-button>
    <fluent-button @click={gotoPage Page.Home}>Home</fluent-button>
    <fluent-button @click={gotoPage Page.Notes}>Notes</fluent-button>
  """

let register () = ()
