import './App.css';
// import React from 'react';
import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);


  fetch("http://127.0.0.1:8000")
    .then((response) => response.json())
    .then((data) => setUser(data));


return (
  <div className="App">
    <p>{user}</p>
  </div>
);
}

export default App;
