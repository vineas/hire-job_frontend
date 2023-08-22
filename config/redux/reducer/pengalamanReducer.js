const initialState = {
    pengalaman: [],
  };
  
  const pengalamanReducer = (state = initialState, action) => {
    if (action.type === "GET_ALL_PENGALAMAN") {
      return {
        ...state,
        product: action.payload,
      };
    } else if (action.type === "CREATE_PENGALAMAN") {
      return state;
    } else if (action.type === "UPDATE_PENGALAMAN") {
      return state;
    } else if (action.type === "DELETE_PENGALAMAN") {
      return state;
    } else {
      return state;
    }
  };
  export default pengalamanReducer;