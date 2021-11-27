import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./nav";
import { Route, Switch } from "react-router-dom";
import BlogForm from "./blogForm";
import BlogFind from "./blogfind";
import axios from "axios";
import BlogUpdate from "./blogUpdate";
const url = "https://blog-db-backend.herokuapp.com/";
class Blog extends React.Component {
  state = {
    ref: [],
    update: [],
    blogs: [],
  };
  async componentDidMount() {
    const { data: blogs } = await axios.get(url);
    this.setState({ blogs });
  }
  onChange = ({ currentTarget: input }) => {
    const ref = { ...this.state.ref };
    ref[input.name] = input.value;
    this.setState({ ref });
  };

  onSubmit = async () => {
    const { data: blog } = await axios.post(url, this.state.ref);
    const blogs = [...this.state.blogs, blog];
    this.setState({ blogs });
  };

  onDelete = async (bg) => {
    const { data: blog } = await axios.delete(url + "delete/" + bg._id);
    const blogs = this.state.blogs.filter((b) => b._id !== blog._id);
    this.setState({ blogs });
  };

  onUpdate = async (blog) => {
    const update = blog;
    const ref = blog;
    this.setState({ ref, update });
  };
  onUpload = async (blog) => {
    const bg = this.state.ref;
    console.log(bg);
    await axios.put(url + "update/" + bg._id, bg);
    const blogs = [...this.state.blogs];
    const index = blogs.indexOf(blog);
    console.log(index);
    console.log(blog);
    console.log(blogs);
    blogs[index] = { ...bg };
    this.setState({ blogs });
  };

  render() {
    const { blogs } = this.state;
    return (
      <div>
        <Nav blogs={blogs} />
        <br />
        <div className="container">
          <Switch>
            <Route
              path="/new"
              render={(props) => (
                <BlogForm
                  handleChange={this.onChange}
                  handleSubmit={this.onSubmit}
                  {...props}
                />
              )}
            />
            <Route
              path="/update"
              render={(props) => (
                <BlogUpdate
                  handleChange={this.onChange}
                  blogref={this.state.ref}
                  blog={this.state.update}
                  handleUpload={this.onUpload}
                  {...props}
                />
              )}
            />
            <Route
              path="/"
              render={(props) => (
                <BlogFind
                  handleDelete={this.onDelete}
                  handleUpdate={this.onUpdate}
                  blogs={blogs}
                  {...props}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Blog;
