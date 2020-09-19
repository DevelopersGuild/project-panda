import React from "react"
import { Link } from "gatsby"

export default function () {
  return (
    <nav className="navbar-main navbar navbar-expand-lg navbar-light">
      {/* <a to="/" className="navbar-brand">
        <img
          src="/static/media/Main-Logo.0475c482.svg"
          alt="Logo"
          width={30}
          height={30}
          className="d-inline-block align-top"
        />
      </a> */}
      <button
        aria-controls="basic-navbar-nav"
        type="button"
        aria-label="Toggle navigation"
        className="navbar-toggler collapsed"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="navbar-collapse collapse" id="basic-navbar-nav">
        <div
          className="mr-auto navbar-nav"
          style={{ color: "black", fontWeight: "bold" }}
        >
          <div className="nav-item">
            <a className="nav-link zendo-nav-link" to="/about">
              About
            </a>
          </div>
          <div className="nav-item">
            <Link className="nav-link zendo-nav-link" to="/contributing">
              Contributing
            </Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link zendo-nav-link" to="/contact">
              Contact
            </Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link zendo-nav-link" to="/roles">
              Roles
            </Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link zendo-nav-link" to="/constitution">
              Constitution
            </Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link zendo-nav-link" to="/lab">
              The Lab
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
