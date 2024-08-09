import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faEnvelope,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from "reactstrap";
import Hero from "../Hero/Hero";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";

export default function Header() {
  const itemCartHeader = useSelector((state) => state.cart.cart);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="siteInfor">
        <div className="container">
          <div className="row d-flex align-items-center ">
            <div className=" col-lg-6 col-md-6 d-flex flex-row">
              <div className="" style={{ marginRight: "10px" }}>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mx-2"
                  style={{ fontSize: "13px" }}
                />
                <span style={{ fontSize: "13px" }}>+00 1900 8897</span>
              </div>
              <div className="">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="mx-2"
                  style={{ fontSize: "13px" }}
                />
                <span style={{ fontSize: "13px" }}>bestLiquid@gmail.com</span>
              </div>
            </div>
            <div className=" col-lg-6 col-md-6 d-flex justify-content-lg-end justify-content-md-end">
              <div className="social-icon d-flex algin-items-center">
                <div>
                  <a href="#" className="text-white mx-2 fs-4">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ fontSize: "16px" }}
                    />
                  </a>
                </div>
                <div>
                  <a href="#" className="text-white mx-2 fs-4">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      style={{ fontSize: "16px" }}
                    />
                  </a>
                </div>
                <div>
                  <a href="#" className="text-white mx-2 fs-4">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ fontSize: "16px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navbar
        expand="md"
        color="dark"
        light
        className={`nav-header navbar-dark${
          isScrolled ? " fixed-top-scroll fixed-top  " : ""
        }`}
      >
        <Container className="nav navbar">
          {isScrolled ? (
            <>
              <NavbarBrand className="me-auto">
                <NavLink to="/">
                  <span
                    style={{
                      fontSize: "30px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                    className="logoIcon me-2"
                  >
                    Liquire
                  </span>
                  <span
                    style={{
                      color: "#b7472a",
                      fontSize: "30px",
                    }}
                    className="logoIcon"
                  >
                    Store
                  </span>
                </NavLink>
              </NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav
                  className="ms-auto navbar-expand-lg navbar-expand-md"
                  navbar
                >
                  <NavItem className="me-3">
                    <NavLink to="/">
                      <span className="nav-content-white">Home</span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="me-3 ">
                    <NavLink to="/">
                      <span className="nav-content-white">About</span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="me-3 ">
                    <NavLink to="/product">
                      <span className="nav-content-white">Product</span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="me-3">
                    <NavLink to="/">
                      <span className="nav-content-white">Blog</span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <NavItem className="me-3">
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
                          icon={faBagShopping}
                          style={{
                            color: "#a23f25",
                            fontSize: "20px",
                          }}
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
              </Collapse>
            </>
          ) : (
            <>
              <NavbarBrand className="me-auto">
                <NavLink to="/">
                  <span
                    style={{
                      fontSize: "30px",
                      color: "#cdcdcd",
                      fontWeight: "bold",
                    }}
                    className="logoIcon me-2"
                  >
                    Liquire
                  </span>
                  <span
                    style={{
                      color: "#626262",
                      fontSize: "30px",
                    }}
                    className="logoIcon"
                  >
                    Store
                  </span>
                </NavLink>
              </NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav
                  className="ms-auto navbar-expand-lg navbar-expand-md"
                  navbar
                >
                  <NavItem className="me-3">
                    <NavLink to="/">
                      <span className="nav-content">Home</span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="me-3 nav-content">
                    <NavLink to="/">
                      <span className="nav-content">About</span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="me-3 nav-content">
                    <NavLink to="/product">
                      <span className="nav-content">Product</span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="me-3 nav-content">
                    <NavLink to="/">
                      <span className="nav-content">Blog</span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <NavItem className="me-3">
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
                          icon={faBagShopping}
                          style={{
                            color: "rgba(255, 255, 255, 0.5)",
                            fontSize: "20px",
                          }}
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
              </Collapse>
            </>
          )}
        </Container>
      </Navbar>

      <Hero />
    </>
  );
}
