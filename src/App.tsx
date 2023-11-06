import { useState } from "react"
import Dis from "./composants/Die"
import Hello_test from "./composants/Hello_test"

function App() {

  const [P_value,P_SetValue] = useState(0)

  const aaa = (newValue:number) => { 
    P_SetValue(newValue);
    []
  };

  return (
    <>
      <div className="div_hello">
        <Hello_test/>
        <p>Valeur du parent: {P_value}</p>
      </div>
      <Dis value={P_value} onRoll={aaa}/>
    </>
  )
}

export default App
