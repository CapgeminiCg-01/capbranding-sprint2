import { Button, ListGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateRefAddress } from "../redux/AddressReducer";

export function AddressModal() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const updateRefObj = () => {
    dispatch(updateRefAddress({}));
  };

  return (
    <Modal show={state.address.refadd.id} onHide={() => updateRefObj()}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item> ADDRESS LINE - {state.address.refadd.addressLine} </ListGroup.Item>
          <ListGroup.Item> CITY - {state.address.refadd.city}</ListGroup.Item>
          <ListGroup.Item> STATE - {state.address.refadd.states}</ListGroup.Item>
          <ListGroup.Item> COUNTRY- {state.address.refadd.country}</ListGroup.Item>
          <ListGroup.Item> PINCODE- {state.address.refadd.pincode}</ListGroup.Item>
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