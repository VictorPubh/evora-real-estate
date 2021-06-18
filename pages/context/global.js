import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {
    const [items, setItems] = useState([])
    const [currentSlider, setCurrentSlider] = useState(null)

    return(
        <GlobalContext.Provider value={{
            items,
            setItems,
            currentSlider,
            setCurrentSlider
        }}>{ children }</GlobalContext.Provider>
    )
}

export function useGlobal() {
    const contex = useContext(GlobalContext)
    const { items, setItems, currentSlider, setCurrentSlider } = contex

    return {
        items,
        setItems,
        currentSlider,
        setCurrentSlider
    }
}