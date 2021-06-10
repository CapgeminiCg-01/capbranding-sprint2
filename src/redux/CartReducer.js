const initState = {
    list: [],
  
    refcart: {},
    sampleList: ["Delhi", "Kolkata", "Chennai", "Mumbai"],
  };
  
  // ACTION TYPES
  const CART_CREATE = "CART_CREATE";
  const CART_UPDATE = "CART_UPDATE";
  const CART_DELETE = "CART_DELETE";
  const CART_GET_ALL = "CART_GET_ALL";
  const CART_GET_BY_ID = "CART_GET_BY_ID";
  
  const REF_CART = "REF_CART";
  
  // ACTIONS :: COmponents are interacting with this action
  export function createCartAction(payload) {
    // return { type: CART_CREATE, payload: payload };
  
    // MAKE SURE redux-thunk is installed.
    return async (dispatch) => {
      // WE HV TO CALL THE SPRINT1 / SPRING BOOT
      const url = "http://localhost:8080/api/cart/";
      const requestBody = { ...payload};
  
      // HTTP Client
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });
  
      // UPDATE THE UI
      dispatch({ type: CART_CREATE, payload: payload });
    };
  }
  
  export function updateCartAction(payload) {
    // return { type: CART_UPDATE, payload: payload };
    return async (dispatch) => {
      // WE HV TO CALL THE SPRINT1 / SPRING BOOT
      const url = `http://localhost:8080/api/cart/${payload.id}`;
      const requestBody = { ...payload };
  
      await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });
  
      // update the ui.
      dispatch(updateRefCart({}));
    };
  }
  
  export function deleteCartAction(payload) {
    // return { type: CART_DELETE, payload: payload };
  
    // redux thunk
    return async (dispatch) => {
      const url = `http://localhost:8080/api/cart/${payload.id}`;
      await fetch(url, { method: "DELETE" });
  
      // update the ui.
      dispatch(getAllCartAction());
    };
  }
  
  export function getAllCartAction(payload) {
    // return { type: CART_GET_ALL, payload: payload };
  
    // API CALL/BACKEND CALL / REDUX-THUNK IS THERE
    return async (dispatch) => {
      // WE HV TO CALL THE SPRINT1 / SPRING BOOT
      const url = "http://localhost:8080/api/cart/";
  
      // HTTP Client / POSTMAN / SWAGGER
      const response = await fetch(url);
      const cartList = await response.json();
      console.log(cartList);
  
      // Update the UI
      dispatch({ type: CART_GET_ALL, payload: cartList });
    };
  }
  
  export function getByIdCartAction(payload) {
    // return { type: CART_GET_BY_ID, payload: payload };
    return async (dispatch) => {
      const url = `http://localhost:8080/api/cart/${payload.id}`;
      const response = await fetch(url);
      const cartObj = await response.json();
  
      // this wil update the refcart
      dispatch(updateRefCart(cartObj));
    };
  }
  
  export function updateRefCart(payload) {
    return { type: REF_CART, payload: payload };
  }
  
  // REDUCER LOGIC
  export function CartReducer(state = initState, action) {
    switch (action.type) {
      case CART_CREATE:
        return { ...state, list: [action.payload, ...state.list] };
      case CART_UPDATE:
        // TODO
        return state;
      case CART_DELETE:
        // TODO
        const oldList = state.list;
        oldList.splice(action.payload, 1);
        console.log("OL", oldList);
  
        return { ...state, list: [...oldList] };
      case CART_GET_ALL:
        // Update the list
        return { ...state, list: action.payload };
      case CART_GET_BY_ID:
        // TODO
        return state;
  
      case REF_CART:
        return { ...state, refcart: action.payload };
  
      default:
        return state;
    }
  }