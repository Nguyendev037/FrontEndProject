import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from "reactstrap";
import { useState, useEffect } from "react";
import logoIcon from "../../assets/logoIcon_2.png";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const itemCartHeader = useSelector((state) => state.cart.cart);
  console.log("itemCartHeader: ", itemCartHeader);

  return (
    <Navbar className="navbar-expand-lg narbar-dark header-container">
      <Container className="background-nav container-fluid navbar">
        <NavbarBrand href="/" className="IconType">
          <span className="text-left">Liquire</span>{" "}
          <span className="text-right">Store</span>
        </NavbarBrand>
        {/* <NavbarToggler onClick={toggle} /> */}
        <Collapse isOpen={isOpen} navbar className="collapse-container">
          <Nav className="ms-auto mb-2 mb-lg-0" navbar>
            <NavItem>
              <NavLink href="/" className="active nav-text">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" className="nav-text">
                Shop
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" className="nav-text">
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
              <NavLink href="" className="nav-text">
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
              <span className="position-relative"></span>
              <div className="position-absolute"></div>
            </a>

            {itemCartHeader &&
              itemCartHeader.map((item) => {
                return (
                  <div key={item.id}>
                    <div
                      className="dropdown-item d-flex align-items-start"
                      href={`/products/${item.id}`}
                    >
                      <div
                        className="img"
                        style={{ backgroundImage: `url(${item.image})` }}
                      ></div>
                      <div className="text pl-3">
                        <h4>{item.name}</h4>
                      </div>
                      <div className="mb-0">
                        <a href={`/products/${item.id}`} className="price">
                          {item.price}
                        </a>
                        <span className="nav-text">
                          Quantity: {item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </Collapse>
      </Container>
    </Navbar>
  );
}
