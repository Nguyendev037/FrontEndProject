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
} from "reactstrap";
import { fetchPaginatedData } from "../../Redux/productSlice";
import { setPage } from "../../Redux/productSlice";
import "./ProductList.css";
import ReactPaginate from "react-paginate";

export default function ProductList() {
  const dispatch = useDispatch();
  const { productList, status, totalPages, page, error } = useSelector(
    (state) => state.product
  );
  console.log("productList: ", productList);

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
      <Container fluid>
        <Row className="g-4">
          {status === "loading" && <p>Loading....</p>}
          {status === "succeeded" &&
            productList.map((product) => (
              <Col lg={4} md={6} sm={12} key={product.id} g-u>
                <Card style={{ width: "20rem"}} className="card-image">
                  <img
                    alt="Sample"
                    src={`FrontEndProject/${product.liquidImage}`}
                  />
                  <CardBody>
                    s<CardTitle tag="h5">{product.name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {product.price}
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card‘s content.
                    </CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          {status === "error" && <p>{error}</p>}
        </Row>
        {status === "succeeded" && (
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={totalPages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
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
