import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faEnvelope,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Images } from "../Images/Images";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import { useSelector } from "react-redux";
import "./Header.css";

export default function Header() {

  // Correctly using carts from Redux state
  const { carts } = useSelector((state) => state.carts || { carts: [] });

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
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-6 d-flex flex-row">
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
            <div className="col-lg-6 col-md-6 d-flex justify-content-lg-end justify-content-md-end">
              <div className="social-icon d-flex align-items-center">
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
        className={`nav-header navbar-dark${isScrolled ? " fixed-top-scroll fixed-top" : ""}`}
      >
        <Container className="nav navbar">
          <NavbarBrand className="me-auto">
            <NavLink to="/">
              <span
                style={{
                  fontSize: "30px",
                  color: isScrolled ? "black" : "#cdcdcd",
                  fontWeight: "bold",
                }}
                className="logoIcon me-2"
              >
                Liquire
              </span>
              <span
                style={{
                  color: isScrolled ? "#b7472a" : "#626262",
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
            <Nav className="ms-auto navbar-expand-lg navbar-expand-md" navbar>
              <NavItem className="me-3">
                <NavLink to="/">
                  <span className="nav-content-white">Home</span>
                </NavLink>
              </NavItem>
              <NavItem className="me-3">
                <NavLink to="/">
                  <span className="nav-content-white">About</span>
                </NavLink>
              </NavItem>
              <NavItem className="me-3">
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
              <NavLink to="/cart">
                <div className="order-lg-last btn-group">
                  <a
                    href="#"
                    className="btn-cart dropdown-toggle dropdown-toggle-split"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="position-relative">
                      <FontAwesomeIcon
                        icon={faBagShopping}
                        style={{
                          color: isScrolled ? "#a23f25" : "rgba(255, 255, 255, 0.5)",
                          fontSize: "20px",
                        }}
                      />
                      {carts.length !== 0 ? (
                        <div className="position-absolute itemCurrent text-center">
                          {carts.length}
                        </div>
                      ) : (
                        ""
                      )}
                    </span>
                  </a>
                  <div className="dropdown-menu">
                    {carts.length > 0 &&
                      carts.map((item) => (
                        <div key={item.id}>
                          <NavLink to={`/product/${item.id}`}>
                            <div className="dropdown-item d-flex align-items-start">
                              <div
                                className="img"
                                style={{
                                  backgroundImage: `url(${Images.items[item.liquidImage]})`,
                                }}
                              ></div>
                              <div className="text pl-3">
                                <h4>{item.name}</h4>
                              </div>
                              <div className="mb-0">
                                <span className="price">{item.price}</span>
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
              </NavLink>
            </NavItem>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}
