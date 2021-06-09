const initState = {
  list: [],

  refadd: {},
  sampleList: ["Delhi", "Kolkata", "Chennai", "Mumbai"],
};

// ACTION TYPES
const ADDRESS_CREATE = "ADDRESS_CREATE";
const ADDRESS_UPDATE = "ADDRESS_UPDATE";
const ADDRESS_DELETE = "ADDRESS_DELETE";
const ADDRESS_GET_ALL = "ADDRESS_GET_ALL";
const ADDRESS_GET_BY_ID = "ADDRESS_GET_BY_ID";

const REF_ADDRESS = "REF_ADDRESS";

// ACTIONS :: COmponents are interacting with this action
export function createAddressAction(payload) {
  // return { type: ADDRESS_CREATE, payload: payload };

  // MAKE SURE redux-thunk is installed.
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8080/api/address/";
    const requestBody = { ...payload};

    // HTTP Client
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // UPDATE THE UI
    dispatch({ type: ADDRESS_CREATE, payload: payload });
  };
}

export function updateAddressAction(payload) {
  // return { type: ADDRESS_UPDATE, payload: payload };
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = `http://localhost:8080/api/address/${payload.id}`;
    const requestBody = { ...payload };

    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // update the ui.
    dispatch(updateRefAddress({}));
  };
}

export function deleteAddressAction(payload) {
  // return { type: ADDRESS_DELETE, payload: payload };

  // redux thunk
  return async (dispatch) => {
    const url = `http://localhost:8080/api/address/${payload.id}`;
    await fetch(url, { method: "DELETE" });

    // update the ui.
    dispatch(getAllAddressAction());
  };
}

export function getAllAddressAction(payload) {
  // return { type: ADDRESS_GET_ALL, payload: payload };

  // API CALL/BACKEND CALL / REDUX-THUNK IS THERE
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8080/api/address/";

    // HTTP Client / POSTMAN / SWAGGER
    const response = await fetch(url);
    const addressList = await response.json();
    console.log(addressList);

    // Update the UI
    dispatch({ type: ADDRESS_GET_ALL, payload: addressList });
  };
}

export function getByIdAddressAction(payload) {
  // return { type: ADDRESS_GET_BY_ID, payload: payload };
  return async (dispatch) => {
    const url = `http://localhost:8080/api/address/${payload.id}`;
    const response = await fetch(url);
    const addressObj = await response.json();

    // this wil update the refadd
    dispatch(updateRefAddress(addressObj));
  };
}

export function updateRefAddress(payload) {
  return { type: REF_ADDRESS, payload: payload };
}

// REDUCER LOGIC
export function AddressReducer(state = initState, action) {
  switch (action.type) {
    case ADDRESS_CREATE:
      return { ...state, list: [action.payload, ...state.list] };
    case ADDRESS_UPDATE:
      // TODO
      return state;
    case ADDRESS_DELETE:
      // TODO
      const oldList = state.list;
      oldList.splice(action.payload, 1);
      console.log("OL", oldList);

      return { ...state, list: [...oldList] };
    case ADDRESS_GET_ALL:
      // Update the list
      return { ...state, list: action.payload };
    case ADDRESS_GET_BY_ID:
      // TODO
      return state;

    case REF_ADDRESS:
      return { ...state, refadd: action.payload };

    default:
      return state;
  }
}