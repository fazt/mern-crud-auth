import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [token, setToken] = useState(null);

  const getTasks = async (token) => {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API}/api/tasks`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.log(response);
    setTasks(response.data);
  };

  const deleteTask = async (id) => {
    try {
      if (token) {
        await axios.delete(`${import.meta.env.VITE_APP_API}/api/tasks/${id}`, {
          headers: {
            Authorization: token,
          },
        });
        getTasks(token);
      }
    } catch (error) {
      window.location.href = "/";
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      getTasks(token);
    }
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      {tasks.map((task) => (
        <div key={task._id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
          <button onClick={() => deleteTask(task._id)}>Delete</button>
          <Link to={`/tasks/${task._id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
