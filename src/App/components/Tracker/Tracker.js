import React, {Component} from 'react';
import './Tracker.scss';

class Tracker extends Component {
  constructor(props){
    super(props);
    this.elemIdList = ['home', 'about', 'team', 'services', 'blog', 'contact']; //id of sections
    this.state = {
      activeList: ['', '', '', '', '', '']
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onVisibilityChange);
    this.onVisibilityChange();
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.onVisibilityChange);
  }

  //Function that on click will scroll to target location
  handleScrollToElement = (id) => {
		const elem = document.getElementById(id);
		elem.scrollIntoView({
			behavior: "smooth",
			block: "end"
		});
  }

  //Checks if more than half of section is still visible
  isElementInViewport = id => {
    const elem = document.getElementById(id);
    const rect = elem.getBoundingClientRect();
    return rect.bottom * 2 - window.innerHeight > 0;
  }

  //When user scrolls this function will be called
  onVisibilityChange = () => {
    const inViewList = this.elemIdList.map(id => {
      return this.isElementInViewport(id);
    });
    const indexOfActive = inViewList.findIndex(elem => {
      return elem === true;
    });
    this.checkActiveSection(indexOfActive);
  }

  //Changes which section has active className
  checkActiveSection = index => {
    const newActiveList = ['', '', '', '', '', ''];
    if(index === 2){
      newActiveList.fill("whiteBorder")
      this.setState({activeList: newActiveList});     
    }else{
    	newActiveList[index] = 'active';
    	this.setState({activeList: newActiveList});
    }
  }


  render() {
    return (
        <div className="container tracker">

            <div className="secondary-navigation-container container">
              <nav className="secondary-navigation">
                <ul>

                  <li
                    className={this.state.activeList[0]}
                    onClick={() => this.handleScrollToElement("home")}>
                      <a href="#home" title="Jump to Home section" tabIndex="-1" > </a>
                  </li>
                  <li
                    className={this.state.activeList[1]}
                    onClick={() => this.handleScrollToElement("about")}>
                      <a href="#about" title="Jump to About section" tabIndex="-1" > </a>
                  </li>
                  <li
                    className={this.state.activeList[2]}
                    onClick={() => this.handleScrollToElement("team")}>
                      <a href="#team" title="Jump to Team section" tabIndex="-1" > </a>
                  </li>
                  <li
                    className={this.state.activeList[3]}
                    onClick={() => this.handleScrollToElement("services")}>
                      <a href="#services" title="Jump to Services section" tabIndex="-1" > </a>
                  </li>
                  <li
                    className={this.state.activeList[4]}
                    onClick={() => this.handleScrollToElement("blog")}>
                      <a href="#blog" title="Jump to Blog section" tabIndex="-1" > </a>
                  </li>
                  <li
                    className={this.state.activeList[5]}
                    onClick={() => this.handleScrollToElement("contact")}>
                      <a href="#contact" title="Jump to Contact section" tabIndex="-1" > </a>
                  </li>

                </ul>
              </nav>
            </div>

        </div>
    );
  }
}

export default Tracker;
