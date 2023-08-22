const initialState = {
    portofolio: [],
  };
  
  const portofolioReducer = (state = initialState, action) => {
    if (action.type === "GET_ALL_PORTOFOLIO") {
      return {
        ...state,
        product: action.payload,
      };
    } else if (action.type === "CREATE_PORTOFOLIO") {
      return state;
    } else if (action.type === "UPDATE_PORTOFOLIO") {
      return state;
    } else if (action.type === "DELETE_PORTOFOLIO") {
      return state;
    } else {
      return state;
    }
  };
  export default portofolioReducer;