import "bootstrap/dist/css/bootstrap.min.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Products from "./Pages/Products";
const router = createHashRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/product",
    element: <Products />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
