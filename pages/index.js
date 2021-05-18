import Image from 'next/image'

import { Row, Col, Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import bgBox from '../public/images/quadrado.png'
import { isMobile } from 'react-device-detect'

// Components
import Header from './components/Header'
import Cards from './components/Cards'
import Gallery from './components/Gallery'
import Logotipo from '../public/images/logo-black.png'
import Faq from '../pages/components/Faq'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalProvider from './context/global'

export default function Home() {
  return (
    <GlobalProvider>
      <main>
        <Header />
        <Gallery />
      <div style={styles.options}>
        <span style={styles.primary}>Alugar</span>
        |
        <span style={styles.primary}>Comprar</span>
      </div>
      <Cards />
      <p style={styles.primary}>Ver todos [...]</p>
      </main>

      <footer style={styles.footer}>
        <Faq />
        <Row>
          <Col sm={8}>
            <div style={styles.topbar}>
              Metodologia da Assesoria Imobiliária Évora
            </div>
            <Row style={{ margin: '0 auto' }}>
              <Col style={styles.bgBox}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center', width: '100%', height: '100%' }}>
                  <h2>1.</h2>
                  <h4 style={styles.details}> Preencha sua ficha 
                  e faremos uma busca 
                  para encontrar o 
                  seu imóvel ideal. </h4>
                </div>
              </Col>
              <Col style={styles.bgBox}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center', width: '100%', height: '100%' }}>
                  <h2>2.</h2>
                  <h4 style={styles.details}>Encontramos seu 
                  imóvel e mediamos 
                  a compra grantindo 
                  sucesso em sua nova 
                  aquisição. </h4>
                </div>
              </Col>
              <Col style={styles.bgBox}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center', width: '100%', height: '100%' }}>
                  <h2>3.</h2>
                  <h4 style={styles.details}>Fializamos toda a
                  negociação com total
                  garantia, sigilo e
                  muita qualidade até
                  a entrega das chaves
                  e documentação.</h4>
                </div>
              </Col>
            </Row>
          </Col>
            <Col style={styles.mobileBox}>
              <div style={ { padding: '20px' } }>
                <h3 style={ { textAlign: 'center', margin: '0.75rem' }}> Contato </h3>
                <InputGroup style={styles.inputGroupForm}>
                  <h5 style={{ marginRight: '0.25rem', fontSize: '1rem' }}> Nome: </h5>
                  <FormControl style={styles.input} />
                </InputGroup>
                <InputGroup style={styles.inputGroupForm}>
                  <h5 style={{ marginRight: '0.25rem', fontSize: '1rem'}}> WhatsApp: </h5>
                  <FormControl style={styles.input} />
                </InputGroup>
                <InputGroup style={styles.inputGroupForm}>
                  <h5 style={{ marginRight: '0.25rem', fontSize: '1rem'}}> E-mail: </h5>
                  <FormControl style={styles.input} />
                </InputGroup>
                <h5 style={ { margin: '0 0.5rem' }}> Assunto: </h5>
                <InputGroup style={styles.inputGroupForm}>
                  <Form.Control as="textarea" style={styles.input} rows={3} />
                </InputGroup>
                <Button variant="secondary" style={ { marginBottom: '2rem', float: 'right' }} size="sm">Enviar</Button>
              </div>
            </Col>
        </Row>
        <div style={ { width: '100%', display: 'flex', justifyContent: 'center' } }>
          <Image src={Logotipo} width={200} height={200}/>
        </div>
      </footer>
    </GlobalProvider>
  )
}

const styles = {
  inputGroupForm: {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    marginBottom: '0.5rem'
  },
  details: {
    fontSize: '14px'
  },
  input: {
    backgroundColor: 'rgba(168, 156, 132, 1)',
    color: 'white'
  },
  bgBox: {
    width: '200px',
    height: '400px',
    margin: '1rem',
    backgroundImage: 'url(' + bgBox + ')',
    backgroundSize: '100% 100%',
    padding: '50px'
  },
  webBox: {
    height: '500px',
    margin: '1rem',
    backgroundImage: 'url(' + bgBox + ')',
    backgroundSize: '100% 100%',
    margin: '6.6rem'
  },
  mobileBox: {
    margin: '0 auto',
    marginTop: '3rem',
    height: 'auto',
    maxWidth: '400px',
    margin: '1rem',
    backgroundImage: 'url(' + bgBox + ')',
    backgroundSize: '100% 100%'
  },
  options: {
    textAlign: 'center',
    padding: '2rem'
  },
  primary: {
    color: 'rgba(168, 156, 132, 1)',
    textAlign: 'center',
    margin: '1rem',
  },
  footer: {
    backgroundColor: 'rgb(228, 230, 229)',
    width: '100%',
    padding: '3.5rem'
  },
  topbar: {
    backgroundColor: 'rgba(168, 156, 132, 1)',
    color: 'white',
    textAlign: 'center',
    padding: '0.5rem',
    marginBottom: '0.75rem'
  }
}