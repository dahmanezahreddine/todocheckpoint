import { useSelector } from "react-redux";
import "./App.css";
import Addtask from "./Components/Addtask";
import Listtask from "./Components/Listtask";
import Filter from "./Components/Filter";
function App() {
  return (
    <div className="App">
      <Filter />
      <Addtask />
      <Listtask />
    </div>
  );
}

export default App;
