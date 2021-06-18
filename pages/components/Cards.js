import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonWhatsApp, { openWhatsApp } from '../components/WhatsApp'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
import Gallery from '../components/GalleryCard'
import FullGalery from '../components/FullGallery'
import { useEffect, useState } from 'react'
import { faMap, faMapPin } from '@fortawesome/free-solid-svg-icons'
import { useGlobal } from '../context/global'

function Cards({ propierties }) {
    const { currentSlider, setCurrentSlider } = useGlobal()
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
            { (currentSlider != null) ? (
                <FullGalery />
            ) : null }
            <Properties>
                { (filter.length > 0) ? (
                    filter?.map((propiertie, i) => (
                        <StyledCard key={i} onClick={() => setCurrentSlider(propiertie._id)}>
                            <Gallery items={propiertie.images} />
                            <Card.Body>
                                <Card.Title>
                                    <PropiertieTitle>{propiertie.title}</PropiertieTitle>
                                    <TextSale>
                                        { propiertie.sale ? '(A venda)' : '(Alugar)'}
                                    </TextSale>
                                </Card.Title>
                                <Amount> R$ {propiertie.amount}</Amount>
                                <Card.Text> {propiertie.details} </Card.Text>
                                <Address>
                                    <AddressIcon icon={faMapPin} />
                                    <AdressText>{ propiertie.address }</AdressText>
                                </Address>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="outline-secondary" onClick={openWhatsApp} block>
                                    <FontAwesomeIcon icon={faWhatsapp} /> Entre em Contato
                                </Button >
                            </Card.Footer>
                        </StyledCard>
                    ))
                ) : <Nothing>Nenhum disponível</Nothing> }
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

const Amount = styled.h3`

`;

const Nothing = styled.div`
    margin: 8rem;
    font-weight: bold;
    opacity: 0.5;
    width: 100%;
    text-align: center;
`

const PropiertieTitle = styled.span`
`;

const AddressIcon = styled(FontAwesomeIcon)`
    font-size: 1.25rem;
`;

const AdressText = styled.span`
    text-transform: capitalize;
    display: inline-block;
`;

const Address = styled.span`
    font-color: rgb(120, 120, 120);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .85rem;
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