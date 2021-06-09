import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  createAddressAction,
  updateAddressAction,
} from "../redux/AddressReducer";

export function AddressUpsert() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);
  console.log(state);

  const [addressLine, setAddressLine] = useState(state.address.refadd.addressLine);
  const [city, setCity] = useState(state.address.refadd.city);
  const [states, setState] = useState(state.address.refadd.states);
  const [country, setCountry] = useState(state.address.refadd.country);
  const [pincode, setPincode] = useState(state.address.refadd.pincode);

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updateAddressLine = (e) => setAddressLine(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateCountry = (e) => setCountry(e.target.value);
  const updatePincode = (e) => setPincode(e.target.value);

  const addAddress = (e) => {
    e.preventDefault();
    console.log(addressLine, city, states, country, pincode);

    // THIS IS REDUX ACTION CALLING
    dispatch(
      createAddressAction({
        addressLine,
        city,
        states,
        country,
        pincode
      })
    );

    // A1 sucess
    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 5000);

    // A2: navigate to another page
    // history.push("/list-Address");

    // reset the form
    setAddressLine("");
    setCity("");
    setState("");
    setCountry("");
    setPincode("");
  };

  const updateAddress = () => {
    dispatch(
      updateAddressAction({
        id: state.address.refadd.id,
        addressLine,
        city,
        states,
        country,
        pincode,
      })
    );

    // reset the form
    setAddressLine("");
    setCity("");
    setState("");
    setCountry("");
    setPincode("");
  };

  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-secondary">
          {state.Address.refadd.id ? "Update Address" : "Create Address"}
        </h3>

        {/** BELOW THESE TWO TAGS MUST BE CONDITIOANL */}
        {successOperation && (
          <div className="alert alert-success">Opeation Success</div>
        )}

        <div className="mb-1">
          <input
            type="text"
            value={addressLine}
            onChange={(e) => updateAddressLine(e)}
            className="form-control"
            placeholder="Enter address"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={city}
            onChange={(e) => updateCity(e)}
            className="form-control"
            placeholder="Enter city"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={states}
            onChange={(e) => updateState(e)}
            className="form-control"
            placeholder="Enter states"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={country}
            onChange={(e) => updateCountry(e)}
            className="form-control"
            placeholder="Enter country"
          />
        </div>

        
        <div className="mb-1">
          <input
            type="pincode"
            value={pincode}
            onChange={(e) => updatePincode(e)}
            className="form-control"
            placeholder="Enter pincode"
          />
        </div>


        <div className="mb-1">
          {state.Address.refadd.id ? (
            <input
              type="button"
              className="btn btn-secondary w-100"
              value="Update Address"
              onClick={() => updateAddress()}
            />
          ) : (
            <input
              type="button"
              className="btn btn-secondary w-100"
              value="Add Address"
              onClick={(e) => addAddress(e)}
            />
          )}
        </div>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}