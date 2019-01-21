import React, {Component} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

// components
import Nav from './components/Nav/Nav';
import Tracker from './components/Tracker/Tracker';
import Mobile from './components/Mobile/Mobile';

// sections
import Home from './components/Sections/Home/Home';
import About from './components/Sections/About/About';
import Team from './components/Sections/Team/Team';
import Blog from './components/Sections/Blog/Blog';
import Services from './components/Sections/Services/Services';
import Contact from './components/Sections/Contact/Contact';


class App extends Component {
  render() {
    return (
        <div className="app-content" >
         {/*components*/}
          <Nav/>
          <Tracker/>
          <Mobile/>

          {/*sections*/}
          <Home/>
          <About/>
          <Team/>
          <Services/>
          <Blog/>
          <Contact/>

        </div>
    );
  }
}

export default App;
