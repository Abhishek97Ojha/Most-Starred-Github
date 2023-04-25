import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Home from "./components/Home";
// import { plainCallApi } from "./plainredux/actions";
import { githubAction } from "./redux/reducers";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log("selector in app.js", selector);

  return (
    <div className="main">
      <div className="nav">
        <h1>Most Starred Repos</h1>
      </div>
      <div className="home">
        <Home />
      </div>
    </div>
  );
}

export default App;
