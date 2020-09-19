import React from "react"
import { Link } from "gatsby"
import { Nav, Navbar } from "react-bootstrap"

export default function () {
  return (
    <Navbar className="navbar-main" variant="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ color: "black", fontWeight: "bold" }}>
          <Nav.Item>
            <Link className="nav-link zendo-nav-link" to="/">
              <strong>Developers Guild</strong>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link zendo-nav-link" to="/about">
              About
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link zendo-nav-link" to="/contributing">
              Contributing
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link zendo-nav-link" to="/constitution">
              Constitution
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link zendo-nav-link" to="/lab">
              The Lab
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
