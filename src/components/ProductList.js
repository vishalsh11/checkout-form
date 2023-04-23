import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { addItem, removeItem } from "../store/reducer/productSlice";
import { currencyFormat } from "../utils/utils";
import "./ProductList.css";

const ProductList = (props) => {
  const { showQuantityOnly } = props;
  const items = useSelector((state) => state.products.items);
  const total = useSelector((state) => state.products.total);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <Container
      style={{
        margin: "20px 0",
        padding: "5px 18px",
      }}
    >
      {items.map((item) => (
        <div className="product_wrap" key={item.id}>
          <img
            className="product_image"
            alt="product_img"
            // style={{ maxHeight: "30vh", objectFit: "cover" }}
            variant="top"
            src={item.image}
          />
          <div className="item_details">
            <div>
              <div className="item_name">{item.name}</div>
              <div className="item_price">
                Price: {currencyFormat(item.price)}
              </div>
            </div>
            {showQuantityOnly ? (
              <div>Quantity : {item.quantity}</div>
            ) : (
              <div className="qty_wrap">
                <span
                  className="qty_btn"
                  onClick={() => handleRemoveItem(item)}
                >
                  -
                </span>
                {/* {item.quantity} */}
                <span className="qty">{item.quantity}</span>
                <span className="qty_btn" onClick={() => handleAddItem(item)}>
                  +
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
      <hr />
      <div className="total_prc">
        <span>
          Total<span className="d-none d-lg-inline"> Ammount </span>:
        </span>
        <span>{currencyFormat(total)}</span>
      </div>
      {showQuantityOnly && (
        <Link to="/order-status">
          <Button
            variant="primary"
            className="text-center w-100 mt-4"
            style={{
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Confirm Order
          </Button>
        </Link>
      )}
    </Container>
  );
};

export default ProductList;
