const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const db = require("./db/db-connection.js");

const app = express();
const PORT = process.env.PORT || 9090;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route "/""
app.get("/", (req, res) => {
  res.json({ message: "Hola, from My template ExpressJS with React-Vite" });
});

// create the get request for students in the endpoint '/api/students'
app.get("/api/blogs", async (req, res) => {
  try {
    const { rows: blogs } = await db.query("SELECT * FROM blogs");
    res.send(blogs);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// create the POST request
app.post("/api/blogs", async (req, res) => {
  try {
    const newBlog = {
      title: req.body.title,
      blog_body: req.body.blog_body,
      image: req.body.image,
      secondary_image: req.body.secondary_image,
      date: req.body.date,
    };
    //console.log([newStudent.firstname, newStudent.lastname, newStudent.iscurrent]);
    const result = await db.query(
      "INSERT INTO blogs(title, blog_body, image, secondary_image, date) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        newBlog.title,
        newBlog.blog_body,
        newBlog.image,
        newBlog.secondary_image,
        newBlog.date,
      ]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

// delete request for students
app.delete("/api/blogs/:blogId", async (req, res) => {
  try {
    const blogId = req.params.blogId;
    await db.query("DELETE FROM blogs WHERE id=$1", [blogId]);
    console.log("From the delete request-url", blogId);
    res.status(200).end();
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

//A put request - Update a student
app.put("/api/blogs/:blogId", async (req, res) => {
  //console.log(req.params);
  //This will be the id that I want to find in the DB - the student to be updated
  const blogId = req.params.blogId;
  const updatedBlog = {
    id: req.body.id,
    title: req.body.title,
    blog_body: req.body.blog_body,
    image: req.body.image,
    secondary_image: req.body.secondary_image,
    date: req.body.date,
  };
  console.log("In the server from the url - the blog id", blogId);
  console.log(
    "In the server, from the react - the blog to be edited",
    updatedBlog
  );
  // UPDATE students SET lastname = "something" WHERE id="16";
  const query = `UPDATE blogs SET title=$1, blog_body=$2, image=$3 secondary_image=$4 date=$5 WHERE id=${blogId} RETURNING *`;
  const values = [
    updatedBlog.title,
    updatedBlog.blog_body,
    updatedBlog.image,
    updatedBlog.secondary_image,
    updatedBlog.date,
  ];
  try {
    const updated = await db.query(query, values);
    console.log(updated.rows[0]);
    res.send(updated.rows[0]);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Hola, Server listening on ${PORT}`);
});
