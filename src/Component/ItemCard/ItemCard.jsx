import React from "react";
import "animate.css";
import "./ItemCard.css";
import { Card, CardBody, CardTitle, CardText, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Images } from "../Images/Images";
export default function ItemCard({item}) {
  console.log('item: ', item);
  return (
    <div className="card-item animate__animated animate__fadeInUp">
      <Card
        style={{
          width: "300px",
          height: "600px",
        }}
        className="cardItem"
      >
          <img className= "card-image" alt="Sample" src={Images.items[`${item.liquidImage}`]} />
        <CardBody className="card-body text-center">
          <CardSubtitle className="mb-2 text-muted itemType" tag="h6">
            {item.type}
          </CardSubtitle>
          <CardText className="itemName"><h2>{item.name}</h2></CardText>
          <CardText className="itemPrice">{item.price} $</CardText>
          <div className="text-center">
            <NavLink to={`/:${item.id}`}>
              <Button className="buttonItem btn btn-sucess me-3">Product Detai</Button>
            </NavLink>
            <Button className=" buttonItem btn btn-sucess">Add to Card</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
