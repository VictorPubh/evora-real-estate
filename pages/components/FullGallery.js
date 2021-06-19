import styled from "styled-components"
import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'
import { useStore } from '../context/store'
import { useGlobal } from '../context/global'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"



const FullGalery = () => {
    const [ current, setCurrent ] = useState()
    const { propierties, currentSlider, setCurrentSlider } = useStore()
    useEffect(() => {
        const found = propierties.find(element => element._id === currentSlider)
        setCurrent(found)
    }, [propierties, setCurrent])
    
    const onClose = (e) => {
        e.stopPropagation()
        setCurrentSlider(null)
    }

    return (
        <Container onClick={(e) => onClose(e)}>
            <Box>
                <Carousel fade>
                { current?.images.map((value, index) => (
                    <CarroucelItem key={index}>
                        <Image
                            src={value}
                            layout="fill"
                        />
                    </CarroucelItem>
                ))}  
                </Carousel>
                <CarroucelInfo>
                    <FlexSpaceBetween>
                        <FlexColumn>
                            <Title>R$ { current?.amount }</Title>
                        </FlexColumn>
                        <CloseContainer>
                            <FontAwesomeIcon icon={faTimes} onClick={() => setCurrentSlider(null)} />
                        </CloseContainer>
                    </FlexSpaceBetween>
                </CarroucelInfo>
            </Box>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(70, 70, 70, .75);
    z-index: 999;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const CarroucelInfo = styled.div`
    display: flex;
    width: 100%;
`;

const CarroucelItem = styled(Carousel.Item)`
    width: 100%;
    height: 60vh;
    z-index: 0;

    @media (max-width: 800px) {
        height: 30vh
    }
`;

const Flex = styled.div`
    display: flex;
`;

const FlexSpaceBetween = styled(Flex)`
    width: 100%;
    justify-content: space-between;
`;

const FlexColumn = styled(Flex)`
    flex-direction: column;
`;

const Title = styled.h2`
    color: white;
    margin: .75rem;

    @media (max-width: 800px) {
        font-size: 1.5rem;
    }
`;

const CloseContainer = styled.div`
    float: right;
    margin: .75rem 0;
    margin-right: 1rem;
    font-size: 1.5rem;
    color: white;
`;

const Box = styled.div`
    width: 50rem;

    @media (max-width: 800px) {
        width: 90%;
    }
`;
export default FullGalery