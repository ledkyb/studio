import React, { Component } from 'react';
import './Blog.scss';

// import code from '../../../../../public/images/blog/post-one.jpg'

class Blog extends Component {
  componentWillMount(){

  }

  render(){
    return(
      <div id="blog" className="container" >
        <div id="carouselExampleControls"  class="carousel  slide " data-ride="carousel">              
          <div class="carousel-inner">

            {/* slide one */}
            <div class="carousel-item active">
              <div class="row">
                <div class="col-7 blog1 ">                  
                  <div  class="container postOne ">
                    <section class="postInner">
                      <a href="#"  class="postTitle1">POST TITLE, LIMITED TO TWO LINES OF TEXT p1 </a>
                      <p class="lead authorInfo">John Doe <span class="verticalBar">|</span> Category <span class="verticalBar">|</span> November 22nd,2018 </p>
                    </section>
                  </div>                        
                </div>
                <div class="col-5 sharedBlogSection ">
                  <div id="blog3" class="col-12 "> 
                    <div  class="container postTwo ">
                      <section class="postInner">
                        <a href="#"  class="postTitle2">POST TITLE, LIMITED TO TWO LINES OF TEXT p2</a>
                        <p class="lead authorInfo">John Doe <span class="verticalBar">|</span> Category <span class="verticalBar">|</span> November 22nd,2018 </p>
                      </section>
                    </div>
                  </div>
                  <div id="blog4" class="col-12 "> 
                    <div  class="container postThree ">
                      <section class="postInner">
                        <a href="#"  class="postTitle3">POST TITLE, LIMITED TO TWO LINES OF TEXT p3</a>
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
                <div class="col-7 blog1 ">                               
                  <div  class="container postOne ">
                    <section class="postInner">
                      <a href="#"  class="postTitle1">POST TITLE, LIMITED TO TWO LINES OF TEXT pa</a>
                      <p class="lead authorInfo">John Doe <span class="verticalBar">|</span> Category <span class="verticalBar">|</span> November 22nd,2018 </p>
                    </section>
                  </div>                        
                </div>
                <div class="col-5 sharedBlogSection ">
                  <div id="blog3" class="col-12 "> 
                    <div  class="container postTwo ">
                      <section class="postInner">
                        <a href="#"  class="postTitle2">POST TITLE, LIMITED TO TWO LINES OF TEXT pb</a>
                        <p class="lead authorInfo">John Doe <span class="verticalBar">|</span> Category <span class="verticalBar">|</span> November 22nd,2018 </p>
                      </section>
                    </div>
                  </div>
                  <div id="blog4" class="col-12 "> 
                    <div  class="container postThree ">
                      <section class="postInner">
                        <a href="#"  class="postTitle3">POST TITLE, LIMITED TO TWO LINES OF TEXT pc</a>
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
                <div class="col-7 blog1 ">                              
                  <div  class="container postOne ">
                    <section class="postInner">
                      <a href="#" class="postTitle1">POST TITLE, LIMITED TO TWO LINES OF TEXT 1</a>
                      <p class="lead authorInfo">John Doe <span class="verticalBar">|</span> Category <span class="verticalBar">|</span> November 22nd,2018 </p>
                    </section>
                  </div>                 
                </div>
                <div class="col-5 sharedBlogSection ">
                  <div id="blog3" class="col-12 "> 
                    <div  class="container postTwo ">
                      <section class="postInner">
                        <a href="#" class="postTitle2">POST TITLE, LIMITED TO TWO LINES OF TEXT 2</a>
                        <p class="lead authorInfo">John Doe <span class="verticalBar">|</span> Category <span class="verticalBar">|</span> November 22nd,2018 </p>
                      </section>
                    </div>
                  </div>
                  <div id="blog4" class="col-12 "> 
                    <div  class="container postThree ">
                      <section class="postInner">
                        <a href="#"  class="postTitle3">POST TITLE, LIMITED TO TWO LINES OF TEXT 3</a>
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
