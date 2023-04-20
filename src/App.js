import { useState } from "react";
import Container from "react-bootstrap/Container";
import { Form, Row, Col, Button } from "react-bootstrap";
import ProductList from "./components/ProductList";
import "./App.css";

export default function App() {
  const [shipping, setShipping] = useState({});
  const [billing, setBilling] = useState({});
  const [payment, setPayment] = useState({});
  const [validated, setValidated] = useState(false);

  const handleShippingChange = (event) => {
    setShipping({ ...shipping, [event.target.name]: event.target.value });
  };

  const handleBillingChange = (event) => {
    setBilling({ ...billing, [event.target.name]: event.target.value });
  };

  const handlePaymentChange = (event) => {
    setPayment({ ...payment, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log("Form submitted:", { shipping, billing, payment });
    }
    setValidated(true);
  };

  return (
    <Container
      style={{
        boxShadow: "0 .3rem 1rem rgba(0,0,0,.15)",
        marginTop: "20px",
        marginBottom: "20px",
        padding: "20px 30px",
      }}
    >
      <h1 className="text-center text-lg">Checkout Form</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6} className="mb-3">
            <h2>Shipping Information</h2>
            <Form.Group className="mb-3" controlId="shippingName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={shipping.name || ""}
                required
                onChange={handleShippingChange}
                style={{
                  backgroundColor: "#f1f3f5",
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="shippingAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                name="address"
                value={shipping.address || ""}
                required
                onChange={handleShippingChange}
                style={{
                  backgroundColor: "#f1f3f5",
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="contactno">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                minlength="10"
                placeholder="Enter Contact Number"
                name="contact"
                value={shipping.contact || ""}
                required
                onChange={handleShippingChange}
                style={{
                  backgroundColor: "#f1f3f5",
                }}
              />
              <Form.Control.Feedback type="invalid">
                Contact number should be of 10 digits.
              </Form.Control.Feedback>
            </Form.Group>

            <h2>Billing Information</h2>
            {/* <Row className="mb-3"> */}
            <Form.Group className="mb-3" controlId="billingName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={billing.name || ""}
                required
                onChange={handleBillingChange}
                style={{
                  backgroundColor: "#f1f3f5",
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="billingAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                name="address"
                value={billing.address || ""}
                required
                onChange={handleBillingChange}
                style={{
                  backgroundColor: "#f1f3f5",
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="billingcontact">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                minlength="10"
                placeholder="Enter Contact Number"
                name="contact"
                value={billing.contact || ""}
                required
                onChange={handleBillingChange}
                style={{
                  backgroundColor: "#f1f3f5",
                }}
              />
              <Form.Control.Feedback type="invalid">
                Contact number should be of 10 digits.
              </Form.Control.Feedback>
            </Form.Group>

            <h2>Payment Information</h2>
            <Form.Group className="mb-3" controlId="cardNumber">
              <Form.Label>Credit Card Number</Form.Label>
              <Form.Control
                type="text"
                minlength="16"
                placeholder="Enter credit card number"
                name="cardNumber"
                value={payment.cardNumber || ""}
                required
                onChange={handlePaymentChange}
                style={{
                  backgroundColor: "#f1f3f5",
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please enter valid credit card number.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="expirationDate">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="MM/YY"
                name="expirationDate"
                value={payment.expirationDate || ""}
                required
                onChange={handlePaymentChange}
                style={{
                  backgroundColor: "#f1f3f5",
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please enter the expiration date of your credit card.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="securityCode">
              <Form.Label>Security Code</Form.Label>
              <Form.Control
                type="text"
                minlength="3"
                placeholder="CVV"
                name="securityCode"
                value={payment.securityCode || ""}
                required
                onChange={handlePaymentChange}
                style={{
                  backgroundColor: "#f1f3f5",
                }}
              />
              <Form.Control.Feedback type="invalid">
                CVV should of 3 digits.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <h2>Order Summary</h2>
            <ProductList />
            <div className="text-center my-3">
              <Button
                variant="primary"
                type="submit"
                className="text-center w-100 mt-2"
              >
                Place Order
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
