import Image from 'next/image'

import { Row, Col, Form, InputGroup, FormControl, Button, Badge } from 'react-bootstrap'
import { isMobile } from 'react-device-detect'

// Components
import Header from './components/Header'
import Cards from './components/Cards'
import Gallery from './components/Gallery'
import Logotipo from '../public/images/logo-black.svg'
import Metodology from '../pages/components/Metodology'
import Load from '../pages/components/Load'
import History from './components/History'

import GlobalProvider from './context/global'
import { useEffect, useState } from 'react'
import { useStore } from './context/store'
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios'
import styled from 'styled-components'
import ButtonWhatsApp, { openWhatsApp } from './components/WhatsApp'

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Loading = styled(Load)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Anchor = styled.span``;
const Footer = styled.div`
  width: 100%;
  justify-content: center;
`;

const Services = styled.div`
  background-color: rgb(168, 156, 132);
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  color: white;
  padding: 1.2rem;
  margin: 1.25rem auto;
`;

const Flex = styled.div`
  background-color: rgb(245, 245, 242);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  margin-top: 2.2rem;
`;

const FText400 = styled.p``;
const FText500 = styled.p`
  font-weight: 500;
`;

const FooterText = styled.div`
  margin: 0 2rem;
`;

export default function Home() {
  const [carousel, setCarousel] = useState([])

  const {
    propierties,
    setPropierties,
    loading,
    setLoading
  } = useStore()
  
  useEffect(async () => {
    try {
        const { data } = await axios.get('api/properties')
        setPropierties(data)
        setLoading(false)
    } 

    finally {
        console.log(propierties)
    }
  }, [])
  
  useEffect(async () => {
    try {
        const { data } = await axios.post('api/carousel', { isMobile })
        setCarousel(data)
    } 

    finally {
        console.log(propierties)
    }
  }, [])

  return (
    <Container>
      { !loading ?
      <GlobalProvider>
        <ButtonWhatsApp />
        <main>
          <Header />
          <Gallery items={carousel} />
          <Cards propierties={propierties} />
          <Services>
            <li>Assessoria</li>
            <li>Compra/Venda</li>
            <li>Avaliação</li>
            <li>Locação</li>
            <li>Reformas</li>
            <li>Arquitetura</li>
            <li>Engenharia</li>
            <li>Construção</li>
            <li>Documentação</li>
          </Services>
        </main>

        <Footer>
          <Anchor id="history" />
          <History />
            <Anchor id="properties" />
          <Metodology />
          <Flex>
            <Image src={Logotipo} width={200} height={200}/>
            <FooterText>
              <FText500>Rua Eng. Rebouças Número: 968 Centro / CEP: 85851190</FText500>
              <FText400>Foz do Iguaçu, Paraná/PR | CNPJ: 41.886.696/0001-82</FText400>
            </FooterText>
          </Flex>
        </Footer>
      </GlobalProvider> : <Loading /> }
    </Container>
  )
}