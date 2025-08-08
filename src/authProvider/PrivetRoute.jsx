import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./AuthProvider";
import loading_chicken from "../assets/lotti-animation/loading_chicken.json";
import Lottie from "lottie-react";

const PrivetRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center ">
        <Lottie animationData={loading_chicken} className=" w-24 lg:w-30" />
      </div>
    );
  }

  if (user && user?.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

export default PrivetRoute;
