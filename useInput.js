import { useState } from 'react'

const useInput = initialValue => {
    const [state, setState] = useState(initialValue)

    const handleChange = e => setState({ ...state, [e.target.name]: e.target.value })

    return {
        state,
        bind: { 
            onChange: handleChange
        }
    }
}

export default useInput