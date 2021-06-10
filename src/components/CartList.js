import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  deleteCartAction,
  getAllCartAction,
  getByIdCartAction,
  updateRefCart,
} from "../redux/CartReducer";
import { CartModal } from "./CartModal";

export function CartList() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(state);

  const [successOperation, setSuccessOperation] = useState(false);

  // Used to Initialize :: READ THE DATA FROM API
  useEffect(() => {
    dispatch(getAllCartAction());
  }, []);

  const deleteCart = (item, index) => {
    dispatch(deleteCartAction(item));

    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 2000);
  };

  const updateCart = (item) => {
    // we are doing this so that we can access this object in the form page
    dispatch(updateRefCart(item));

    // form page
    history.push("/create-Cart");
  };

  const getCartById = (item) => {
    dispatch(getByIdCartAction(item));
  };

  return (
    <>
      <div className="row">
        <div className="col-3 col-md-2 d-none d-md-block"></div>
        <div className="col-12 col-md-8">
          <h3 className="alert alert-secondary">Cart List</h3>

          {successOperation && (
            <div className="alert alert-success">Operation Success</div>
          )}

          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">PRODUCT NAME</th>
                <th scope="col">QUANTITY</th>
                <th scope="col">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {[...state.cart.list].map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.productName}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <input
                      type="button"
                      onClick={() => getCartById(item)}
                      value="Detail"
                      className="btn btn-link"
                    />
                    /
                    <input
                      type="button"
                      onClick={() => updateCart(item)}
                      value="Edit"
                      className="btn btn-link"
                    />
                    /
                    <input
                      type="button"
                      value="Delete"
                      onClick={() => deleteCart(item, index)}
                      className="btn btn-link text-danger"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-3 col-md-2 d-none d-md-block"></div>
      </div>

      {/** Cart MODAL */}
      <CartModal />
    </>
  );
}