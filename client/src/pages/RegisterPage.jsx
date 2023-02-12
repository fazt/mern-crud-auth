import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Card, Message, Button, Input, Label } from "../components/ui";

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { signup, errors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

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
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <Card>
        {errors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <h1 className="text-3xl font-bold">Register</h1>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="username">Username:</Label>
          <Input type="text" name="username" placeholder="Write your name" />

          <Label htmlFor="email">Email:</Label>
          <Input name="email" placeholder="youremail@domain.tld" autoFocus />

          <Label htmlFor="password">Password:</Label>
          <Input type="password" name="password" placeholder="********" />
          <Button>Submit</Button>
        </form>
        <p>
          Already Have an Account?{" "}
          <Link className="text-sky-500" to="/login">
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
}

export default Register;
