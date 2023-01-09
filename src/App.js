import "./App.css";
import Counter from "./component/Counter";

function App() {
  return (
    <div className="App">
      <Counter initialCount={0} />
    </div>
  );
}

export default App;
