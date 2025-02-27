import { useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [name, setName] = useState("IBM");
  const [data, setData] = useState([]);
  const [dayIntervalData, setDayIntervalData] = useState({});

  return (
    <div className="App">
      <Header
        name={name}
        setName={setName}
        setData={setData}
        setDayIntervalData={setDayIntervalData}
      />
    </div>
  );
}

export default App;
