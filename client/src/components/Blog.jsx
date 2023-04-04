import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import * as ioicons from "react-icons/io5";

const Blog = ({ blog, toUpdate, toDelete }) => {
  const onUpdate = (toUpdateBlog) => {
    toUpdate(toUpdateBlog);
  };

  const onDelete = (toDeleteBlog) => {
    toDelete(toDeleteBlog);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
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
