import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  createCartAction,
  updateCartAction,
} from "../redux/CartReducer";

export function CartUpsert() {
  const dispatch = useDispatch();
  const history = useHistory();
  const formEL = useRef();
  const state = useSelector((state) => state);
  console.log(state);

  
  const [productName, setProductName] = useState(state.cart.refcart.productName);
  const [quantity, setQuantity] = useState(state.cart.refcart.quantity);

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updateProductName = (e) => setProductName(e.target.value);
  const updateQuantity = (e) => setQuantity(e.target.value);

  const addCart = (e) => {
    e.preventDefault();
    console.log( productName, quantity);

    console.log(formEL);
    console.log(formEL.current.checkValidity());

      if (formEL.current.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
        formEL.current.classList.add("was-validated");
      } else {
    
      dispatch(
      createCartAction({
        productName,
        quantity
      })
    );

    // A1 sucess
    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 5000);

    // A2: navigate to another page
    // history.push("/list-Cart");

    // reset the form
    setProductName("");
    setQuantity("");
      }
  };

  const updateCart = () => {
    dispatch(
      updateCartAction({
        id: state.cart.refcart.id,
        productName,
        quantity,
      })
    );

    // reset the form
    setProductName("");
    setQuantity("");
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "#fff9c4" }}>
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-secondary">
          {state.cart.refcart.id ? "Update Cart" : "Create Cart"}
        </h3>

        {/** BELOW THESE TWO TAGS MUST BE CONDITIOANL */}
        {successOperation && (
          <div className="alert alert-success">Opeation Success</div>
        )}


        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={productName}
            onChange={(e) => updateProductName(e)}
            className="form-control"
            placeholder="Enter productName"
            minLength="3"
            maxLength="20"
            required
          />
        </div>

        <form ref={formEL} class="needs-validation" novalidate>
        
        <div className="form-group">
          <input
            type="quantity"
            className="form-control"
            value={quantity}
            onChange={(e) => updateQuantity(e)}
            placeholder="Enter quantity"
            required
          />
        </div>


        <div className="mb-1">
          {state.cart.refcart.id ? (
            <input
              type="button"
              className="btn btn-secondary w-100"
              value="Update Cart"
              onClick={() => updateCart()}
            />
          ) : (
            <input
              type="button"
              className="btn btn-secondary w-100"
              value="Add Cart"
              onClick={(e) => addCart(e)}
            />
          )}
        </div>
        </form>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  </div>
  );
}