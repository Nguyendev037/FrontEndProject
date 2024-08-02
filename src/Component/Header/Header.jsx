import React, { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEnvelope,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";
import "./Header.css";

export default function Header() {

  const itemCartHeader = useSelector((state) => state.cart.cart);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(true);

  return (
    <>
      <div className="siteInfor">
        <div className="container">
          <div className="row d-flex align-items-center ">
            <div className=" col-lg-6 col-md-6 d-flex flex-row">
              <div className="" style={{ marginRight: "10px" }}>
                <FontAwesomeIcon icon={faPhone} className="mx-2" />
                <span>+00 1900 8897</span>
              </div>
              <div className="">
                <FontAwesomeIcon icon={faPaperPlane} className="mx-2" />
                <span>bestLiquid@gmail.com</span>
              </div>
            </div>
            <div className=" col-lg-6 col-md-6 d-flex justify-content-lg-end justify-content-md-end">
              <div className="social-icon d-flex">
                <div>
                  <a href="#" className="text-white mx-2 fs-4">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </div>
                <div>
                  <a href="#" className="text-white mx-2 fs-4">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
                <div>
                  <a href="#" className="text-white mx-2 fs-4">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="active"></NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

/*
<Navbar
        className={`navbar navbar-expand-lg navbar-expand-md header-container bg-dark ${
          isFixed ? "fixed-top" : ""
        }`}
      >
        <Container>
          <NavbarBrand href="/" className="logoIcon">
            <span className="text-left">Liquor</span>{" "}
            <span className="text-right">Store</span>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="collapse-container">
            <Nav navbar className="ms-auto mb-lg-0">
              <NavItem className="mx-2">
                <NavLink to="/" className="active nav-text">
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="mx-2">
                <NavLink to="/" className="nav-text">
                  Shop
                </NavLink>
              </NavItem>
              <NavItem className="mx-2">
                <NavLink to="/" className="nav-text">
                  About
                </NavLink>
              </NavItem>
              <NavItem className="mx-2">
                <NavLink to="/" className="nav-text">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem className="mx-2">
                <div className="order-lg-last btn-group">
                  <a
                    href=""
                    className="btn-cart dropdown-toggle dropdown-toggle-split"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="position-relative">
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        style={{ color: "rgba(255, 255, 255, 0.5)" }}
                      />
                      {itemCartHeader.length !== 0 ? (
                        <div className="position-absolute itemCurrent">
                          {itemCartHeader.length}
                        </div>
                      ) : (
                        ""
                      )}
                    </span>
                  </a>
                  <div className="dropdown-menu">
                    {itemCartHeader &&
                      itemCartHeader.map((item) => (
                        <div key={item.id}>
                          <NavLink to={`/product/:${item.id}`}>
                            <div className="dropdown-item d-flex align-items-start">
                              <div
                                className="img"
                                style={{
                                  backgroundImage: `url(${item.image})`,
                                }}
                              ></div>
                              <div className="text pl-3">
                                <h4>{item.name}</h4>
                              </div>
                              <div className="mb-0">
                                <a className="price">{item.price}</a>
                                <span className="nav-text">
                                  Quantity: {item.quantity}
                                </span>
                              </div>
                            </div>
                          </NavLink>
                        </div>
                      ))}
                  </div>
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>*/
