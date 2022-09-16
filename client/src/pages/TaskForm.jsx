import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    completed: false,
    date: "",
  });
  const navigate = useNavigate();
  const params = useParams();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
      }

      if (params.id) {
        const response = await axios.put(
          `/api/tasks/${params.id}`,
          {
            title: task.title,
            description: task.description,
            completed: task.completed,
            date: task.date,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(response)
      } else {
        await axios.post("/api/tasks", task, {
          headers: {
            Authorization: token,
          },
        });

      }
      
      navigate("/");
    } catch (error) {
      console.log(error);
      window.location.href = "/";
    }
  };

  useEffect(() => {
    const getTask = async () => {
      const token = localStorage.getItem("token");
      if (params.id) {
        const response = await axios.get("/api/tasks/" + params.id, {
          headers: {
            Authorization: token,
          },
        });
        console.log(response.data);
        setTask({
          title: response.data.title,
          description: response.data.description,
          completed: response.data.completed,
          date: response.data.date ? dayjs(response.data.date).utc().format("YYYY-MM-DD") : "",
        });
      }
    };
    getTask();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="description"
          id="description"
          rows="3"
          value={task.description}
          onChange={handleChange}
        ></textarea>
        <input
          type="date"
          name="date"
          value={task.date}
          onChange={handleChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default TaskForm;
