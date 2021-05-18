import axios from 'axios'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Table } from 'react-bootstrap'

function Listing() {
    const [propierties, setPropierties] = useState([])
    const [loading, setLoading] = useState(true)

    let Results

    useEffect(async () => {
        const response = await axios.get('api/properties')
        setPropierties(response.data)
    }, [])

    if(loading) {
        return (
            <div className="center m4">
               <FontAwesomeIcon icon={faSpinner} spin className="mr1"/> Carregando Imóveis
            </div>
        )
    } else {
        return (
            <Table striped bordered hover size="sm" className="mt2">
                <thead>
                <tr>
                    <th>Título</th>
                    <th>Descrição</th>
                    <th>A venda?</th>
                </tr>
                </thead>
                <tbody>
                {propierties.map((propiertie, i) => (
                    <tr key={i}>
                        <td> { propiertie.title } </td>
                        <td> { propiertie.details } </td>
                        <td> { propiertie.sale ? "Sim" : "Não" }</td>
                        <td>@mdo</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        )
    }
    return (
        <> { Result } </>
    )
}

export default Listing