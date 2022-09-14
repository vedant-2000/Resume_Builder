import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
function Home() {
  return (
    <div className="App Back">
    <div>
    <p>
       Hello <br/> 
       Welcome To Resume Builder <br/>
       </p>
       <Link to = "/resume" class="btn btn-success">Click Here To Continue</Link>
    </div>
    </div>
  )
}

export default Home;