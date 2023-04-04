import React, { useState, useEffect } from "react";
import * as ioicons from "react-icons/io5";
import MyForm from "./Form";
import Blog from "./Blog";

const ListBlogs = () => {
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
    <div className="mybody">
      <div className="list-blogs">
        <h2>Blog Project </h2>
        <ul>
          {blogs.map((blog) => {
            return (
              <li key={blog.id}>
                {" "}
                <Blog blog={blog} toDelete={onDelete} toUpdate={onUpdate} />
              </li>
            );
          })}
        </ul>
      </div>
      <MyForm
        key={editingBlog ? editingBlog.id : null}
        onSaveBlog={onSaveBlog}
        editingBlog={editingBlog}
        onUpdateBlog={updateBlog}
      />
    </div>
  );
};

export default ListBlogs;
