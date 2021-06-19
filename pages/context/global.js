import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {
    const [currentSlider, setCurrentSlider] = useState(null)

    return(
        <GlobalContext.Provider value={{
            currentSlider,
            setCurrentSlider
        }}>{ children }</GlobalContext.Provider>
    )
}

export function useGlobal() {
    const contex = useContext(GlobalContext)
    const { currentSlider, setCurrentSlider } = contex

    return {
        currentSlider,
        setCurrentSlider
    }
}