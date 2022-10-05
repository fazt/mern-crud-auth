import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";

// Pages
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import TasksPage from './pages/TasksPage'
import TaskFormPage from "./pages/TaskFormPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <main className="container content-container mx-auto px-10 md:px-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/create-task" element={<TaskFormPage/>} />
              <Route path="/profile" element={<h1>Profile</h1>} />
            </Route>
          </Routes>
        </main>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
