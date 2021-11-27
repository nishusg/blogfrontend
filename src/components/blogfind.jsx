import React from "react";
import { Link } from "react-router-dom";
class BlogFind extends React.Component {
  render() {
    const { length: count } = this.props.blogs;

    if (count === 0)
      return (
        <h5 style={{ textAlign: "center" }}>
          There are no blogs in the database.
        </h5>
      );
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {this.props.blogs.map((blog) => (
          <div className="card  mb-4" key={blog._id} style={{ width: "20rem" }}>
            <div className="card-header">
              <h5 style={{ textAlign: "center" }}>Blog Card</h5>
            </div>
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.text}</p>
            </div>
            <div className="card-footer" style={{ textAlign: "center" }}>
              <button type="button" className="btn btn-outline-primary">
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  onClick={() => this.props.handleUpdate(blog)}
                  to="/update"
                >
                  Update
                </Link>
              </button>
              <button
                type="button"
                onClick={() => this.props.handleDelete(blog)}
                className="btn btn-outline-danger "
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default BlogFind;
