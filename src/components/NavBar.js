import React,{Component} from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css'

import logo from '../assets/logo.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'


export class NavBar extends Component {

    render(){
        return (
        <div className="nav-contenedor">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="60"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="navbar-nav">

                        <Nav.Link href='/barreras'>Barreras</Nav.Link>

                        <Nav.Link href='/sillas'>Sillas</Nav.Link>

                        <NavDropdown title="Estilo Industrial" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/industrial">Bancos Vestuario</NavDropdown.Item>
                            <NavDropdown.Item href="/industrial">Bibloteca Estanteria</NavDropdown.Item>
                            <NavDropdown.Item href="/industrial">Escritorio</NavDropdown.Item>
                            <NavDropdown.Item href="/industrial">Taburetes</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href='/contacto'>Contacto</Nav.Link>

                    </Nav>
                </Navbar.Collapse>

                <div className="iconos">
                    <a href=""><img alt="" src={instagram}></img></a>
                    <a href=""><img alt="" src={facebook}></img></a>
                    <a href=""><img alt="" src=""></img></a>
                </div>
            </Navbar>
        </div> 
        )
    }
    
}

export default NavBar

