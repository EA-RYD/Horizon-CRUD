import './App.css';
import {Link,BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Login from './pages/Login';
import Home from './pages/Home Page/Home';

/*git*/

function App() {
  
  

  return (
        <Router>
          <nav class="main-nav">
            <button onClick={()=> {}} class="logo">
              <div class="sun"></div>
              <div class="left"></div>
              <div class="right"></div>
            </button>
            <h1 class="company">Horizon</h1>
            <ul>
              
              <div class="searchbar">
                <form action="" >
                  <input id="sbar" type="text" placeholder='ENTER QUERY' required></input>
                  <button id="sbutton" type="submit"></button>
                </form>
              </div>
              
              <li><Link to ={"About"} className="about">About</Link></li>
              <li><Link to ={"Support"} className="support" >Support</Link></li>
              <li><Link to ={"Login"} className="log_reg" >Login/Register</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Login" element={<Login />} />

          </Routes>
        </Router>
        
  );
}

export default App;


