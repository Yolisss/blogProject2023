import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/Navbar";
import ListBlogs from "./components/ListBlogs";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <ListBlogs />
    </div>
  );
}

export default App;
