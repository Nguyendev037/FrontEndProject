import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Products from "./Pages/Products";
import CartPage from "./Pages/CartPage";
import ProductDetail from "./Pages/ProductDetail";
const router = createHashRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/product",
    element: <Products />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
