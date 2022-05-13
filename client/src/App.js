import "./App.css";
import { instance as axios } from "./axios/axios.js";

const makeApiCall = async () => {
  console.log("Making an API call ");
  const result = axios.get("/home");
};

function App() {
  return (
    <div className="App">
      <h4> Nginx Test App</h4>
      <div style={{ marginTop: "50px" }}>
        <button onClick={makeApiCall}> Make API call</button>
      </div>
    </div>
  );
}

export default App;
