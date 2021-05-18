import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


function Header() {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb1">
    <Navbar.Brand>Dashboard</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#properties">Imóveis</Nav.Link>
        <Nav.Link href="#services">Serviços</Nav.Link>
        <Nav.Link href="#carousel">Carrossel</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Header