import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { signup, errors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(user);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div className="h-full flex items-center justify-center">
      <div className="bg-zinc-800 p-10 max-w-md rounded-md">
        {errors.map((error, index) => (
          <p
            key={index}
            className="text-slate-200 bg-red-500 py-1 px-2 text-sm rounded-sm mb-1"
          >
            {error}
          </p>
        ))}
        <h1 className="text-3xl font-bold">Register</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-xs block my-1 text-slate-300">
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="youremail@domain.tld"
            value={user.email}
            onChange={handleChange}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
            autoFocus
          />

          <label
            htmlFor="username"
            className="text-xs block my-1 text-slate-300"
          >
            Username:
          </label>
          <input
            type="name"
            name="username"
            placeholder="Write your name"
            value={user.username}
            onChange={handleChange}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
          />

          <label
            htmlFor="password"
            className="text-xs block my-1 text-slate-300"
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            placeholder="********"
            value={user.password}
            onChange={handleChange}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
          />

          <button className="bg-indigo-500 px-2 py-1 rounded-sm my-2 disabled:bg-indigo-300">
            Login
          </button>
        </form>
        <p>
          Already Have an Account?{" "}
          <Link className="text-sky-500" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
