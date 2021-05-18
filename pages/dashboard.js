import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Tabs, Tab } from 'react-bootstrap'
import Header from './components/dashboard/Header'
import Properties from './components/dashboard/Properties'
import Listing from './components/Listing'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'basscss'
import axios from 'axios'

function Dashboard() {
    const router = useRouter()
    const query = router.query || null
    const [key, setKey] = useState(1)

    useEffect(() => {
        console.log(query)
        if (query) {
            setKey(3)
        }
    }, [])
    
    return (
        <>
            <Header />
            <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey={1} title="Criar Imóvel">
                    <Properties ID="new1" />
                </Tab>
                <Tab eventKey={2} title="Imóveis">
                    <Listing />
                </Tab>
                <Tab eventKey={3} title="Editar Imóveis" disabled>
                    <Properties ID="new2" />
                </Tab>
            </Tabs>
        </>
    )
}

export default Dashboard