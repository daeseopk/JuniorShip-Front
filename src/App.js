import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Routes/Home/Home";
import SignUp from "./Routes/SignUp/SignUp";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route path="" element={<Home />} />
               <Route path="/Home" element={<Home />} />
               <Route path="/SignUp" element={<SignUp />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
