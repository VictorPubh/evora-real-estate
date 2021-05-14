import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Logotipo from '../../public/images/logo-text.svg'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

export default function Header() {
    const [list, setList] = useState([])

    useEffect(async () => {
        const response = await axios.get('api/menu')
        setList(response.data)
    })
    const items = []

    const goRouter = (path) => {
        router.push(path)
    }

    for (const [index, value] of list.entries()) {
        items.push(
            <Nav.Link style={styles.link} href={'#' + value.path}>
                { value.title }
            </Nav.Link>);
    }
    return (
        <Navbar style={styles.navbar} expand="lg" variant="dark">
            <Navbar.Brand href="#home" style={styles.brand}>
                <Image src={Logotipo} width={100} height={40} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    { items }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const styles = {
    navbar: {
        width: '100%',
        backgroundColor: 'rgba(168, 156, 132, 1)',
        position: 'fixed',
        top: '0',
        color: 'white',
        zIndex: '2',
    },
    link: {
        textAlign: 'center'
    },
    brand: {
        margin: '0 0 0 0.7rem'
    }
}