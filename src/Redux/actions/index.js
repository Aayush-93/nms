// actions/index.js
//fetch data ko lagi
export const fetchDataRequest = () => ({
  type: "FETCH_DATA_REQUEST",
});

export const fetchDataSuccess = (data) => ({
  type: "FETCH_DATA_SUCCESS",
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: "FETCH_DATA_FAILURE",
  payload: error,
});

//delete ko lagi
export const deleteDataRequest = (id) => ({
  type: "DELETE_DATA_REQUEST",
  payload: id,
});
export const deleteDataSuccess = (id) => ({
  type: "DELETE_DATA_SUCCESS",
  payload: id,
});

export const deleteDataFailure = (error) => ({
  type: "DELETE_DATA_FAILURE",
  payload: error,
});

//post data ko lagi

export const postDataRequest = (postData) => ({
  type: "POST_DATA_REQUEST",
  payload: postData,
});

export const postDataSuccess = (data) => ({
  type: "POST_DATA_SUCCESS",
  payload: data,
});

export const postDataFailure = (error) => ({
  type: "POST_DATA_FAILURE",
  payload: error,
});
// update ko lagi
export const updateDataRequest = (updateData) => ({
  type: "UPDATE_DATA_REQUEST",
  payload: updateData,
});

export const updateDataSuccess = (data) => ({
  type: "UPDATE_DATA_SUCCESS",
  payload: data,
});
export const updateDataFailure = (error) => ({
  type: "UPDATE_DATA_FAILURE",
  payload: error,
});
