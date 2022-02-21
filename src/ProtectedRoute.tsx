import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const token = Cookies.get("quizJwtToken");

  if (token !== undefined) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login"} />;
  }
}

export default ProtectedRoute;
