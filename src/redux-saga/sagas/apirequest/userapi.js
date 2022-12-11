import axios from "axios";

export default function getUserDataFromAPI() {
  //it is just a PROMISE
  return axios.get("https://jsonplaceholder.typicode.com/users/1");
}
