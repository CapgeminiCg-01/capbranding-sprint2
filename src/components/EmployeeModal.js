import { Button, ListGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateRefEmployee } from "../redux/EmployeeReducer";

export function EmployeeModal() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const updateRefObj = () => {
    dispatch(updateRefEmployee({}));
  };

  return (
    <Modal show={state.employee.refemp.id} onHide={() => updateRefObj()}>
      <Modal.Header closeButton>
        <Modal.Title>Hello, {state.employee.refemp.firstName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item> First Name - {state.employee.refemp.firstName} </ListGroup.Item>
          <ListGroup.Item> Last Name - {state.employee.refemp.lastName}</ListGroup.Item>
          <ListGroup.Item>Email - {"******@gmail.com"}</ListGroup.Item>
          <ListGroup.Item> Mobile Number- {state.employee.refemp.mobileNumber}</ListGroup.Item>
          <ListGroup.Item> GENDER- {state.employee.refemp.gender}</ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => updateRefObj()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}