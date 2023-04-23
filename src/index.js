import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckoutForm from "./routes/checkoutForm/CheckoutForm";
import ReviewScreen from "./routes/reviewScreen/ReviewScreen";
import FeedbackScreen from "./routes/orderStatus/FeedbackScreen";
import "./index.css";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <CheckoutForm />,
  },
  {
    path: "/order-review",
    element: <ReviewScreen />,
  },
  {
    path: "/order-status",
    element: <FeedbackScreen />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);
