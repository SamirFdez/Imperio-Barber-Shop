import React from "react";
import { Navbar,Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import navStyles from './nav.module.css'
import { FaRegAddressCard, FaSignOutAlt} from "react-icons/fa";


export const NavBarMenu = function() {

    return (    

     <>
     <Navbar style={{display: 'block', padding: '0'}} bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>

            <Navbar.Brand>
              <Link className={navStyles.navBarBrand} to='/'>Imperio Barber Shop</Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse className={navStyles.navigation} id="basic-navbar-nav">

                  <Nav className={navStyles.nav}>           
                      <Link className={navStyles.link} to='/'>
                      <FaRegAddressCard className={navStyles.IconoNavBar}/>             
                          Clientes
                      </Link>    

                      <Link className={navStyles.link} to='/'>
                      <FaRegAddressCard className={navStyles.IconoNavBar}/>             
                          Servicios
                      </Link>    

                      <Link className={navStyles.link} to='/'>
                        <FaRegAddressCard className={navStyles.IconoNavBar}/>
                          Productos
                        </Link>
                                 
                      <Link className={navStyles.link} to='/'>
                      <FaRegAddressCard className={navStyles.IconoNavBar}/>
                        Facturas
                      </Link>
                      
                      <Link className={navStyles.link} to='/login'>
                      <FaSignOutAlt className={navStyles.IconoNavBar}/>
                                
                      </Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
    </>
 )
}  