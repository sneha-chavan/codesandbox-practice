//type and payload

//GET USER ACTION
export function getUser() {
  return {
    type: "GET_USER_DATA"
  };
}
//SET USER ACTION
export function setUser(user) {
  return {
    type: "SET_USER",
    payload: user
  };
}
