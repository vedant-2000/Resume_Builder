import logo from './logo.svg';

import Comp1 from './Comp1';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import Comp2 from './Comp2';
function App() {
  // alert("Please Full Resume Details Then Click Submit Otherwise All Data Get Erased")
  return (
  
   <>
    <Routes>
    <Route exact path="/" element = {<Home/>}></Route>
    <Route exact path="/resume" element = {<Comp1/>}></Route>
    <Route exact path="/tobeprinted" element = {<Comp2/>}></Route>
  </Routes>
      
  </>
      

  );
}

export default App;
