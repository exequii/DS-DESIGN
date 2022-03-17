import React,{Component} from 'react'
import "./css/navbar.css"
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
                        id="logo"
                    />{' '}
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="navbar-nav">

                        <Nav.Link href='/'>Home</Nav.Link>

                        <Nav.Link href='/sillas'>Sillas</Nav.Link>

                        <NavDropdown title="Estilo Industrial" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/industrial?bancos">Bancos Vestuario</NavDropdown.Item>
                            <NavDropdown.Item href="/industrial?biblotecas">Bibloteca Estanteria</NavDropdown.Item>
                            <NavDropdown.Item href="/industrial?mesas">Escritorios y Mesas</NavDropdown.Item>
                            <NavDropdown.Item href="/industrial?taburetes">Taburetes</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href='/contacto'>Contacto</Nav.Link>

                    </Nav>
                </Navbar.Collapse>

                <div className="iconos">
                    <a href="https://wwww.instagram.com/design_eds/" target="_blank" rel="noopener noreferrer"><img alt="" src={instagram}></img></a>
                    <a href="https://wwww.facebook.com/ds.design.fabrica/" target="_blank" rel="noopener noreferrer"><img alt="" src={facebook}></img></a>
                </div>
            </Navbar>
        </div> 
        )
    }
    
}

export default NavBar

