import { Outlet, Link } from 'react-router-dom';
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap';

function Navigation() {
    return (
        <>
            <div>
                <Container>
                    <Navbar expand='lg'>
                        <Navbar.Brand
                            href='#home'
                            style={{ color: 'darkorange' }}
                        >
                            Shortly
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='me-auto'>
                                <Nav.Link href='#home'>Feature</Nav.Link>
                                <Nav.Link href='#link'>Pricing</Nav.Link>
                                <NavDropdown
                                    title='Resources'
                                    id='basic-nav-dropdown'
                                >
                                    <NavDropdown.Item href='#action/3.1'>
                                        Resource 1
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href='#action/3.2'>
                                        Resource 2
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href='#action/3.3'>
                                        Resource 3
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link href='#home'>Login</Nav.Link>
                                <Nav.Link href='#link'>SignUp</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Outlet className='outlet' />
                </Container>
            </div>
        </>
    );
}

export default Navigation;
