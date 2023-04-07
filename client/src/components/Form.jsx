import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const MyForm = ({ onSaveBlog, editingBlog, onUpdateBlog }) => {
  // This is the original State with not initial blog
  const [blog, setBlog] = useState(
    editingBlog || {
      title: "",
      blog_body: "",
      image: "",
      date: "",
    }
  );

  //create functions that handle the event of the user typing into the form
  const handleTitleChange = (event) => {
    const title = event.target.value;
    setBlog((blog) => ({ ...blog, title }));
  };

  const handleBlogChange = (event) => {
    const blog_body = event.target.value;
    setBlog((blog) => ({ ...blog, blog_body }));
  };

  const handleImageChange = (event) => {
    const image = event.target.value;
    setBlog((blog) => ({ ...blog, image }));
  };
  const handleDateChange = (event) => {
    const date = event.target.value;
    setBlog((blog) => ({ ...blog, date }));
  };

  //   const handleCheckChange = (event) => {
  //     const is_current = event.target.checked;
  //     //console.log(iscurrent);
  //     setStudent((blog) => ({ ...blog, is_current }));
  //   };

  const clearForm = () => {
    setBlog({
      title: "",
      blog_body: "",
      image: "",
      date: "",
    });
  };

  //A function to handle the post request
  const postBlog = (newBlog) => {
    return fetch("http://localhost:9090/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log("From the post ", data);
        //I'm sending data to the List of Students (the parent) for updating the list
        onSaveBlog(data);
        //this line just for cleaning the form
        clearForm();
      });
  };

  //A function to handle the post request
  const putBlog = (toEditBlog) => {
    return fetch(`http://localhost:9090/api/blogs/${toEditBlog.blog_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toEditBlog),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        onUpdateBlog(data);
        //this line just for cleaning the form
        clearForm();
      });
  };

  //A function to handle the submit in both cases - Post and Put request!
  const handleSubmit = (e) => {
    e.preventDefault();
    if (blog.id) {
      putBlog(blog);
    } else {
      postBlog(blog);
    }
  };

  return (
    <Form className="form-blogs" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <input
          type="text"
          id="add-title-name"
          placeholder="Title"
          required
          value={blog.title}
          onChange={handleTitleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Blog</Form.Label>
        <input
          type="text"
          id="add-blog"
          placeholder="Blog"
          required
          value={blog.body_blog}
          onChange={handleBlogChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Image</Form.Label>
        <input
          type="text"
          id="add-image"
          placeholder="Image"
          required
          value={blog.image}
          onChange={handleImageChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Date</Form.Label>
        <input
          type="text"
          id="add-date"
          placeholder="Date"
          required
          value={blog.date}
          onChange={handleDateChange}
        />
      </Form.Group>

      {/* <Form.Check
        type={"checkbox"}
        id={`isCurrent`}
        checked={blog.is_current}
        onChange={handleCheckChange}
        label={`Are they in the current program?`}
      /> */}
      <Form.Group>
        <Button type="submit" variant="outline-success">
          {blog.id ? "Edit Blog" : "Add Blog"}
        </Button>
        {blog.id ? (
          <Button type="button" variant="outline-warning" onClick={clearForm}>
            Cancel
          </Button>
        ) : null}
      </Form.Group>
    </Form>
  );
};

export default MyForm;
