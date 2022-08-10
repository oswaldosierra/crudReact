import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/blogs/";

const CompCreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, { title: title, content: content });
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Vista de crear</h1>
          <div className="mb-3">
            <label className="form-label">Titulo</label>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="Titulo"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contenido</label>
            <textarea
              onChange={(e) => {
                console.log(e);
              }}
              className="form-control"
              rows="3"
            ></textarea>
          </div>
          <div />
          <button type="button" onClick={store} className="btn btn-primary">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompCreateBlog;
