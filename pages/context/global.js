import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {
    const [items, setItems] = useState([])

    return(
        <GlobalContext.Provider value={{
            items,
            setItems
        }}>{ children }</GlobalContext.Provider>
    )
}

export function useGlobal() {
    const contex = useContext(GlobalContext)
    const { items, setItems } = contex

    return {
        items,
        setItems
    }
}