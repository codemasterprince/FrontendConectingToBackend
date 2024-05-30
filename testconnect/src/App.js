// src/App.js (Updated)
import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [input, setInput] = useState("");
  const [input1, setInput1] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleInputChange1 = (event) => {
    setInput1(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post(
      "/api/data",
      {
        inputData: input,
        inputData1: input1,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    console.log("kya", res);

    const data = res.data;
    if (data.error) {
      throw new Error(data.error);
    }

    setData(data.message);
    // setInput1(data.message);
    // axios.post('/api/data', { inputData: input })
    //   .then(response => {
    //     setData(response.data.message);
    //   })
    //   .catch(error => {
    //     console.error('There was an error!', error);
    //   });
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Enter some data"
          />
          <input
            type="number"
            value={input1}
            onChange={handleInputChange1}
            placeholder="Enter some data"
          />
          <button type="submit">Submit</button>
        </form>
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
