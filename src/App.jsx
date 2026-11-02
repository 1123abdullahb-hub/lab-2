import Welcome from "./Welcome.jsx";
import Counter from "./Counter.jsx";
import Toggle from "./Toggle.jsx";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>SED-312 Advanced Web Engineering</h1>
      <h2>LAB #02 - React Components & State</h2>

      <Welcome />
      <Counter />
      <Toggle />
    </div>
  );
}

export default App;