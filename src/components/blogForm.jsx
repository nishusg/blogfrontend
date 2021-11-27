import React from "react";

import "bootstrap/dist/css/bootstrap.css";
class BlogForm extends React.Component {
  handleSave = (e) => {
    e.preventDefault();
    this.props.handleSubmit();
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <form method="post">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              onChange={this.props.handleChange}
              type="text"
              name="title"
              className="form-control"
              id="title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Text
            </label>
            <input
              onChange={this.props.handleChange}
              type="text"
              name="text"
              className="form-control"
              id="text"
            />
          </div>
          <button
            type="submit"
            onClick={this.handleSave}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default BlogForm;
