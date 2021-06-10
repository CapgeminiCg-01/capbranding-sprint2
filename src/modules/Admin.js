import { AdminNavBar } from "../common/AppNavBar";
import { useHistory } from "react-router-dom";
export function Admin() {
  const history = useHistory();
  return (
    <div>
      <AdminNavBar />
      <div className="row m-3"></div>
      <div className="row m-3"></div>
      <div className="row m-3"></div>
      <div className="row">
        <div className="col-4 col-md-4 d-none d-md-block"></div>
        <div className="col-12 col-md-4 ">
          <div className="">
            <input
              type="button"
              value="Add New Product"
              className="form-control btn btn-outline-dark m-4 w-75"
              onClick={() => history.push("/product")}
            />
            <input
              type="button"
              value="View products"
              className="form-control btn btn-outline-dark m-4 w-75"
              onClick={() => history.push("/productlist")}
            />
            <input
              type="button"
              value="Add New Product"
              className="form-control btn btn-outline-dark m-4 w-75"
              onClick={() => history.push("/product")}
            />
            <input
              type="button"
              value="View Products"
              className="form-control btn btn-outline-dark m-4 w-75"
              onClick={() => history.push("/productlist")}
            />
          </div>
        </div>
        <div className="col-4 col-md-4 d-none d-md-block"></div>
      </div>
    </div>
  );
}