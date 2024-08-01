import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

function App() {
  return (
      <RouterProvider router = {router}/>
  );
}

export default App;
