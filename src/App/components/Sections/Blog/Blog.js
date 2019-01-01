import React, { Component } from 'react';
import './Blog.scss';

// import code from '../../../../../public/images/blog/post-one.jpg'

class Blog extends Component {
  componentWillMount(){

  }

  render(){
    return(
      <div id="blog" className="container" >
        <div id="carouselExampleControls" /* class="carousel slide" */ data-ride="carousel">              
          <div class="carousel-inner">

            {/* slide one */}
            <div class="carousel-item active">
              <div class="row">
                <div id="blog2" class="col-7 ">                  
                  <div  class="container postOne ">
                    <section class="postInner">
                    <h1 class="postTitle">POST TITLE, LIMITED TO TWO LINES OF TEXT post1 </h1>
                    <p class="lead authorInfo">John Doe <span class="verticalBar">|</span> Category <span class="verticalBar">|</span> November 22nd,2018 </p>
                    </section>
                  </div>                        
                </div>
                <div id="blog1" class="col-5 ">
                  <div id="blog3" class="col-12 "> 
                    <div  class="container postOne ">
                      <section class="postInner">
                      <h1 class="postTitle">POST TITLE, LIMITED TO TWO LINES OF TEXT post 2</h1>
                      <p class="lead authorInfo">John Doe <span class="verticalBar">|</span> Category <span class="verticalBar">|</span> November 22nd,2018 </p>
                      </section>
                    </div>
                  </div>
                  <div id="blog4" class="col-12 "> 
                    <div  class="container postOne ">
                      <section class="postInner">
                      <h1 class="postTitle">POST TITLE, LIMITED TO TWO LINES OF TEXT post3</h1>
                      <p class="lead authorInfo">John Doe <span class="verticalBar">|</span> Category <span class="verticalBar">|</span> November 22nd,2018 </p>
                      </section>
                    </div>
                  </div>                  
                </div>                        
              </div>
            </div>


            {/* silde two */}
            <div class="carousel-item">
              <div class="row">
                <div id="blog2" class="col-7 ">                               
                  <div  class="container postOne ">
                    <section class="postInner">
                    <h1 class="postTitle">POST TITLE, LIMITED TO TWO LINES OF TEXT p1</h1>
                    <p class="lead authorInfo">John Doe <span class="verticalBar">|</span> Category <span class="verticalBar">|</span> November 22nd,2018 </p>
                    </section>
                  </div>                        
                </div>
                <div id="blog1" class="col-5 ">
                  <div id="blog3" class="col-12 "> 
                    <div  class="container postOne ">
                      <section class="postInner">
                      <h1 class="postTitle">POST TITLE, LIMITED TO TWO LINES OF TEXT p2</h1>
                      <p class="lead authorInfo">John Doe <span class="verticalBar">|</span> Category <span class="verticalBar">|</span> November 22nd,2018 </p>
                      </section>
                    </div>
                  </div>
                  <div id="blog4" class="col-12 "> 
                    <div  class="container postOne ">
                      <section class="postInner">
                      <h1 class="postTitle">POST TITLE, LIMITED TO TWO LINES OF TEXT p3</h1>
                      <p class="lead authorInfo">John Doe <span class="verticalBar">|</span> Category <span class="verticalBar">|</span> November 22nd,2018 </p>
                      </section>
                    </div>
                  </div>                  
                </div>                        
              </div>
            </div>

            {/* slide three */}
            <div class="carousel-item">
              <div class="row">
                <div id="blog2" class="col-7 ">                              
                  <div  class="container postOne ">
                    <section class="postInner">
                    <h1 class="postTitle">POST TITLE, LIMITED TO TWO LINES OF TEXT po1</h1>
                    <p class="lead authorInfo">John Doe <span class="verticalBar">|</span> Category <span class="verticalBar">|</span> November 22nd,2018 </p>
                    </section>
                  </div>                 
                </div>
                <div id="blog1" class="col-5 ">
                  <div id="blog3" class="col-12 "> 
                    <div  class="container postOne ">
                      <section class="postInner">
                      <h1 class="postTitle">POST TITLE, LIMITED TO TWO LINES OF TEXT po2</h1>
                      <p class="lead authorInfo">John Doe <span class="verticalBar">|</span> Category <span class="verticalBar">|</span> November 22nd,2018 </p>
                      </section>
                    </div>
                  </div>
                  <div id="blog4" class="col-12 "> 
                    <div  class="container postOne ">
                      <section class="postInner">
                      <h1 class="postTitle">POST TITLE, LIMITED TO TWO LINES OF TEXT po3</h1>
                      <p class="lead authorInfo">John Doe <span class="verticalBar">|</span> Category <span class="verticalBar">|</span> November 22nd,2018 </p>
                      </section>
                    </div>
                  </div>                  
                </div>                        
              </div>
            </div>
          </div>
          <a class="carousel-control-prev carosuel" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next carosuel" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>                                          
      </div>
    )      
  }    
}



export default Blog;
