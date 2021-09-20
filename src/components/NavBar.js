import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import { signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
      <NavItem>
        <Link className="nav-link" to="/myStuff">My Stuff</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/addNew">New</Link>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Hoarder</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          {user && authenticated()}
          { user !== null
            && <NavItem className='auth-btn-container'>
                {
                  user ? <Button color='danger' onClick={signOutUser}>SignOut?</Button>
                    : ''
                }
              </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
NavBar.propTypes = {
  user: PropTypes.any
};
export default NavBar;
