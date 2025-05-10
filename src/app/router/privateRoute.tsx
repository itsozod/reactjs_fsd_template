import { tokenInstance } from "@shared/utils/token/tokenInstance";
import Layout from "@widgets/layout";
import { Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { getToken } = tokenInstance;
  return getToken() ? <Layout /> : <Navigate to={"/login"} replace />;
};

export default PrivateRoute;
