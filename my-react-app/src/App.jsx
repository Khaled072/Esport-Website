import { useState, useEffect } from 'react'

function App() {

    useEffect(()=> {
        console.log(import.meta.env.REACT_API_URL)
    }, [])

    return {

    }
    

}

export default App