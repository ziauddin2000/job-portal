import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://job-portal-server-ten-mu.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  let { signOutUser } = UseAuth();
  let navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          console.error("Unauthorized access - redirecting to login");
          // do logout and redirect to login
          signOutUser().then(() => navigate("/signin"));
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;
