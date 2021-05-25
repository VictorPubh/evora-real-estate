import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
import Gallery from '../components/GalleryCard'

function Cards({ propierties }) {
    return (
        <Container>
            <h3 className="center m3"> Imóveis Disponíveis </h3>
            <Properties>
                {propierties?.map((propiertie, i) => (
                    <StyledCard>
                        <Gallery items={propiertie.images} />
                        <Card.Body>
                            <Card.Title>
                                {propiertie.title}
                                <TextSale>
                                    { propiertie.sale ? '(A venda)' : '(Alugar)'}
                                </TextSale>
                            </Card.Title>
                            <Card.Text> {propiertie.details} </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="outline-secondary" block>
                                <FontAwesomeIcon icon={faWhatsapp} /> Entre em Contato
                            </Button >
                        </Card.Footer>
                    </StyledCard>
                ))}
            </Properties>
        </Container>
    )
}

const Container = styled.div`
    padding: 0 2rem;
`;

const Properties = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const StyledCard = styled(Card)`
    width: 18.75rem;
    margin: 0 auto;
    margin-bottom: 2rem;
`;

const TextSale = styled.span`
    font-size: 1rem;
    margin-left: .2rem;
    float: right;
    color: rgba(0, 0, 0, .7);
`;

const styles = {
    sale: {
        fontSize: '1rem',
        marginLeft: '0.2rem',
        color: 'rgba(0, 0, 0, 0.70)'
    },
    card: {
        width: '100%',
        minHeight: '100%',
        margin: ' auto',
        marginBottom: '1rem'
    }
}

export default Cards