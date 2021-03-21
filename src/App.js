import "./App.css";
import ArticleB from "./components/ArticleB";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  var userData = [];
  var getData = JSON.parse(localStorage.getItem("data"));

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      title,
      body,
    };

    if (getData) {
      userData.push(data);
      var newStorage = [...getData, ...userData];
      localStorage.setItem("data", JSON.stringify(newStorage));
    } else {
      userData.push(data);
      localStorage.setItem("data", JSON.stringify(userData));
    }

  };

  return (
    <div className="App container">
      <br />
      <div>
        <div className="row">
          {getData &&
            getData.map((d,i) => <ArticleB key={i} title={d.title} body={d.body} />)}
        </div>
      </div>
      <br />
      <br />
      <div>
        <h1>form</h1>
        <form>
          <div className="mb-3">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="form-control"
              placeholder="title"
            />
          </div>
          <div className="mb-3">
            <input
              value={body}
              onChange={(e) => setBody(e.target.value)}
              type="text"
              className="form-control"
              placeholder="body"
            />
          </div>
          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
