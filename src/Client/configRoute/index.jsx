import HomePage from "../Pages/home";
import ProductDetail from "../Pages/product";
import Cart from "../Pages/cart";
import InformationCustomer from "../Pages/payment";
import LayoutClient from "../Layouts";

const RoutePublic = [
  {
    path: "/",
    element: <LayoutClient />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "payment",
        element: <InformationCustomer />,
      },
    ],
  },
];
export default RoutePublic;