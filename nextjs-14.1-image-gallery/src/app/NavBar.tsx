"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {Container, Nav, NavDropdown, Navbar} from "react-bootstrap";
export default function NavBar() {
    // const router = useRouter(); // navigate through the app
    const pathname = usePathname(); // find the pathname
    // const searchParams = useSearchParams(); // find search params
    
    return(
        <Navbar bg ="primary" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Container>
                <Navbar.Brand as={Link} href="/">
                   NextJS 14.1 Image Gallery
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar"/>
                <Navbar.Collapse id="main-navbar">
                    {/* <Nav>
                        <Nav.Link as={Link} href="/hello" active={pathname === "/hello"}>Hello</Nav.Link>
                    </Nav> */}
                    <Nav>
                        <Nav.Link as={Link} href="/static" active={pathname === "/static"}>Static Loading</Nav.Link>
                        <Nav.Link as={Link} href="/dynamic" active={pathname === "/dynamic"}>Dynamic Loading</Nav.Link>
                        <Nav.Link as={Link} href="/isr" active={pathname === "/isr"}>Incremental Static Regeneration Loading</Nav.Link>
                        <NavDropdown title ="Topics" id="topics-dropdown">
                            <NavDropdown.Item as={Link} href="/topics/health">
                                Health
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/topics/fitness">
                                Fitness
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/topics/coding">
                                Coding
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}