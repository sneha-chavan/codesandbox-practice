import { useDispatch, useSelector } from "react-redux";
import Api from "./components/Api";
import { getUser, setUser } from "./redux-saga/actions/userActions";
export default function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  console.log(user);
  const getData = () => {
    dispatch(getUser);
    // dispatch(setUser({ name: "jagruti", lname: "khichi" }));
  };
  return (
    <div className="App">
      <Api />
      {/* <button onClick={getData}>Show data of users</button> */}
    </div>
  );
}
