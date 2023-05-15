import './App.css';
import Home from './Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutScreen from "./RoutesScreen/index"
function App() {
  //console.log('heloo------------mohit');
  return (
    <div className="App">
       {/* <Home/> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="RoutScreen" element={<RoutScreen/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
 
export default App;