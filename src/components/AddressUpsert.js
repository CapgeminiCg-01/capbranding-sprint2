import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  createAddressAction,
  updateAddressAction,
} from "../redux/AddressReducer";

export function AddressUpsert() {
  const dispatch = useDispatch();
  const history = useHistory();
  const formEL = useRef();

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
    console.log(formEL);
    console.log(formEL.current.checkValidity());

      if (formEL.current.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
        alert("Invalid Inputs");
        formEL.current.classList.add("was-validated");
      } else {



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
      }
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
    <div style={{ height: "100vh", backgroundColor: "#cfd8dc" }}>

    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-secondary">
          {state.address.refadd.id ? "Update Address" : "Create Address"}
        </h3>

        {/** BELOW THESE TWO TAGS MUST BE CONDITIOANL */}
        {successOperation && (
          <div className="alert alert-success">Opeation Success</div>
        )}

       <form ref={formEL} class="needs-validation" novalidate>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={addressLine}
            onChange={(e) => updateAddressLine(e)}
            placeholder="Enter address"
            minLength="10"
            maxLength="50"
            pattern="^([A-Za-z0-9'\.\-\s\,] {10-50})$"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={city}
            onChange={(e) => updateCity(e)}
            placeholder="Enter city"
            minLength="3"
            maxLength="10"
            pattern="^([A-Z a-z] {3-10})$"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={states}
            onChange={(e) => updateState(e)}
            placeholder="Enter states"
            minLength="3"
            maxLength="10"
            pattern="^([A-Z a-z] {3-10})$"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={country}
            onChange={(e) => updateCountry(e)}
            placeholder="Enter country"
            minLength="3"
            maxLength="10"
            pattern="^([A-Z a-z] {3-10})$"
            required
          />
        </div>

        
        <div className="form-group">
          <input
            type="pincode"
            className="form-control"
            value={pincode}
            onChange={(e) => updatePincode(e)}
            placeholder="Enter pincode"
            pattern="^([0-9]{6}$)"
            required
          />
        </div>


        <div className="form-group">
          {state.address.refadd.id ? (
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
        </form>
      </div>
    
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  </div>
  );
}