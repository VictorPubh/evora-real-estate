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
        setLoading(false)
    } 

    finally {
        console.log(propierties)
    }
  }, [])

  useEffect(() => {
    setLoading(loading)
  }, [loading])

  return (
    <Container>
      { loading ? <Loading /> :
      <GlobalProvider>
        <ButtonWhatsApp />
        <main>
          <Header />
          <Gallery items={carousel} />
            <Anchor id="history" />
          <History />
            <Anchor id="properties" />
          <Services>
            <Badge variant="dark">Assessoria </Badge>
            <Badge>Compra/Venda </Badge>
            <Badge variant="dark">Avaliação</Badge>
            <Badge>Locação</Badge>
            <Badge variant="dark">Reformas Arquitetura</Badge>
            <Badge>Engenharia</Badge>
            <Badge variant="dark">Construção</Badge>
            <Badge>Documentação</Badge>
          </Services>
          <Cards propierties={propierties} />
        </main>

        <Footer>
          <Metodology />
          <Center>
            <Image src={Logotipo} width={100} height={100}/>
            <FooterText>
              <p>Rua Eng. Rebouças Número: 968 Centro / Cep: 85851190</p>
              <p>Foz do Iguaçu, Paraná/PR | CNPJ: 41.886.696/0001-82</p>
            </FooterText>
          </Center>
        </Footer>
      </GlobalProvider>
      }
    </Container>
  )
}

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
  font-size: 1.5rem;
  text-align: center;
  margin: 1.25rem auto;
`;

const Center = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  font-size: 12px;
  margin-top: 3.5rem;
`;

const FooterText = styled.div`
  margin-top: 1.5rem;
`;