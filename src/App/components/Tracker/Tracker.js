import React, {Component} from 'react';
import './Tracker.scss';

class Tracker extends Component {
  constructor(props){
    super(props);
    this.elemIdList = ['home', 'about', 'team', 'blog', 'services', 'contact']; //id of sections
    this.state = {
      home: '',
      about: '',
      team: '',
      services: '',
      contact: ''
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
    switch(index){
      case 0:
        this.setState({home: 'active', about:''});
        break;
      case 1:
        this.setState({home: '', about: 'active', team: ''});
        break;
      case 2:
        this.setState({about: '', team: 'active', blog: ''});
        break;
      case 3: 
        this.setState({team: '', blog: 'active', services: ''});
        break;
      case 4:
        this.setState({blog: '', services: 'active', contact: ''});
        break;
      case 5:
        this.setState({services: '', contact: 'active'});
        break;
      default:
        this.setState({home: '', about: '', team: '', blog: '', services: '', contact: ''});
    }
  }

  render() {
    return (
        <div className="container tracker">

            <div className="secondary-navigation-container container">
              <nav className="secondary-navigation">
                <ul>

                  <li className={this.state.home} onClick={() => this.handleScrollToElement("home")}><a href="#home"> </a></li>
                  <li className={this.state.about} onClick={() => this.handleScrollToElement("about")}><a href="#about"> </a></li>
                  <li className={this.state.team} onClick={() => this.handleScrollToElement("team")}><a href="#team"> </a></li>
                  <li className={this.state.blog} onClick={() => this.handleScrollToElement("blog")}><a href="#blog"> </a></li>
                  <li className={this.state.services} onClick={() => this.handleScrollToElement("services")}><a href="#services"> </a></li>
                  <li className={this.state.contact} onClick={() => this.handleScrollToElement("contact")}><a href="#contact"> </a></li>

                </ul>
              </nav>
            </div>

        </div>
    );
  }
}

export default Tracker;
