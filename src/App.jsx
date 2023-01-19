import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CounterP from "./pages/Counter/CounterP"
import Home from "./pages/Home/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter"element={<CounterP />}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
