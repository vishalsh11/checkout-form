import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import InfoCard from "../../components/InfoCard";
import ProductList from "../../components/ProductList";
import "./ReviewScreen.css";

const ReviewScreen = () => {
  const orderInfo = useSelector((state) => state.orderInfo);
  const { shipping, billing, payment } = orderInfo;
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
      <h1 className="text-center text-lg">Review your order</h1>
      <Row>
        <Col
          md={6}
          className="mb-3 mb-md-0"
          style={{
            display: "flex",
            gap: "16px",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <InfoCard tag="Shipping" infoObj={shipping} />
          <InfoCard tag="Billing" infoObj={billing} />
          <InfoCard tag="Payment" infoObj={payment} />
        </Col>
        <Col>
          <Card
            style={{
              border: "1px solid #868e96",
            }}
          >
            <ProductList showQuantityOnly />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewScreen;
