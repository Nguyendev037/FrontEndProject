import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPaginatedData } from "../../Redux/productSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./IntroItem.css";
import ItemCard from "../ItemCard/ItemCard";
export default function IntroItem() {
  const [items, setItems] = useState([]);
  const { productList, status, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPaginatedData(1));
  }, [dispatch]);

  useEffect(() => {
    if (productList) {
      setItems(productList.slice(0, 8));
    }
  }, [productList]);

  console.log("items: ", items);
  return (
    <>
      <Container className="introItem ">
        <Row className="pb-5 text-center">
          <div className="introItemHeader ">
            <div>
              <p className="introItemHeader-text">Our Delightful offerings</p>
            </div>
            <h2>Tastefully Yours</h2>
          </div>
        </Row>
        <Row  className="g-3">
          {status === "loading" && <p>Loading....</p>}
          {status === "succeeded" &&
            items.map((item, index) => (
              <Col sm ={6} md = {4} lg={3}  key={index} className=" mb-5 mr-3">
                <ItemCard item={item} />
              </Col>
            ))}
          {status === "error" && <p>{error}</p>}
        </Row>

        <div className="text-center">
          <NavLink to="/product">
            <Button className="viewmore">
              View All Product <span className="ms-1 fw-4"><FontAwesomeIcon icon={faArrowRight} /></span>
            </Button>
          </NavLink>
        </div>
      </Container>
    </>
  );
}
