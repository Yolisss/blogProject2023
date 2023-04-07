import React from "react";
import { Card, Button, Image, Icon } from "semantic-ui-react";

const Blog = ({ blog, toUpdate, toDelete }) => {
  //blog is an obj
  const onUpdate = (toUpdateBlog) => {
    toUpdate(toUpdateBlog);
  };

  const onDelete = (toDeleteBlog) => {
    toDelete(toDeleteBlog);
  };

  return (
    <Card className="cards">
      <Image src={blog.image} className="images" alt="test" />
      <Card.Content>
        <Card.Header>{blog.title}</Card.Header>
        <Card.Meta>{blog.date}</Card.Meta>
        <Card.Description>{blog.blog_body}</Card.Description>

        <Button
          variant="outline-danger"
          onClick={() => {
            onDelete(blog);
          }}
          style={{ padding: "0.6em", marginRight: "0.9em" }}
        >
          <Icon name="trash" />
        </Button>
        <Button
          variant="outline-info"
          onClick={() => {
            onUpdate(blog);
          }}
          style={{ padding: "0.6em" }}
        >
          {" "}
          <Icon name="edit" />
        </Button>
      </Card.Content>
    </Card>
  );
};

export default Blog;
