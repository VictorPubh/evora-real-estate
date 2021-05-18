import React, { useEffect, useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import Header from './components/dashboard/Header'
import FormProperties from './components/dashboard/Form'
import Listing from './components/Listing'
import StoreProvider, { useStore } from './context/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'basscss'

function Dashboard() {
    const { tab, setTab, cleanForm } = useStore()

    useEffect(() => {
        if (tab === 1) {
            cleanForm()
        }
    }, [tab])
    
    return (
        <React.Fragment>
            <Header />
            <Tabs activeKey={tab} onSelect={(k) => setTab(k)}>
                <Tab eventKey={1} title="Criar Imóvel">
                    <FormProperties action="new" />
                </Tab>
                <Tab eventKey={2} title="Imóveis">
                    <Listing />
                </Tab>
                <Tab eventKey={3} title="Editar Imóveis" disabled>
                    <FormProperties action="edit" />
                </Tab>
            </Tabs>
        </React.Fragment>
    )
}

export default Dashboard