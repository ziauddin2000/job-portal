import { useContext } from "react";
import AuthContext from "../AuthProvider/AuthContext";

const UseAuth = () => {
  let context = useContext(AuthContext);
  return context;
};

export default UseAuth;
