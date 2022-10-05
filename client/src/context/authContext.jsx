import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { loginRequest, registerRequest, verifyToken } from "../api/auth";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    token: null,
    user: null,
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  // clear errors after 5 seconds
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const signup = async (user) => {
    try {
      const response = await registerRequest(user);
      setUser({ ...user, token: response.data.token });
      console.log(response);
      localStorage.setItem("token", response.data.token);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data.message);
    }
  };

  const signin = async (user) => {
    try {
      const response = await loginRequest(user);
      setUser({ ...user, token: response.data.token });
      console.log(response);
      localStorage.setItem("token", response.data.token);
      setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser({ token: null, user: null });
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkLogin = async () => {
      const token = localStorage.getItem("token");
      if (!token) return setIsAuthenticated(false);

      try {
        const verified = await verifyToken(token);
        if (!verified.data) {
          return setIsAuthenticated(false);
        }
        setIsAuthenticated(true);
      } catch (error) {
        setErrors(error.response.data.message);
        localStorage.removeItem("token");
      }
      
      setLoading(false);
    };
    checkLogin();
  }, [localStorage.getItem("token")]);

  return (
    <AuthContext.Provider
      value={{
        ...user,
        signup,
        signin,
        logout,
        isAuthenticated,
        errors,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
