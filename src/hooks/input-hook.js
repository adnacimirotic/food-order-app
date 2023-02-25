import { useState } from "react"

const useInput = (validateValue)=>{
    const [value, setValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validateValue(value);
    const hasErrors = !valueIsValid && isTouched

    const changeHandler = (event)=>{
        setValue(event.target.value)
    }
    const blurHandler = ()=>{
        setIsTouched(true)
    }
    const reset = ()=>{
        setValue("")
        setIsTouched(false)
    }

    return{
        value,
        valueIsValid,
        hasErrors,
        changeHandler,
        blurHandler,
        reset,
    }

}
export default useInput