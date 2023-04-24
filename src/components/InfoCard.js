import React from "react";
import { Card } from "react-bootstrap";

const InformationCard = (props) => {
  const { tag, infoObj } = props;
  const cardNumber = `XXXXXXXXXXXX${infoObj.cardno?.value.slice(12)}`;
  return (
    <Card
      style={{
        border: "1px solid #868e96",
      }}
    >
      <Card.Header
        style={{
          fontSize: "24px",
          fontWeight: "600",
        }}
      >
        {tag} Information
      </Card.Header>
      {tag === "Payment" ? (
        <Card.Body>
          <Card.Text
            style={{
              fontSize: "18px",
              marginBottom: "5px",
            }}
          >
            Card number : {cardNumber}
          </Card.Text>
          <Card.Text
            style={{
              fontSize: "18px",
              marginBottom: "5px",
            }}
          >
            Expiry date : {infoObj.expirydate?.value}
          </Card.Text>
          <Card.Text
            style={{
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            CVV : {infoObj.cvv?.value}
          </Card.Text>
        </Card.Body>
      ) : (
        <Card.Body>
          <Card.Text
            style={{
              fontSize: "22px",
              fontWeight: "500",
              marginBottom: "5px",
            }}
          >
            {infoObj.name?.value}
          </Card.Text>
          <Card.Text
            style={{
              fontSize: "18px",
              marginBottom: "5px",
            }}
          >
            Address : {infoObj.address?.value}
          </Card.Text>
          <Card.Text
            style={{
              fontSize: "18px",
              marginBottom: "5px",
            }}
          >
            Email : {infoObj.email?.value}
          </Card.Text>
          <Card.Text
            style={{
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            Contact : {infoObj.contact?.value}
          </Card.Text>
        </Card.Body>
      )}
    </Card>
  );
};

export default InformationCard;
