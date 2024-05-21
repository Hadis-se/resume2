import React  from "react";
import { useImmer } from "use-immer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCV from "./components/CreateCV";
import Resume from "./components/Resume";
import Home from "./components/Home"; 
import Login from "./LoginandSignup/login";
import SignUp from "./LoginandSignup/SignUp";

const App = () => {
  //👇🏻 state holding the result
  const [result, setResult] = useImmer({
    
    email: "", 
    password: "",
  });

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home result={result} setResult={setResult} />} />
          <Route path="/login" element={<Login result={result} setResult={setResult} />} />
          <Route path="/SignUp" element={<SignUp result={result} setResult={setResult}/>} />
          {/* <Route path="/" element={<CreateCV result={result} setResult={setResult} />} /> */}
          {/* <Route path="/resume" element={<Resume result={result} setResult={setResult} />} />
          <Route path="/resumeFr" element={<Resume result={result} setResult={setResult} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
