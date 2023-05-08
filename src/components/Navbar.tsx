import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import PostDetails from "./pages/PostDetails";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CRM-BLOG
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="home">
                  Home 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="post">
                  Post
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Add Post
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Edit Post
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
         
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="home" element={<Home />} />
        <Route path="post" element={<Post />} />
        <Route path="post/:id" element={<PostDetails />}/>
      </Routes>
    </>
  );
}

export default Navbar;
