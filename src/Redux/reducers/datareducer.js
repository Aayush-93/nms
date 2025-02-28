// reducers/index.js

const initialState = {
  data: [],
  error: null,
  postResponse: null,
};
//reducer function..
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    //case:fetch
    case "FETCH_DATA_REQUEST":
      console.log("fetched");
      return {
        ...state,
        error: null,
      };

    case "FETCH_DATA_SUCCESS":
      console.log("data is posted sucessfully", action.payload, action.type);
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    //delete ko lagi
    case "DELETE_DATA_REQUEST":
      console.log("Current Data:", state.data);
      return {
        ...state,
        error: null,
      };
    case "DELETE_DATA_SUCCESS":
      return {
        ...state,
        data: state.data.filter((post) => post.id !== action.payload), // Manually remove post
      };

    case "DELETE_DATA_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    // POST request actions
    case "POST_DATA_REQUEST":
      return {
        ...state,
        error: null,
      };
    case "POST_DATA_SUCCESS":
      return {
        ...state,
        postData: action.payload,
      };
    case "POST_DATA_FAILURE":
      return {
        ...state,
        error: action.payload,
      };

    case "UPDATE_DATA_REQUEST":
      return {
        ...state,
        error: null,
      };
    case "UPDATE_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };
    case "UPDATE_DATA_FAILURE":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default dataReducer;
