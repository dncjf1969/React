import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Practice from "./Practice";
import TodoList from "./Practice_Movie_App/TodoList";
import TodoList2 from "./Practice_Movie_App/TodoList2"
import CoinTracker from "./Practice_Movie_App/CoinTracker"



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/todolist2" element={<TodoList2 />} />
        <Route path="/cointracker" element={<CoinTracker />} />
      </Routes>
    </Router>
  );
}

export default App;