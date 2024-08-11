import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { fetchPaginatedData } from "../../Redux/productSlice";
import { setPage } from "../../Redux/productSlice";
import "./ProductList.css";
import { Images } from "../Images/Images";
import ItemCard from "../ItemCard/ItemCard";
import ReactPaginate from "react-paginate";

export default function ProductList() {
  const dispatch = useDispatch();
  const { productList, status, totalPages, page, error } = useSelector(
    (state) => state.product
  );
  console.log("productList: ", productList);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

  useEffect(() => {
    dispatch(fetchPaginatedData(page));
  }, [dispatch, page]);

  const handlePageClick = (event) => {
    const selectPage = event.selected + 1;
    dispatch(setPage(selectPage));
    dispatch(fetchPaginatedData(page));
  };

  return (
    <div className="product-list">
      <Container>
        <Row className="mb-4">
          <div className="d-flex flex-row justify-content-between align-items-center pr-5">
            <div>
              <h4> Select Types of Products</h4>
            </div>
            <div>
              <Dropdown
                className="dropDown dropDown-type me-3"
                isOpen={dropdownOpen}
                toggle={toggle}
              >
                <DropdownToggle caret>Liquid Types</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Rum</DropdownItem>
                  <DropdownItem>Whiskey</DropdownItem>
                  <DropdownItem>Vodka</DropdownItem>
                  <DropdownItem>Brandy</DropdownItem>
                  <DropdownItem>Gin</DropdownItem>
                  <DropdownItem>Tequila</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown
                className="dropDown dropDown-price"
                isOpen={dropdownOpen2}
                toggle={toggle2}
              >
                <DropdownToggle caret>Liquid Types</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Increase Price</DropdownItem>
                  <DropdownItem>Decrease Price</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </Row>

        <Row className="g-4">
          {status === "loading" && <p>Loading....</p>}
          {status === "succeeded" &&
            productList.map((product) => (
              <Col lg={4} md={6} sm={12} key={product.id} g-u>
                <ItemCard item={product}/>
              </Col>
            ))}
          {status === "error" && <p>{error}</p>}
        </Row>
        {status === "succeeded" && (
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={totalPages}
            marginPagesDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        )}
      </Container>
    </div>
  );
}
