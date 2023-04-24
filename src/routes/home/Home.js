import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { addItem, removeItem } from "../../store/reducer/productSlice";
import "./Home.css";
import { Link } from "react-router-dom";
import { currencyFormat } from "../../utils/utils";

const Home = () => {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  return (
    <div>
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
        <Container className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="text-center text-lg m-0">Products</h1>
          <Link to="/checkout-form">
            <Button
              style={{
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              Checkout
            </Button>
          </Link>
        </Container>
        <Container fluid>
          <Row className="gy-4">
            {Array.isArray(products) &&
              products.length &&
              products.map((item) => (
                <Col md={6} lg={4}>
                  <Card
                    style={{
                      border: "1px solid #495057",
                    }}
                  >
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Card.Title
                        style={{
                          margin: "20px 0",
                          fontSize: "24px",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.name}
                      </Card.Title>
                      <Card.Title
                        style={{
                          margin: "20px 0",
                          fontSize: "24px",
                        }}
                      >
                        {currencyFormat(item.price)}
                      </Card.Title>
                    </Card.Body>
                    <Card.Body
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="qty_button"
                        onClick={() => dispatch(removeItem(item))}
                      >
                        -
                      </span>
                      <div className="quantity">{item.quantity}</div>
                      <span
                        className="qty_button"
                        onClick={() => dispatch(addItem(item))}
                      >
                        +
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Home;
