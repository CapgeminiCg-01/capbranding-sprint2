import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  createEmployeeAction,
  updateEmployeeAction,
} from "../redux/EmployeeReducer";

export function EmployeeUpsert() {
  const dispatch = useDispatch();
  const history = useHistory();
  const formEL = useRef();
  const state = useSelector((state) => state);

  const [firstName, setFirstName] = useState(state.employee.refemp.firstName);
  const [lastName, setLastName] = useState(state.employee.refemp.lastName);
  const [userName, setUserName] = useState(state.employee.refemp.userName);
  const [password, setPassword] = useState(state.employee.refemp.password);
  const [email, setEmail] = useState(state.employee.refemp.email);
  const [mobile, setMobile] = useState(state.employee.refemp.mobile);

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updateFirstName = (e) => setFirstName(e.target.value);
  const updateLastName = (e) => setLastName(e.target.value);
  const updateUserName = (e) => setUserName(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateMobile = (e) => setMobile(e.target.value);

  const addEmployee = (e) => {
    e.preventDefault();

    // logs u can remove next three lines
    console.log(firstName, lastName, userName, password, email, mobile);
    console.log(formEL);
    console.log(formEL.current.checkValidity());

    if (formEL.current.checkValidity() === false) {
      // hanlde the false case
      e.preventDefault();
      e.stopPropagation();
      formEL.current.classList.add("was-validated");
    } else {
      // you can write custom valiadation logic here.
      // username :: Speical Character validation
      const re = /^[a-z0-9_\.]+$/;
      if (!re.test(userName)) {
        alert("Username Vlidation Fails");
        return;
      }

      // THIS IS REDUX ACTION CALLING
      dispatch(
        createEmployeeAction({
          firstName,
          lastName,
          userName,
          email,
          password,
          mobile,
        })
      );

      // A1 sucess
      setSuccessOperation(true);
      setTimeout(() => setSuccessOperation(false), 5000);

      // A2: navigate to another page
      // history.push("/list-employee");

      // reset the form
      setFirstName("");
      setLastName("");
      setUserName("");
      setPassword("");
      setEmail("");
      setMobile("");
    }
  };

  const updateEmployee = () => {
    dispatch(
      updateEmployeeAction({
        id: state.employee.refemp.id,
        firstName,
        lastName,
        userName,
        email,
        mobile,
        password,
      })
    );

    // reset the form
    setFirstName("");
    setLastName("");
    setUserName("");
    setPassword("");
    setEmail("");
    setMobile("");
  };

  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-secondary">
          {state.employee.refemp.id ? "Update Employee" : "Create Employee"}
        </h3>

        {/** BELOW THESE TWO TAGS MUST BE CONDITIOANL */}
        {successOperation && (
          <div className="alert alert-success">Opeation Success</div>
        )}

        <form ref={formEL} className="needs-validation" noValidate>
          <div className="mb-1">
            <input
              type="text"
              value={firstName}
              onChange={(e) => updateFirstName(e)}
              className="form-control"
              placeholder="Enter First name"
              minLength="4"
              maxLength="8"
              required
            />
          </div>

          <div className="mb-1">
            <input
              type="text"
              value={lastName}
              onChange={(e) => updateLastName(e)}
              className="form-control"
              placeholder="Enter Lastname"
              required
            />
          </div>

          <div className="mb-1">
            <input
              type="text"
              value={userName}
              onChange={(e) => updateUserName(e)}
              className="form-control"
              placeholder="Enter Username"
              required
            />
          </div>

          <div className="mb-1">
            <label htmlFor="validationCustom02">From Date</label>

            <input
              type="date"
              className="form-control"
              placeholder="Enter Date"
              required
              min="2020-04-01"
              max="2022-04-01"
            />
          </div>

          <div className="mb-1">
            <label htmlFor="validationCustom02">To Date</label>

            <input
              type="date"
              className="form-control"
              placeholder="Enter Date"
              required
            />
          </div>

          <div className="mb-1">
            <input
              type="password"
              value={password}
              onChange={(e) => updatePassword(e)}
              className="form-control"
              placeholder="Enter Password"
              required
            />
          </div>

          <div className="mb-1">
            <input
              type="email"
              value={email}
              onChange={(e) => updateEmail(e)}
              className="form-control"
              placeholder="Enter Email"
              required
            />
          </div>

          <div className="mb-1">
            <input
              type="number"
              value={mobile}
              onChange={(e) => updateMobile(e)}
              className="form-control"
              placeholder="Enter Mobile"
              max="9999999999"
              required
            />
          </div>

          <div className="mb-1">
            {state.employee.refemp.id ? (
              <input
                type="button"
                className="btn btn-secondary w-100"
                value="Update Employee"
                onClick={() => updateEmployee()}
              />
            ) : (
              <input
                type="button"
                className="btn btn-secondary w-100"
                value="Add Employee"
                onClick={(e) => addEmployee(e)}
              />
            )}
          </div>
        </form>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}