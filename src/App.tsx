import "./App.scss";
import "bootstrap/scss/bootstrap.scss";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Post from "./components/pages/Post";
import PostDetails from "./components/pages/PostDetails";
import About from "./components/pages/About";
import AuthRoute from "./components/routes/AuthRoute";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route element={<AuthRoute />}>
          <Route path="post" element={<Post />} />
          <Route path="post/:id" element={<PostDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
