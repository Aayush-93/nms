import { takeLatest, put, call } from "redux-saga/effects";
import {
  fetchDataSuccess,
  fetchDataFailure,
  postDataSuccess,
  postDataFailure,
  updateDataSuccess,
  updateDataFailure,
  deleteDataRequest,
  deleteDataSuccess,
  deleteDataFailure,
} from "../actions";

// 1. Fetch Products API
const fetchDataFromAPI = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) throw new Error("Failed to fetch products");
  const data = await response.json();
  return data;
};

// 2. Post New Product API
const postDataFromAPI = async (postData) => {
  const response = await fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });
  if (!response.ok) throw new Error("Failed to post product");
  return await response.json();
};

// 3. Update Product API
const updateDataFromAPI = async (updatedata) => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/${updatedata.id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedata),
    }
  );
  if (!response.ok) throw new Error("Failed to update product");
  return await response.json();
};

// 4. Delete Product API
const deleteDataFromAPI = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete product");
  return id; // Return the deleted product id to update UI
};

// Worker Sagas
function* fetchData() {
  try {
    const data = yield call(fetchDataFromAPI);
    console.log("Fetched Data:", data);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

function* postData(action) {
  try {
    const data = yield call(postDataFromAPI, action.payload);
    yield put(postDataSuccess(data));
  } catch (error) {
    yield put(postDataFailure(error.message));
  }
}

function* updateData(action) {
  try {
    const data = yield call(updateDataFromAPI, action.payload);
    yield put(updateDataSuccess(data));
  } catch (error) {
    yield put(updateDataFailure(error.message));
  }
}

function* deleteData(action) {
  try {
    const id = yield call(deleteDataFromAPI, action.payload);
    yield put(deleteDataSuccess(id));
  } catch (error) {
    yield put(deleteDataFailure(error.message));
  }
}

// Watcher Sagas
export function* watchFetchData() {
  yield takeLatest("FETCH_DATA_REQUEST", fetchData);
  yield takeLatest("POST_DATA_REQUEST", postData);
  yield takeLatest("UPDATE_DATA_REQUEST", updateData);
  yield takeLatest("DELETE_DATA_REQUEST", deleteData);
}
