import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Hero from "../Component/Hero/Hero";
import DetailProduct from "../Component/DetailProduct/DetailProduct";
import { useEffect, useState } from "react";
import { fetchItemId } from "../Redux/productSlice";
const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { status, error, selectedProduct } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchItemId(id));
    }
  }, [dispatch, id]);

  console.log("selectedProduct: ", selectedProduct);
  return (
    <div>
      <Header />
      <Hero variant="small" />
      {status === "loading" && <p>Loading....</p>}
      {status === "succeeded" && <DetailProduct item={selectedProduct} />}
      {status === "error" && <p>{error}</p>}
      <Footer />
    </div>
  );
};

export default ProductDetail;
