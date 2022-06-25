import { Outlet, Link } from 'react-router-dom';
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap';

function Navigation() {
    return (
        <>
            <div>
                <Container>
                    <Navbar expand='lg'>
                        <Link to=''>
                            <Navbar.Brand
                                href='#home'
                                style={{ color: 'darkorange' }}
                            >
                                Shortly
                            </Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='me-auto'>
                                <Link to='/feature'>
                                    <Nav.Link href='#home'>Feature</Nav.Link>
                                </Link>
                                <Link to='/pricing'>
                                    <Nav.Link href='#link'>Pricing</Nav.Link>
                                </Link>
                                <NavDropdown
                                    title='Resources'
                                    id='basic-nav-dropdown'
                                >
                                    <Link to='/resource1'>
                                        <NavDropdown.Item href='#action/3.1'>
                                            Resource 1
                                        </NavDropdown.Item>
                                    </Link>
                                    <Link to='/resource2'>
                                        <NavDropdown.Item href='#action/3.2'>
                                            Resource 2
                                        </NavDropdown.Item>
                                    </Link>
                                    <Link to='/resource3'>
                                        <NavDropdown.Item href='#action/3.3'>
                                            Resource 3
                                        </NavDropdown.Item>
                                    </Link>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Link to='/login'>
                                    <Nav.Link href='#home'>Login</Nav.Link>
                                </Link>
                                <Link to='signup'>
                                    <Nav.Link href='#home'>SignUp</Nav.Link>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className='Outlet'>
                        <Outlet />
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Navigation;
