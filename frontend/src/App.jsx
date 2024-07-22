import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import Login from "./screens/Login";
import Register from "./screens/Register";
import PrivateRoute from "./screens/PrivateRoute";
import PageNotFound from "./screens/PageNotFound";
import Profile from "./screens/Profile";
import SignIn from "./screens/SignIn";
import Create from "./screens/Create";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="profile" element={<Profile />} />
          <Route path="Create" element={<Create />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
