import React from "react";
import "animate.css";
import "./ItemCard.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../Redux/cartSlice";
import Swal from "sweetalert2";
import { Images } from "../Images/Images";
export default function ItemCard({ item }) {

  const dispatch = useDispatch()

  const handle_addCart = (item) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Sản phẩm thêm vào trong giỏ hàng",
      showConfirmButton: false,
      timer: 1000,
    });
    dispatch(addCart(item));
  };

  return (
    <div className="card-item animate__animated animate__fadeInUp">
      <Card
        style={{
          width: "300px",
          height: "600px",
        }}
        className="cardItem"
      >
        <img
          className="card-image"
          alt="Sample"
          src={Images.items[`${item.liquidImage}`]}
        />
        <CardBody className="card-body text-center">
          <CardSubtitle className="mb-2 text-muted itemType" tag="h6">
            {item.type}
          </CardSubtitle>
          <CardText className="itemName">
            <h2>{item.name}</h2>
          </CardText>
          <CardText className="itemPrice">{item.price} $</CardText>
          <div className="text-center">
            <NavLink to={`/product/${item.id}`}>
              <Button className="buttonItem btn btn-sucess me-3">
                Product Detai
              </Button>
            </NavLink>
            <Button
              onClick={() => handle_addCart(item)}
              className=" buttonItem btn btn-sucess"
            >
              Add to Card
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
