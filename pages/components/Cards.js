import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonWhatsApp, { openWhatsApp } from '../components/WhatsApp'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
import Gallery from '../components/GalleryCard'
import { useEffect, useState } from 'react'

function Cards({ propierties }) {
    const [filter, setFilter] = useState([])
    const [sale, defineSale] = useState(null)

    const setSale = (param) => {
        if(sale == param) {
            defineSale(null)
        } else {
            defineSale(param)
        }
    }

    useEffect(() => {
        let temp = propierties
        if(sale != null) {
            temp = temp?.filter((element) => {
                if (element.sale == sale) return element
            })
        }
        setFilter(temp)
    }, [sale, setFilter])
    return (
        <Container>
            <Title> Imóveis Disponíveis 
                <WrapperButton>
                    <BrownButton variant="secondary" onClick={() => setSale(false)}>Alugar</BrownButton>
                    <BrownButton variant="secondary" onClick={() => setSale(true)}>Comprar</BrownButton>
                </WrapperButton>
            </Title>
            <Properties>
                {filter?.map((propiertie, i) => (
                    <StyledCard key={i}>
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
                            <Button variant="outline-secondary" onClick={openWhatsApp} block>
                                <FontAwesomeIcon icon={faWhatsapp} /> Entre em Contato
                            </Button >
                        </Card.Footer>
                    </StyledCard>
                ))}
                <span id="services" />
            </Properties>
        </Container>
    )
}

const WrapperButton = styled.div`
    display: flex;
    justify-content: center;
    gap: .5rem;
`;

const BrownButton = styled(Button)`
    background-color: rgb(168, 156, 132);
    border: 0;
`;

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

const Title = styled.h4`
    display: flex;
    justify-content: center;
    gap: 1rem;
    text-align: center;
    margin: 2rem auto;
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