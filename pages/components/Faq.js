import { Accordion, Card } from 'react-bootstrap'
import styled from 'styled-components'
import "basscss"

function Faq() {
    return (
        <Container>
            <Accordion defaultActiveKey="0" className="mb4">
                <h3 className="center mb3"> Perguntas Frequentes </h3>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle style={styles.Button} eventKey="0">
                        Ipsum Dollor Quennut?
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle style={styles.Button} eventKey="1">
                        Ipsum Dollor Quennut?
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
    )
}

const Container = styled.div``;

const styles = {
    Button: {
        color: 'rgba(168, 156, 132, 1)',
        border: '0',
        backgroundColor: 'transparent',
        textAlign: 'left',
        width: '100%'
    }
}

export default Faq