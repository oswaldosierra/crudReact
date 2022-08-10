import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/';

const CompShowBlogs = () => {
    const [blogs, setBlog] = useState([])
    useEffect(() => {
        getBlogs()
    }, [])

    const getBlogs = async () => {
        const res = await axios.get(URI);
        setBlog(res.data);
    }

    const deleteBlog = async (id) => {
        await axios.delete(`${URI}${id}`);
        getBlogs();
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary'>Crear</Link>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Titulo</th>
                                <th scope="col">Contenido</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                blogs.map((blog) => (
                                    <tr key={blog.id}>
                                        <th scope="row">{blog.id}</th>
                                        <td>{blog.title}</td>
                                        <td>{blog.content}</td>
                                        <td>
                                            <Link to={`/edit/${blog.id}`} className='btn btn-info'>Editar</Link>
                                            <button onClick={() => { deleteBlog(blog.id) }} className='btn btn-danger'>Eliminar</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        </div >
    )
}

export default CompShowBlogs;