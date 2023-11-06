import { useCallback, useEffect, useState } from "react"

const Dis  = (props: {value: number, onRoll:Function}) => {

    const [value, SetValue] = useState(Math.floor(Math.random()* 7))

    useEffect(() => {
        props.onRoll(value)
      }, [value]);

    const click_alea = useCallback(() => {
        const rand = Math.floor(Math.random()* 7)
        SetValue(rand)
    }, [])

    return (
        <div className="Dis" onClick= {click_alea}> 
            <p className="Roll">Valeur du dé_1: {value}</p>
        </div>
    )
}

export default Dis