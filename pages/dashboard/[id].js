import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useStore } from '../context/store'
import Dashboard from '../dashboard'

function Propertie(){
    const router = useRouter()
    const { ID } = router.query
    const {
        setTab,
        setFormID,
        setFormTitle,
        setFormDetails,
        setFormSale,
        setListImages
     } = useStore()

    useEffect(async () => {
        const { data } = await axios.get('../api/ptest')
        const {
            _id,
            title,
            details,
            sale,
            images
        } = data

        setTab(3)
        setFormID(_id)
        setFormTitle(title)
        setFormDetails(details)
        setFormSale(sale)
        setListImages(images)
    }, [])

    return <Dashboard />
}

export default Propertie