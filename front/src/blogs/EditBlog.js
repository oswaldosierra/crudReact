import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:8000/blogs/";

const CompEditBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    await axios.put(URI + id, {
      title: title,
      content: content,
    });
    navigate("/");
  };

  const getBlogById = async () => {
    const res = await axios.get(URI + id);
    setTitle(res.data.title);
    setContent(res.data.content);
  };

  useEffect(() => {
    getBlogById();
  }, []);

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
                setContent(e.target.value);
              }}
              className="form-control"
              rows="3"
            ></textarea>
          </div>
          <div />
          <button type="button" onClick={update} className="btn btn-primary">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompEditBlog;
