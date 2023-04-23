import React from "react";
import { Form } from "react-bootstrap";
import { validate } from "../utils/validators";

const InputComponent = (props) => {
  const { id, type, placeholder, onInput, value, valid, touched, checkout } =
    props;

  const changeHandler = (event) => {
    const validity = validate(event.target.value, props.validators);
    onInput(id, event.target.value, validity, false);
  };

  const touchHandler = () => {
    onInput(id, value, valid, true);
  };

  const invalidInput = (touched && !valid) || (checkout && !valid);

  return (
    <Form.Group className="mb-3">
      <Form.Label style={{ fontSize: "18px", fontWeight: "500" }}>
        {props.label}
      </Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={value}
        style={{
          backgroundColor: "#f1f3f5",
          border: invalidInput ? "1px solid red" : null,
        }}
      />
      {invalidInput && (
        <Form.Text
          style={{
            color: "red",
          }}
        >
          {props.errorText}
        </Form.Text>
      )}
    </Form.Group>
  );
};

export default InputComponent;
