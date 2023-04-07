import React, { useState, useEffect } from "react";
import MyForm from "../components/Form";
import Blog from "../components/Blog";
import { Card } from "semantic-ui-react";

export default function Blogs() {
  // this is my original state with an array of students
  //arr of obj from db blogs
  //every row is its own obj
  const [blogs, setBlogs] = useState([]);

  //this is the state needed for the UpdateRequest
  const [editingBlog, setEditingBlog] = useState(null);

  const loadBlogs = () => {
    // A function to fetch the list of students that will be load anytime that list change
    fetch("http://localhost:9090/api/blogs")
      .then((response) => response.json())
      .then((blogs) => {
        setBlogs(blogs);
      });
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const onSaveBlog = (newBlog) => {
    //console.log(newStudent, "From the parent - List of Students");
    setBlogs((blogs) => [...blogs, newBlog]);
  };

  //A function to control the update in the parent (student component)
  const updateBlog = (saveBlog) => {
    // console.log("Line 29 savedStudent", savedStudent);
    // This function should update the whole list of students -
    loadBlogs();
  };

  //A function to handle the Delete funtionality
  const onDelete = (blog) => {
    console.log(blog);
    //console.log(student, "delete method")
    //YOUR ID IN URL NEEDS TO MATCH WITH HOW YOU HAVE IT WRITTEN IN YOUR DB
    //blog_id: 1, title: 'test', blog_body: 'test', image: 'test', secondary_image: 'test', …}
    return fetch(`http://localhost:9090/api/blogs/${blog.blog_id}`, {
      method: "DELETE",
    }).then((response) => {
      //console.log(response);
      if (response.ok) {
        loadBlogs();
      }
    });
  };

  //A function to handle the Update functionality
  const onUpdate = (toUpdateBlog) => {
    //console.log(toUpdateStudent);
    setEditingBlog(toUpdateBlog);
  };

  return (
    <div className="container">
      <div className="list-blogs">
        <h2>Blog Project </h2>
        <div>
          <Card.Group className="row text-center ps-0">
            {blogs.map((blog) => {
              return (
                // <li key={blog.id} className="indiv-cards col-md-4">
                //   {" "}
                <Blog blog={blog} toDelete={onDelete} toUpdate={onUpdate} />
                // </li>
              );
            })}
          </Card.Group>
        </div>
        <br />
      </div>
      <MyForm
        key={editingBlog ? editingBlog.id : null}
        onSaveBlog={onSaveBlog}
        editingBlog={editingBlog}
        onUpdateBlog={updateBlog}
      />
    </div>
  );
}
