import React, { Component } from 'react';
import './Blog.scss';

// import code from '../../../../../public/images/blog/post-one.jpg'

class Blog extends Component {
  componentWillMount(){

  }
// 990 px width is mobile
  render(){
    return(
      <div id="blog" className="container" >
        <div id="carouselExampleControls"  className="carousel  slide " data-ride="carousel">
          <div className="carousel-inner">

            {/* slide one */}
            <div className="carousel-item active">
              <div className="row">
                <div className="col-7 blog1 ">
                  <div className="container postOne ">
                    <section className="postInner">
                      <a href="#blog"  className="postTitle1">POST TITLE, LIMITED TO TWO LINES OF TEXT p1 </a>
                      <p className="lead authorInfo">John Doe <span className="verticalBar">|</span> Category <span className="verticalBar">|</span> November 22nd,2018 </p>
                    </section>
                  </div>
                </div>
                <div className="col-5 sharedBlogSection ">
                  <div id="blog3" className="col-12 ">
                    <div  className="container postTwo ">
                      <section className="postInner">
                        <a href="#blog"  className="postTitle2">POST TITLE, LIMITED TO TWO LINES OF TEXT p2</a>
                        <p className="lead authorInfo">John Doe <span className="verticalBar">|</span> Category <span className="verticalBar">|</span> November 22nd,2018 </p>
                      </section>
                    </div>
                  </div>
                  <div id="blog4" className="col-12 ">
                    <div  className="container postThree ">
                      <section className="postInner">
                        <a href="#blog"  className="postTitle3">POST TITLE, LIMITED TO TWO LINES OF TEXT p3</a>
                        <p className="lead authorInfo">John Doe <span className="verticalBar">|</span> Category <span className="verticalBar">|</span> November 22nd,2018 </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* silde two */}
            <div className="carousel-item">
              <div className="row">
                <div className="col-7 blog1 ">
                  <div  className="container postOne ">
                    <section className="postInner">
                      <a href="#blog"  className="postTitle1">POST TITLE, LIMITED TO TWO LINES OF TEXT pa</a>
                      <p className="lead authorInfo">John Doe <span className="verticalBar">|</span> Category <span className="verticalBar">|</span> November 22nd,2018 </p>
                    </section>
                  </div>
                </div>
                <div className="col-5 sharedBlogSection ">
                  <div id="blog3" className="col-12 ">
                    <div  className="container postTwo ">
                      <section className="postInner">
                        <a href="#blog"  className="postTitle2">POST TITLE, LIMITED TO TWO LINES OF TEXT pb</a>
                        <p className="lead authorInfo">John Doe <span className="verticalBar">|</span> Category <span className="verticalBar">|</span> November 22nd,2018 </p>
                      </section>
                    </div>
                  </div>
                  <div id="blog4" className="col-12 ">
                    <div  className="container postThree ">
                      <section className="postInner">
                        <a href="#blog"  className="postTitle3">POST TITLE, LIMITED TO TWO LINES OF TEXT pc</a>
                        <p className="lead authorInfo">John Doe <span className="verticalBar">|</span> Category <span className="verticalBar">|</span> November 22nd,2018 </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* slide three */}
            <div className="carousel-item">
              <div className="row">
                <div className="col-7 blog1 ">
                  <div  className="container postOne ">
                    <section className="postInner">
                      <a href="#blog" className="postTitle1">POST TITLE, LIMITED TO TWO LINES OF TEXT 1</a>
                      <p className="lead authorInfo">John Doe <span className="verticalBar">|</span> Category <span className="verticalBar">|</span> November 22nd,2018 </p>
                    </section>
                  </div>
                </div>
                <div className="col-5 sharedBlogSection ">
                  <div id="blog3" className="col-12 ">
                    <div  className="container postTwo ">
                      <section className="postInner">
                        <a href="#blog" className="postTitle2">POST TITLE, LIMITED TO TWO LINES OF TEXT 2</a>
                        <p className="lead authorInfo">John Doe <span className="verticalBar">|</span> Category <span className="verticalBar">|</span> November 22nd,2018 </p>
                      </section>
                    </div>
                  </div>
                  <div id="blog4" className="col-12 ">
                    <div  className="container postThree ">
                      <section className="postInner">
                        <a href="#blog"  className="postTitle3">POST TITLE, LIMITED TO TWO LINES OF TEXT 3</a>
                        <p className="lead authorInfo">John Doe <span className="verticalBar">|</span> Category <span className="verticalBar">|</span> November 22nd,2018 </p>
                      </section>
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
          <a className="carousel-control-next carosuel" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
}



export default Blog;
