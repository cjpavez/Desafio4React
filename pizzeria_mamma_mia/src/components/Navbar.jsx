import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1({ isLoggedIn, total, onNavigate, onLogout }){
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home" onClick={(e)=>{ e.preventDefault(); onNavigate?.('home'); }}>Pizzeria Mamma Mia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav className='boxMenu'>
                            <Nav.Link href="#pricing" onClick={(e)=>{ e.preventDefault(); onNavigate?.('home'); }}>🍕 Home</Nav.Link>
                        </Nav>
                        {isLoggedIn ? 
                        <Nav>
                            <Nav className='boxMenu'>
                                <Nav.Link href="#profile" onClick={(e)=>{ e.preventDefault(); onNavigate?.('profile'); }}>🔓 Profile</Nav.Link>
                            </Nav>
                            <Nav className='boxMenu'>
                                <Nav.Link href="#logout" onClick={(e)=>{ e.preventDefault(); onLogout?.(); }}>🔒 Logout</Nav.Link>
                            </Nav>
                        </Nav>
                        :
                        <Nav>
                            <Nav className='boxMenu'>
                                <Nav.Link href="#login" onClick={(e)=>{ e.preventDefault(); onNavigate?.('login'); }}>🔐 Login</Nav.Link>
                            </Nav>                  
                            <Nav className='boxMenu'>
                                <Nav.Link href="#register" onClick={(e)=>{ e.preventDefault(); onNavigate?.('register'); }}>🔐 Register</Nav.Link>                                
                            </Nav>  
                        </Nav> 
                        }    
                                                                     
                    </Nav>
                    <Nav className='boxTotal'>
                        <Nav.Link href="#deets" onClick={(e)=>{ e.preventDefault(); onNavigate?.('cart'); }}>{`🛒 Total: $${Number(total).toLocaleString('es-CL')}`}</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navbar1;