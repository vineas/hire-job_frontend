const initialState = {
    skill: [],
  };
  
  const skillReducer = (state = initialState, action) => {
    if (action.type === "GET_ALL_SKILL") {
      return {
        ...state,
        product: action.payload,
      };
    } else if (action.type === "CREATE_SKILL") {
      return state;
    } else if (action.type === "UPDATE_SKILL") {
      return state;
    } else if (action.type === "DELETE_SKILL") {
      return state;
    } else {
      return state;
    }
  };
  export default skillReducer;