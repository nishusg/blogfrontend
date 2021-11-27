import React from "react";

import "bootstrap/dist/css/bootstrap.css";
class BlogUpdate extends React.Component {
  handleSave = (e) => {
    e.preventDefault();
    const data = this.props.blog;
    this.props.handleUpload(data);
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
              value={this.props.blogref.title}
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
              value={this.props.blogref.text}
              type="text"
              name="text"
              className="form-control"
              id="text"
            />
          </div>
          <button
            onClick={this.handleSave}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default BlogUpdate;
