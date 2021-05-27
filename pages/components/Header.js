import Head from 'next/head'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Logotipo from '../../public/images/logo-text.svg'
import { Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { openWhatsApp } from './WhatsApp'

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const [list, setList] = useState([])

    useEffect(async () => {
        const response = await axios.get('api/menu')
        setList(response.data)
    }, [])

    return (
        <>
            <Head>
                <title>Évora Imóveis</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar
                expanded={expanded}
                style={styles.navbar}
                expand="lg"
                variant="dark">
                <Navbar.Brand href="#home" style={styles.brand}>
                    <Image src={Logotipo} width={100} height={40} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {list?.map((value, index) => (
                            <Nav.Link
                                style={styles.link}
                                href={'#' + value.path}
                                key={index}
                                onClick={() => setExpanded(false)}>
                                { value.title }
                            </Nav.Link>
                        ))}
                        <Nav.Link onClick={openWhatsApp}>
                            Contato <FontAwesomeIcon icon={faWhatsapp} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

const styles = {
    navbar: {
        width: '100%',
        backgroundColor: 'rgba(168, 156, 132, 1)',
        position: 'fixed',
        top: '0',
        color: 'white',
        zIndex: '24',
    },
    link: {
        textAlign: 'center'
    },
    brand: {
        margin: '0 0 0 0.7rem'
    }
}