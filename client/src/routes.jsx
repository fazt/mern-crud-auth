import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/authContext";

export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if ( loading ) {
    return <h1>Loading...</h1>;
  }

  console.log({
    isAuthenticated,
    loading,
  });
  if (!isAuthenticated && !loading) return <Navigate to="/login" replace />;

  return <Outlet />;
};
