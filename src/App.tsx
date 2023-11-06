import { useMemo, useState } from "react"
import Dis from "./composants/Die"
import Hello_test from "./composants/Hello_test"

function App() {

  const [diceValues,P_SetValue] = useState([0,0,0])

  const sum = useMemo(() => {
    return diceValues[0] + diceValues[1] + diceValues[2]
  },[diceValues]) 

  const numberChange = (pos: number, newvalue1:number) =>{
    P_SetValue( prev => {
      let newvalues = [...prev]
      newvalues[pos] = newvalue1
      return newvalues
    })
  };
  
  return (
    <>
      <div className="div_hello">
        <Hello_test/>
        <p>Valeur du parent_1: {diceValues[0]}</p>
        <p>Valeur du parent_2: {diceValues[1]}</p>
        <p>Valeur du parent_3: {diceValues[2]}</p>
      </div>

      {diceValues.map((_,i) => (
        <Dis key={i} onRoll={(newVal) => numberChange(i, newVal)} />
      ))}

      <p>{diceValues[0]} + {diceValues[1]} + {diceValues[2]} = {sum} | [ {diceValues.join(', ')} ]</p>
    </>
  )
}

export default App
