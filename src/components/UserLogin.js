import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppNavBar } from "../common/AppNavBar";
import { UserLoginAction } from "../redux/UserLoginReducer";
export const UserLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updateUserEmail = (e) => setUserEmail(e.target.value);
  const updateUserPassword = (e) => setUserPassword(e.target.value);

  const UserLoginFunction = () => {
    dispatch(
      UserLoginAction({
        userEmail,
        userPassword,
      })
    );

    setErrorOperation(true);
    setTimeout(() => setErrorOperation(false), 5000);

    console.log(userEmail, userPassword);
    console.log(state.userEmail, state.userPassword);
  };

  if (state.UserLogin.loginAction === true) {
    history.push("/user");

    return <div></div>;
  }

  return (
    <div>
      <AppNavBar />
      <div className="row">
        <div className="col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6">
          <h3 className="alert alert-secondary mb-4">User Login</h3>

          {state.UserLogin.loginAction === false && errorOperation && (
            <div className="alert alert-danger">login failure</div>
          )}

          <div className="mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
              value={userEmail}
              onChange={(e) => updateUserEmail(e)}
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={userPassword}
              onChange={(e) => updateUserPassword(e)}
            />
          </div>

          <div className="mb-2">
            <input
              type="button"
              className="btn btn-outline-dark w-100"
              value="Login"
              onClick={() => UserLoginFunction()}
            />
          </div>
        </div>
        <div className="col-3 col-md-3  d-none d-md-block"></div>
      </div>
    </div>
  );
};