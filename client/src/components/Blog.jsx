import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import * as ioicons from "react-icons/io5";

const Blog = ({ blog, toUpdate, toDelete }) => {
  //blog is an obj
  const onUpdate = (toUpdateBlog) => {
    toUpdate(toUpdateBlog);
  };

  const onDelete = (toDeleteBlog) => {
    toDelete(toDeleteBlog);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <img src={blog.image} className="images" alt="test" />
          <img src={blog.secondary_image} className="images" alt="secondtest" />
          {blog.title} {blog.blog_body} {blog.date}
        </Card.Title>
        <Button
          variant="outline-danger"
          onClick={() => {
            onDelete(blog);
          }}
          style={{ padding: "0.6em", marginRight: "0.9em" }}
        >
          <ioicons.IoTrash />
        </Button>
        <Button
          variant="outline-info"
          onClick={() => {
            onUpdate(blog);
          }}
          style={{ padding: "0.6em" }}
        >
          {" "}
          <ioicons.IoSync />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Blog;
