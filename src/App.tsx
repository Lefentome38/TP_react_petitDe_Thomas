import { useMemo, useState } from "react"
import Dis from "./composants/Die"
import Hello_test from "./composants/Hello_test"

function App() {

  const [P_value_1,P_SetValue_1] = useState(0)
  const [P_value_2,P_SetValue_2] = useState(0)
  const [P_value_3,P_SetValue_3] = useState(0)

  let [sum, setSum] = useState(0)
  
  const diceValues = [P_value_1, P_value_2, P_value_3]

  // for (let i = 0; i < diceValues.length; i++) {
  //   sum += diceValues[i]
  // }

  const aaa = (newValue:number) => { 
    P_SetValue_1(newValue);
    []
  };

  const aaa_1 = (newValue:number) => { 
    P_SetValue_2(newValue);
    []
  };

  const aaa_2 = (newValue:number) => { 
    P_SetValue_3(newValue);
    []
  };
  
  // const sum_1 = useMemo(() => {
  //   setSum(P_value_1 + P_value_2 + P_value_3)
  // let sum = 0
  // for(let i = 0; diceValues.length ;i++)
    // sum++
    // return sum
  // },[P_value_1, P_value_2, P_value_3])
  
  const sum_2 = useMemo(() => {
    return P_value_1 + P_value_2 + P_value_3
  },
  [ P_value_1, P_value_2, P_value_3])
  
  return (
    <>
      <div className="div_hello">
        <Hello_test/>
        <p>Valeur du parent_1: {P_value_1}</p>
        <p>Valeur du parent_2: {P_value_2}</p>
        <p>Valeur du parent_3: {P_value_3}</p>
      </div>

      <Dis value={P_value_1} onRoll={aaa}/>
      <Dis value={P_value_2} onRoll={aaa_1}/>
      <Dis value={P_value_3} onRoll={aaa_2}/>

      <p>{P_value_1} + {P_value_2} + {P_value_3} = {sum_2} | [ {diceValues.join(', ')} ]</p>

      {/* <table className="diceValues">
        <head>
          <tr>
            <th>...</th>
          </tr>
        </head>
        <body>
          <tr>
            <td>{P_value}</td>
            <td>{P_value}</td>
            <td>{P_value}</td>
            <td>{P_value}</td>
          </tr>
        </body>
      </table> */}
    </>
  )
}

export default App
