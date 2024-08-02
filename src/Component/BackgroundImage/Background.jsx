import React from 'react'
import "./Background.css"
import { Container } from 'reactstrap'
import backGroundIamge from "../../assets/Image/backGroundImage.webp"
export default function Background() {
  return (
    <section className="BackgroundImage" style={{ backgroundImage: `url(${backGroundIamge})` }}>
    <Container className='d-flex justity-content-center align-items-center'>
      
    </Container>
    </section>
  )
}
