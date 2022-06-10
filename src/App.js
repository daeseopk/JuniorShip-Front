import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Routes/Home/Home";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route path="" element={<Home />} />
               <Route path="/Home" element={<Home />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
