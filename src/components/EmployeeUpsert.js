import { Form,yup, useRef, useState } from "react";
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
  console.log(state);

  const [firstName, setFirstName] = useState(state.employee.refemp.firstName);
  const [lastName, setLastName] = useState(state.employee.refemp.lastName);
  const [email, setEmail] = useState(state.employee.refemp.email);
  const [mobileNumber, setMobileNumber] = useState(state.employee.refemp.mobileNumber);
  const [gender, setGender] = useState(state.employee.refemp.gender);

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updateFirstName = (e) => setFirstName(e.target.value);
  const updateLastName = (e) => setLastName(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateMobileNumber = (e) => setMobileNumber(e.target.value);
  const updateGender = (e) => setGender(e.target.value);

  const addEmployee = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, mobileNumber, gender);
    
    console.log(formEL);
    console.log(formEL.current.checkValidity());

    if (formEL.current.checkValidity() === false) {
      alert("Syntax Error");
      // handlee the false case
      e.preventDefault();
      e.stopPropagation();
      formEL.current.classList.add("was-validated");
    } else {
      // you can write custom valiadation logic here.
      // username :: Speical Character validation
      
      const re = /^[0-9_\.]+$/
      if (re.test(firstName)) {
        alert("First Name Validation Fails");
        return;
      }
    }

     const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email : yup.string().required(),
        mobileNumber : yup.string().required(),
        gender : yup.string().required(),
      });
      
      function Validation() {
        return (
          <Form
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              mobileNumber : '',
              gender : '',
            }}></Form>
         ) }

    // THIS IS REDUX ACTION CALLING
    dispatch(
      createEmployeeAction({
        firstName,
        lastName,
        email,
        mobileNumber,
        gender
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
    setEmail("");
    setMobileNumber("");
    setGender("");
  };

  const updateEmployee = () => {
    dispatch(
      updateEmployeeAction({
        id: state.employee.refemp.id,
        firstName,
        lastName,
        email,
        mobileNumber,
        gender,
      })
    );

    // reset the form
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobileNumber("");
    setGender("");
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

        <div className="mb-1">
          <input
            type="text"
            value={firstName}
            onChange={(e) => updateFirstName(e)}
            className="form-control"
            placeholder="Enter First name"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={lastName}
            onChange={(e) => updateLastName(e)}
            className="form-control"
            placeholder="Enter Lastname"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={email}
            onChange={(e) => updateEmail(e)}
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => updateMobileNumber(e)}
            className="form-control"
            placeholder="Enter Mobile"
          />
        </div>

        
        <div className="mb-1">
          <input
            type="gender"
            value={gender}
            onChange={(e) => updateGender(e)}
            className="form-control"
            placeholder="Enter gender"
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
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}