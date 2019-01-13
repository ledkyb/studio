import React, { Component } from 'react';
import './Blog.scss';


// import code from '../../../../../public/images/blog/post-one.jpg'

class Blog extends Component {
  componentWillMount(){

  }
// 990 px width is mobile
// 575 px width and below is xs
  render(){
    return( 
      <div  className="container topContainer p-0 " >
        <div className="row m-0">
          <div className="col-lg-12 p-0">
            <div  id="carouselExampleControls"  className="carousel  slide " data-ride="carousel" >              
              <div className="carousel-inner ">
      
                {/* slide one */}
                <div className="carousel-item active">
                  <div className="row">
                  {/* blog one */}
                    <div id="blog1" className="p-0 col-12 col-lg-7 ">                  
                      <div  className=" postOne mx-lg-auto mt-5 ">   
                        <a href="#"  >
                          <p  className="postTitle1 text-left text-white h4 mb-sm-0 mb-lg-1 pl-sm-4 pl-lg-2 pr-lg-4 pt-lg-2 font-weight-bold ">POST TITLE, LIMITED TO TWO LINES OF TEXT p1 </p>
                        </a>
                        <p className="small authorInfo text-white mb-1 pl-sm-4 pl-lg-2 pb-lg-2">John Doe <span className="verticalBar">|</span> Category <span className="verticalBar">|</span> November 22nd,2018 </p>                    
                      </div>                        
                    </div>                    
                    <div className="col-12 col-lg-5 px-0 "> {/* container for blog 2 and 3 */} 
                      {/* blog two */}
                      <div id="blog2" className="col-12 p-0 "> 
                        <div  className=" postTwo ">
                            <a href="#"  >
                              <p className="postTitle2 text-left text-white h5 mb-0 pl-sm-4 pl-lg-2 pr-lg-4 pt-lg-1  font-weight-bold ">POST TITLE, LIMITED TO TWO LINES OF TEXT p2</p>
                            </a>
                            <p className="small authorInfo text-white mb-1 pl-sm-4 pl-lg-2 ">John Doe <span className="verticalBar">|</span> Category <span className="verticalBar">|</span> November 22nd,2018 </p>
                        </div>
                      </div>
                      {/* blog three */}
                      <div id="blog3" className="col-12 "> 
                        <div  className=" postThree ">
                            <a href="#"  >
                              <p className="postTitle3 text-left text-white h6 mb-0  pl-sm-4 pl-lg-2 pr-lg-4 pt-lg-1 font-weight-bold ">POST TITLE, LIMITED TO TWO LINES OF TEXT p3</p>
                            </a>
                            <p className="small authorInfo text-white mb-1 pl-sm-4 pl-lg-2  ">John Doe <span className="verticalBar">|</span> Category <span className="verticalBar">|</span> November 22nd,2018 </p>
                        </div>
                      </div>                  
                    </div>
                  </div>                       
                </div>


                {/* silde two */}
                <div className="carousel-item">
                <div className="row">
                  {/* blog one */}
                    <div id="blog1" className="p-0 col-12 col-lg-7 ">                  
                      <div  className=" postOne mx-lg-auto mt-5 ">   
                        <a href="#"  >
                          <p  className="postTitle1 text-left text-white h4 mb-sm-0 mb-lg-1 pl-sm-4 pl-lg-2 pr-lg-4 pt-lg-2 font-weight-bold ">POST TITLE, LIMITED TO TWO LINES OF TEXT p1 </p>
                        </a>
                        <p className="small authorInfo text-white mb-1 pl-sm-4 pl-lg-2 pb-lg-2">John Doe <span className="verticalBar">|</span> Category <span className="verticalBar">|</span> November 22nd,2018 </p>                    
                      </div>                        
                    </div>                    
                    <div className="col-12 col-lg-5 px-0 "> {/* container for blog 2 and 3 */} 
                      {/* blog two */}
                      <div id="blog2" className="col-12 p-0 "> 
                        <div  className=" postTwo ">
                            <a href="#"  >
                              <p className="postTitle2 text-left text-white h5 mb-0 pl-sm-4 pl-lg-2 pr-lg-4 pt-lg-1  font-weight-bold ">POST TITLE, LIMITED TO TWO LINES OF TEXT p2</p>
                            </a>
                            <p className="small authorInfo text-white mb-1 pl-sm-4 pl-lg-2 ">John Doe <span className="verticalBar">|</span> Category <span className="verticalBar">|</span> November 22nd,2018 </p>
                        </div>
                      </div>
                      {/* blog three */}
                      <div id="blog3" className="col-12 "> 
                        <div  className=" postThree ">
                            <a href="#"  >
                              <p className="postTitle3 text-left text-white h6 mb-0  pl-sm-4 pl-lg-2 pr-lg-4 pt-lg-1 font-weight-bold ">POST TITLE, LIMITED TO TWO LINES OF TEXT p3</p>
                            </a>
                            <p className="small authorInfo text-white mb-1 pl-sm-4 pl-lg-2  ">John Doe <span className="verticalBar">|</span> Category <span className="verticalBar">|</span> November 22nd,2018 </p>
                        </div>
                      </div>                  
                    </div>
                  </div>                       
                </div>

                {/* slide three */}
                <div className="carousel-item">
                <div className="row">
                  {/* blog one */}
                    <div id="blog1" className="p-0 col-12 col-lg-7 ">                  
                      <div  className=" postOne mx-lg-auto mt-5 ">   
                        <a href="#"  >
                          <p  className="postTitle1 text-left text-white h4 mb-sm-0 mb-lg-1 pl-sm-4 pl-lg-2 pr-lg-4 pt-lg-2 font-weight-bold ">POST TITLE, LIMITED TO TWO LINES OF TEXT p1 </p>
                        </a>
                        <p className="small authorInfo text-white mb-1 pl-sm-4 pl-lg-2 pb-lg-2">John Doe <span className="verticalBar">|</span> Category <span className="verticalBar">|</span> November 22nd,2018 </p>                    
                      </div>                        
                    </div>                    
                    <div className="col-12 col-lg-5 px-0 "> {/* container for blog 2 and 3 */} 
                      {/* blog two */}
                      <div id="blog2" className="col-12 p-0 "> 
                        <div  className=" postTwo ">
                            <a href="#"  >
                              <p className="postTitle2 text-left text-white h5 mb-0 pl-sm-4 pl-lg-2 pr-lg-4 pt-lg-1  font-weight-bold ">POST TITLE, LIMITED TO TWO LINES OF TEXT p2</p>
                            </a>
                            <p className="small authorInfo text-white mb-1 pl-sm-4 pl-lg-2 ">John Doe <span className="verticalBar">|</span> Category <span className="verticalBar">|</span> November 22nd,2018 </p>
                        </div>
                      </div>
                      {/* blog three */}
                      <div id="blog3" className="col-12 "> 
                        <div  className=" postThree ">
                            <a href="#"  >
                              <p className="postTitle3 text-left text-white h6 mb-0  pl-sm-4 pl-lg-2 pr-lg-4 pt-lg-1 font-weight-bold ">POST TITLE, LIMITED TO TWO LINES OF TEXT p3</p>
                            </a>
                            <p className="small authorInfo text-white mb-1 pl-sm-4 pl-lg-2  ">John Doe <span className="verticalBar">|</span> Category <span className="verticalBar">|</span> November 22nd,2018 </p>
                        </div>
                      </div>                  
                    </div>
                  </div>                       
                </div>
              </div>
              <a className="carousel-control-prev carosuel" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="col-12 col-lg-2 carousel-control-next carosuel" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div> 
          </div> 
        </div>                                         
 
      </div>
    )
  }
}



export default Blog;
