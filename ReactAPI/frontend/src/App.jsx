import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/book");
      console.log(response.data);
      setBook(response.data);
    })();
  }, []);

  return (
    <>
      <h1>ReactAPI</h1>
      <h2>Number of Book:{book.length}</h2>
    </>
  );
}

export default App;
