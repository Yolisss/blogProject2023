import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/Navbar";
import ListBlogs from "./components/ListBlogs";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

//Browser router which will actually help connect to the browser
//routes component which is going to be the parent for all our routes
//route, used to set up a single page

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <ListBlogs />
    </div>
  );
}

export default App;
