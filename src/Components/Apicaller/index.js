import { message } from "antd";
import { takeLatest, call, put, select } from "redux-saga/effects";
import axios from "axios";
import { useDispatch } from "react-redux";

export async function AxiosGet(url) {
  const response = await axios.get(`https://flights-backend-app.herokuapp.com${url}`);
  if (response) {
    return response;
  }
}

export async function AxiosPost(url,data){
  const response = await axios.post(`https://flights-backend-app.herokuapp.com${url}`,data)
  if (response) {
    return response;
  }
}

export async function Apicall(url, data) {
  const response = await fetch(url, {
    method: data.method, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data?.data ? data?.data : ""), // body data type must match "Content-Type" header
  });

  if (response) {
    return response.json();
  }
}
