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
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (id) {
      dispatch(fetchItemId(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (selectedProduct) {
      setItem(selectedProduct);
    }
  }, [selectedProduct]);

  console.log("item: ", item);

  return (
    <div>
      <Header />
      <Hero variant="small" />
      {status === "loading" && <p>Loading....</p>}
      {status === "succeeded" && <DetailProduct item={item} />}
      {status === "error" && <p>{error}</p>}
      <Footer />
    </div>
  );
};

export default ProductDetail;
