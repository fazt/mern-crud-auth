import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { signin, error, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signin(user);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <>
      <h3>{error}</h3>
      <form onSubmit={handleSubmit}>
        <input
          label="Write your email"
          type="email"
          name="email"
          placeholder="youremail@domain.tld"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Write your password"
          value={user.password}
          onChange={handleChange}
        />

        <button>Login</button>
      </form>
    </>
  );
}

export default Login;
