import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import InputComponent from "../../components/InputComponent";
import ProductList from "../../components/ProductList";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_EXPIRYDATE,
} from "../../utils/validators";
import { saveOrderInformation } from "../../store/reducer/infoSlice";
import "./CheckoutForm.css";

export default function CheckoutForm() {
  const [shipping, setShipping] = useState({
    name: {},
    address: {},
    email: {},
    contact: {},
  });
  const [billing, setBilling] = useState({
    name: {},
    address: {},
    email: {},
    contact: {},
  });
  const [payment, setPayment] = useState({
    cardno: {},
    expirydate: {},
    cvv: {},
  });
  const [checkout, setCheckout] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShippingChange = useCallback((id, value, isValid, isTouched) => {
    setShipping((prevShipping) => ({
      ...prevShipping,
      [id]: { value, isValid, isTouched },
    }));
  }, []);

  const handleBillingChange = useCallback((id, value, isValid, isTouched) => {
    setBilling((prevBilling) => ({
      ...prevBilling,
      [id]: { value, isValid, isTouched },
    }));
  }, []);

  const handlePaymentChange = useCallback((id, value, isValid, isTouched) => {
    setPayment((prevPayment) => ({
      ...prevPayment,
      [id]: { value, isValid, isTouched },
    }));
  }, []);

  const handleBillCheck = (event) => {
    if (event.target.checked) {
      setBilling({
        ...shipping,
        name: { ...shipping.name, isTouched: true },
        address: { ...shipping.address, isTouched: true },
        email: { ...shipping.email, isTouched: true },
        contact: { ...shipping.contact, isTouched: true },
      });
    }
    // setBillCheck(event.target.checked);
  };

  const checkFormValidity = () => {
    let formValid = true;
    for (let key in shipping) {
      if (!shipping[key].isValid) {
        formValid = false;
      }
    }
    for (let key in billing) {
      if (!billing[key].isValid) {
        formValid = false;
      }
    }
    for (let key in payment) {
      if (!payment[key].isValid) {
        formValid = false;
      }
    }
    return formValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCheckout(true);
    if (!checkFormValidity()) {
      console.log("form invalid");
      event.stopPropagation();
    } else {
      console.log("Form submitted:", { shipping, billing, payment });
      dispatch(saveOrderInformation({ shipping, billing, payment }));
      navigate("/order-review");
    }
  };

  return (
    <Container
      style={{
        boxShadow: "0 .3rem 1rem rgba(0,0,0,.15)",
        marginTop: "20px",
        marginBottom: "20px",
        padding: "20px 30px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <h1 className="text-center text-lg text-bold">Checkout Form</h1>
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6} className="mb-3">
            <h2>Shipping Information</h2>

            <InputComponent
              id="name"
              type="text"
              label="Name"
              placeholder="Enter name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid Name."
              value={shipping.name?.value}
              valid={shipping.name?.isValid}
              touched={shipping.name?.isTouched}
              onInput={handleShippingChange}
              checkout={checkout}
            />
            <InputComponent
              id="address"
              type="text"
              label="Address"
              placeholder="Enter address"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid Address."
              value={shipping.address?.value}
              valid={shipping.address?.isValid}
              touched={shipping.address?.isTouched}
              onInput={handleShippingChange}
              checkout={checkout}
            />
            <InputComponent
              id="email"
              type="text"
              label="Email"
              placeholder="Enter Email"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
              errorText="Please enter a valid Email."
              value={shipping.email?.value}
              valid={shipping.email?.isValid}
              touched={shipping.email?.isTouched}
              initialValue={shipping.email?.value}
              onInput={handleShippingChange}
              checkout={checkout}
            />
            <InputComponent
              id="contact"
              type="number"
              label="Contact"
              placeholder="Enter Contact Number"
              validators={[VALIDATOR_MINLENGTH(10), VALIDATOR_MAXLENGTH(10)]}
              errorText="Contact number should be of 10 digits."
              value={shipping.contact?.value}
              valid={shipping.contact?.isValid}
              touched={shipping.contact?.isTouched}
              onInput={handleShippingChange}
              checkout={checkout}
            />

            <h2>Billing Information</h2>

            <Form.Check
              type="checkbox"
              id="billinfocheck"
              label="Same as Shipping information"
              onChange={handleBillCheck}
              className="mb-3"
            />

            <InputComponent
              id="name"
              type="text"
              label="Name"
              placeholder="Enter name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid Name."
              value={billing.name?.value}
              valid={billing.name?.isValid}
              touched={billing.name?.isTouched}
              onInput={handleBillingChange}
              checkout={checkout}
            />
            <InputComponent
              id="address"
              type="text"
              label="Address"
              placeholder="Enter address"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid Address."
              value={billing.address?.value}
              valid={billing.address?.isValid}
              touched={billing.address?.isTouched}
              onInput={handleBillingChange}
              checkout={checkout}
            />
            <InputComponent
              id="email"
              type="text"
              label="Email"
              placeholder="Enter Email"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
              errorText="Please enter a valid Email."
              value={billing.email?.value}
              valid={billing.email?.isValid}
              touched={billing.email?.isTouched}
              onInput={handleBillingChange}
              checkout={checkout}
            />
            <InputComponent
              id="contact"
              type="number"
              label="Contact"
              placeholder="Enter Contact Number"
              validators={[VALIDATOR_MINLENGTH(10), VALIDATOR_MAXLENGTH(10)]}
              errorText="Contact number should be of 10 digits."
              value={billing.contact?.value}
              valid={billing.contact?.isValid}
              touched={billing.contact?.isTouched}
              onInput={handleBillingChange}
              checkout={checkout}
            />

            <h2>Payment Information</h2>

            <InputComponent
              id="cardno"
              type="number"
              label="Credit Card Number"
              placeholder="Enter credit card number"
              validators={[VALIDATOR_MINLENGTH(16), VALIDATOR_MAXLENGTH(16)]}
              errorText="Credit card number should be of 16 digits."
              value={payment.cardno?.value}
              valid={payment.cardno?.isValid}
              touched={payment.cardno?.isTouched}
              onInput={handlePaymentChange}
              checkout={checkout}
            />
            <InputComponent
              id="expirydate"
              type="text"
              label="Expiration Date"
              placeholder="MM/YY"
              validators={[
                VALIDATOR_REQUIRE(),
                VALIDATOR_EXPIRYDATE(),
                VALIDATOR_MAXLENGTH(5),
              ]}
              errorText="Please enter a valid expiry date (year should be between 24 to 29)."
              value={payment.expirydate?.value}
              valid={payment.expirydate?.isValid}
              touched={payment.expirydate?.isTouched}
              onInput={handlePaymentChange}
              checkout={checkout}
            />
            <InputComponent
              id="cvv"
              type="number"
              label="Security Code"
              placeholder="CVV"
              validators={[VALIDATOR_MINLENGTH(3), VALIDATOR_MAXLENGTH(3)]}
              errorText="CVV should be of 3 digits."
              value={payment.cvv?.value}
              valid={payment.cvv?.isValid}
              touched={payment.cvv?.isTouched}
              onInput={handlePaymentChange}
              checkout={checkout}
            />
          </Col>
          <Col md={6}>
            <h2>Order Summary</h2>
            <ProductList />
            <div className="text-center my-3">
              <Button
                variant="primary"
                type="submit"
                className="text-center w-100 mt-2"
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Checkout
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
