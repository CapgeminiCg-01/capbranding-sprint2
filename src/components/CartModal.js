import { Button, ListGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateRefCart } from "../redux/CartReducer";

export function CartModal() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const updateRefObj = () => {
    dispatch(updateRefCart({}));
  };

  return (
    <Modal show={state.cart.refcart.id} onHide={() => updateRefObj()}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item> PRODUCT NAME - {state.cart.refcart.productName} </ListGroup.Item>
          <ListGroup.Item> QUANTITY- {state.cart.refcart.quantity}</ListGroup.Item>
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