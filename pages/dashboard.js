import { Tabs, Tab } from 'react-bootstrap'
import Header from './components/dashboard/Header'
import Properties from './components/dashboard/Properties'
import Listing from './components/Listing'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'basscss'

function Dashboard() {
    return (
        <>
            <Header />
            <Tabs>
                <Tab eventKey="new" title="Criar Imóvel">
                    <Properties />
                </Tab>
                <Tab eventKey="properties" title="Imóveis">
                    <Listing />
                </Tab>
                <Tab eventKey="editProperties" title="Editar Imóveis" disabled>
                    
                </Tab>
            </Tabs>
        </>
    )
}

export default Dashboard