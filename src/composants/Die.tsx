import { useCallback, useState } from "react"

const Dis  = (props: {value: number, onRoll:Function}) => {

    const [value, SetValue] = useState(Math.floor(Math.random()* 7))

    const click_alea = useCallback(() => {
        const rand = Math.floor(Math.random()* 7)
        props.onRoll(rand) 
        SetValue(rand)
    }, [])

    return (
        <div className="Dis" onClick= {click_alea}> 
            <p className="Roll">Valeur de l'enfant: {value}</p>
        </div>
    )
}

export default Dis
