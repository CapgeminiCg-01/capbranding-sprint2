import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  deleteAddressAction,
  getAllAddressAction,
  getByIdAddressAction,
  updateRefAddress,
} from "../redux/AddressReducer";
import { AddressModal } from "./AddressModal";

export function AddressList() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(state);

  const [successOperation, setSuccessOperation] = useState(false);

  // Used to Initialize :: READ THE DATA FROM API
  useEffect(() => {
    dispatch(getAllAddressAction());
  }, []);

  const deleteAddress = (item, index) => {
    dispatch(deleteAddressAction(item));

    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 2000);
  };

  const updateAddress = (item) => {
    // we are doing this so that we can access this objec in the form page
    dispatch(updateRefAddress(item));

    // form page
    history.push("/create-Address");
  };

  const getAddressById = (item) => {
    dispatch(getByIdAddressAction(item));
  };

  return (
    <>
    <div style={{ height: "100vh", backgroundColor: "#fff9c4" }}>
      <div className="row">
        <div className="col-3 col-md-2 d-none d-md-block"></div>
        <div className="col-12 col-md-8">
          <h3 className="alert alert-secondary">Address List</h3>

          {successOperation && (
            <div className="alert alert-success">Operation Success</div>
          )}

          <table className="table">
            <thead className="bg-info text-light">
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">ADDRESS LINE</th>
                <th scope="col">CITY</th>
                <th scope="col">STATE</th>
                <th scope="col">COUNTRY</th>
                <th scope="col">PINCODE</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody className="alert alert-primary">
              {[...state.address.list].map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.addressLine}</td>
                  <td>{item.city}</td>
                  <td>{item.states}</td>
                  <td>{item.country}</td>
                  <td>{item.pincode}</td>
                  <td>
                    <input
                      type="button"
                      onClick={() => getAddressById(item)}
                      value="Detail"
                      className="btn btn-link"
                    />
                    /
                    <input
                      type="button"
                      onClick={() => updateAddress(item)}
                      value="Edit"
                      className="btn btn-link"
                    />
                    /
                    <input
                      type="button"
                      value="Delete"
                      onClick={() => deleteAddress(item, index)}
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
    </div>

      {/** Address MODAL */}
      <AddressModal />
    </>
  );
}