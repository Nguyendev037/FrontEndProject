import React from "react";
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
  Container,
} from "reactstrap";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEnvelope,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook,faTwitter} from "@fortawesome/free-brands-svg-icons"
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const itemCartHeader = useSelector((state) => state.cart.cart);
  console.log("itemCartHeader: ", itemCartHeader);

  return (
    <>
      <div className="siteInfor d-flex align-items-center justity-content-space-between">
        <div className="siteInforLeft">
          <div className="dp-flex">
            <FontAwesomeIcon icon={faPhone} />
            <span>+00 1900 8897</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faPaperPlane} />
            <span>bestLiquid@gmail.com</span>
          </div>
        </div>
        <div className="siteInforRight">
          <ul className="display-inline">
            <li>
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
            </li>
          </ul>
        </div>
      </div>
      <Navbar className="navbar-expand-lg narbar-dark header-container">
        <Container className="background-nav container-fluid navbar">
          <NavbarBrand href="/" className="IconType">
            <span className="text-left">Liquire</span>{" "}
            <span className="text-right">Store</span>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="collapse-container">
            <Nav className="ms-auto mb-2 mb-lg-0" navbar>
              <NavItem>
                <NavLink href="/" className="active nav-text">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" className="nav-text">
                  Shop
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" className="nav-text">
                  About
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="nav-text">
                  Store
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Products</DropdownItem>
                  <DropdownItem></DropdownItem>

                  <DropdownItem divider />
                  <DropdownItem>Cart</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink to="/" className="nav-text">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
            <div className="order-lg-last btn-group">
              <a
                href=""
                className="btn-cart dropdown-toggle dropdown-toggle-split"
                data-toogle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="position-relative">
                  <FontAwesomeIcon icon={faCartShopping} />
                </span>
                <div className="position-absolute">{itemCartHeader.length}</div>
              </a>

              {itemCartHeader &&
                itemCartHeader.map((item) => {
                  return (
                    <div key={item.id}>
                      <NavLink to={`/product/:${item.id}`}>
                        <div className="dropdown-item d-flex align-items-start">
                          <div
                            className="img"
                            style={{ backgroundImage: `url(${item.image})` }}
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
                  );
                })}
            </div>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}
