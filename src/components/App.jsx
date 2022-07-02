import { useState } from "react";
import Footer from "./Footer";
import Items from "./Items";
import "./style.css"

function App() {
  const [db, setDB] = useState([])
  const conf = {db, setDB}
  return (
    <div className="todo">
      <Items conf={conf} />
      <Footer conf={conf} />
    </div>
  );
}

export default App;
