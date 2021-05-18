import React, { createContext, useContext, useState } from 'react'

export const StoreContext = createContext({})

export default function StoreProvider({ children }) {
    const [tab, setTab] = useState(1)

    // Form Context
    const [formID, setFormID] = useState()
    const [formTitle, setFormTitle] = useState()
    const [formDetails, setFormDetails] = useState()
    const [formSale, setFormSale] = useState(false)
    const [listImages, setListImages] = useState([])

    const cleanForm = () => {
        setFormID('')
        setFormTitle('')
        setFormDetails('')
        setFormSale(false)
        setListImages([])
    }

    return <StoreContext.Provider
        value={{
            tab,
            setTab,
            formID,
            setFormID,
            formTitle,
            setFormTitle,
            formDetails,
            setFormDetails,
            formSale,
            setFormSale,
            listImages,
            setListImages,
            cleanForm
        }}>{children}</StoreContext.Provider>
}

export function useStore() {
    const context = useContext(StoreContext)   

    if (!context) throw new Error("useGenericContext must be used within a Provider");
    const {
        tab, 
        setTab,
        formID,
        setFormID,
        formTitle,
        setFormTitle,
        formDetails,
        setFormDetails,
        formSale,
        setFormSale,
        listImages,
        setListImages,
        cleanForm
    } = context

    return {
        tab, 
        setTab,
        formID,
        setFormID,
        formTitle,
        setFormTitle,
        formDetails,
        setFormDetails,
        formSale,
        setFormSale,
        listImages,
        setListImages,
        cleanForm
    }
}
