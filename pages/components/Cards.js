import { Row, Col, Card, Button } from 'react-bootstrap'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'

function Cards() {
    const [propierties, setProperties] = useState([])
    useEffect(async () => {
        const response = await axios.get('api/properties')
        setProperties(response.data)
    })

    return (
        <Row md={4} style={styles.container}>
            {propierties.map((propiertie, i) => (
            <Col>
                <Card style={{ width: '350px', margin: '0 auto', marginBottom: '1rem' }}>
                    <Image src={propiertie.url} width={100} height={300} />
                    <Card.Body>
                        <Card.Title>
                            {propiertie.title}
                            <span style={styles.sale}>
                                { propiertie.sale ? '(A venda)' : '(Alugar)'}
                            </span>
                        </Card.Title>
                        <Card.Text> {propiertie.details} </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-secondary" block>
                            <FontAwesomeIcon icon={faWhatsapp} /> Entre em Contato
                        </Button >
                    </Card.Footer>
                </Card>
            </Col>
            ))}
        </Row>
    )
}

const styles = {
    container: {
        padding: '0 1.5rem'
    },
    sale: {
        fontSize: '1rem',
        marginLeft: '0.2rem',
        color: 'rgba(0, 0, 0, 0.70)'
    }
}

export default Cards