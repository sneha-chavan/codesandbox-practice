import getUserDataFromAPI from "../sagas/apirequest/userapi";

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USER_DATA":
      const data = getUserDataFromAPI();
      console.log(data);
      return;
    case "SET_USER":
      const user = action.payload;
      return { ...state, ...user };
    default:
      return state;
  }
}
