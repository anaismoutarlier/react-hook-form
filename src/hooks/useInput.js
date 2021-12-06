import { useState } from 'react'

const useInput = initialValue => {
    const [state, setState] = useState(initialValue)

    //FUNCTIONS______________
    const handleChange = e => setState({ ...state, [e.target.name]: e.target.value })

    return {
        state,
        bind: {
            onChange: handleChange,
            style: {
                backgroundColor: initialValue?.color || '#469d89'
            }
        }
    }
}

export default useInput