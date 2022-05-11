[<RequireQualifiedAccess>]
module Components.Counter

open Lit

[<LitElement("flit-counter")>]
let private Counter () =
  let (_,props) =
    LitElement.init
      (fun config ->
        config.props <- {| initial = Prop.Of(0, attribute = "initial") |})

  let count, setCount = Hook.useState props.initial.Value

  html
    $"""
    <p>{count}</p>
    <fluent-button @click={fun _ -> setCount (count + 1)}>Increment</fluent-button>
    <fluent-button @click={fun _ -> setCount (count - 1)}>Decrement</fluent-button>
    <fluent-button @click={fun _ -> setCount (props.initial.Value)}>Reset</fluent-button>
  """

let register () = ()
