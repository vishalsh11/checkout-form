import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Container } from "react-bootstrap";
import { currencyFormat } from "../../utils/utils";
import { resetStore } from "../../store/reducer/productSlice";

const getDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return dd + "/" + mm + "/" + yyyy;
};

const orderNumber = Math.floor(Math.random() * 100000);

const FeedbackScreen = () => {
  const totalPayment = useSelector((state) => state.products.total);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container
      style={{
        boxShadow: "0 .3rem 1rem rgba(0,0,0,.15)",
        marginTop: "20px",
        marginBottom: "20px",
        padding: "20px 30px",
        minHeight: "800px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div class="container-fluid">
        <div class="container text-center">
          <h2>Thank you for shopping with us.</h2>
          <Card.Text
            class="lead w-lg-50 mx-auto"
            style={{
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Your order has been placed successfully.
          </Card.Text>
          <Card.Text
            class="w-lg-50 mx-auto"
            style={{
              fontSize: "18px",
            }}
          >
            {` Your order number is ${orderNumber} . We will
            immediatelly process your order and it will be delivered in 2 - 5 business
            days.`}
          </Card.Text>
          <Card
            className="p-4 p-sm-5"
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            <Card.Body
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0",
                marginBottom: "10px",
              }}
            >
              <span>Date : </span>
              <span>{getDate()}</span>
            </Card.Body>
            <Card.Body
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0",
                marginBottom: "10px",
              }}
            >
              <span>Order number :</span>
              <span>{orderNumber}</span>
            </Card.Body>
            <Card.Body
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0",
                marginBottom: "10px",
              }}
            >
              <span>Total payment :</span>
              <span>{currencyFormat(totalPayment)}</span>
            </Card.Body>
            <hr />
            <Card.Text
              style={{
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              You have completed your payment. Check your email for confirmation
            </Card.Text>
          </Card>
          <Button
            variant="primary"
            type="submit"
            className="text-center w-100 mt-4"
            style={{
              fontSize: "20px",
              fontWeight: "500",
            }}
            onClick={() => {
              dispatch(resetStore());
              navigate("/");
            }}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default FeedbackScreen;
