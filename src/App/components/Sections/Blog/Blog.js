import React, {Component} from 'react';
import './Blog.scss';
import 'bootstrap';
import 'popper.js';

class Blog extends Component {
  render() {
    return (
        <section id="blog" className="row">
          <div className="container-fluid p-0">
            <div className="col-lg-12 p-0">
              <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-ride="carousel">
                <div className="carousel-inner ">

                  {/* slide one */}
                  <div className="carousel-item active">
                    <div className="row">
                      {/* blog one */}
                      <div id="blog1" className="p-0 col-12 col-lg-7">
                        <div className="postOne mx-lg-auto mt-5">
                          <a href="#blog">
                            <p className="postTitle1 text-left text-white h4 mb-sm-0 mb-lg-1 pl-sm-4 pl-lg-2 pr-lg-4 pt-lg-2 font-weight-bold">
                              POST TITLE, LIMITED TO TWO LINES OF TEXT
                            </p>
                          </a>
                          <p className="small authorInfo text-white mb-1 pl-sm-4 pl-lg-2 pb-lg-2">
                            John Doe
                            <span className="verticalBar"> | </span>
                            Category
                            <span className="verticalBar"> | </span>
                            November 22nd,2018
                          </p>
                        </div>
                      </div>
                      {/* container for blog 2 and 3 */}
                      <div className="col-12 col-lg-5 px-0 ">
                        {/* blog two */}
                        <div id="blog2" className="col-12 p-0 ">
                          <div className="postTwo">
                            <a href="#blog">
                              <p className="postTitle2 text-left text-white h5 mb-0 pl-sm-4 pl-lg-2 pr-lg-4 pt-lg-1 font-weight-bold">
                                POST TITLE, LIMITED TO TWO LINES OF TEXT
                              </p>
                            </a>
                            <p className="small authorInfo text-white mb-1 pl-sm-4 pl-lg-2 ">
                              John Doe
                              <span className="verticalBar"> | </span>
                              Category
                              <span className="verticalBar"> | </span>
                              November 22nd,2018
                            </p>
                          </div>
                        </div>
                        {/* blog three */}
                        <div id="blog3" className="col-12 ">
                          <div className="postThree">
                            <a href="#blog">
                              <p className="postTitle3 text-left text-white h6 mb-0 pl-sm-4 pl-lg-2 pr-lg-4 pt-lg-1 font-weight-bold">
                                POST TITLE, LIMITED TO TWO LINES OF TEXT
                              </p>
                            </a>
                            <p className="small authorInfo text-white mb-1 pl-sm-4 pl-lg-2">
                              John Doe
                              <span className="verticalBar"> | </span>
                              Category
                              <span className="verticalBar"> | </span>
                              November 22nd,2018
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* silde two */}
                  <div className="carousel-item">
                    <div className="row">
                      {/* blog one */}
                      <div id="blog1" className="p-0 col-12 col-lg-7">
                        <div className="postOne mx-lg-auto mt-5">
                          <a href="#blog">
                            <p className="postTitle1 text-left text-white h4 mb-sm-0 mb-lg-1 pl-sm-4 pl-lg-2 pr-lg-4 pt-lg-2 font-weight-bold">
                              POST TITLE, LIMITED TO TWO LINES OF TEXT
                            </p>
                          </a>
                          <p className="small authorInfo text-white mb-1 pl-sm-4 pl-lg-2 pb-lg-2">
                            John Doe
                            <span className="verticalBar"> | </span>
                            Category
                            <span className="verticalBar"> | </span>
                            November 22nd,2018
                          </p>
                        </div>
                      </div>
                      {/* container for blog 2 and 3 */}
                      <div className="col-12 col-lg-5 px-0">
                        {/* blog two */}
                        <div id="blog2" className="col-12 p-0">
                          <div className="postTwo">
                            <a href="#blog">
                              <p className="postTitle2 text-left text-white h5 mb-0 pl-sm-4 pl-lg-2 pr-lg-4 pt-lg-1 font-weight-bold">
                                POST TITLE, LIMITED TO TWO LINES OF TEXT
                              </p>
                            </a>
                            <p className="small authorInfo text-white mb-1 pl-sm-4 pl-lg-2">
                              John Doe
                              <span className="verticalBar"> | </span>
                              Category
                              <span className="verticalBar"> | </span>
                              November 22nd,2018
                            </p>
                          </div>
                        </div>
                        {/* blog three */}
                        <div id="blog3" className="col-12">
                          <div className="postThree">
                            <a href="#blog">
                              <p className="postTitle3 text-left text-white h6 mb-0 pl-sm-4 pl-lg-2 pr-lg-4 pt-lg-1 font-weight-bold">
                                POST TITLE, LIMITED TO TWO LINES OF TEXT
                              </p>
                            </a>
                            <p className="small authorInfo text-white mb-1 pl-sm-4 pl-lg-2">
                              John Doe
                              <span className="verticalBar"> | </span>
                              Category
                              <span className="verticalBar"> | </span>
                              November 22nd,2018
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* slide three */}
                  <div className="carousel-item">
                    <div className="row">
                      {/* blog one */}
                      <div id="blog1" className="p-0 col-12 col-lg-7">
                        <div className="postOne mx-lg-auto mt-5">
                          <a href="#blog">
                            <p className="postTitle1 text-left text-white h4 mb-sm-0 mb-lg-1 pl-sm-4 pl-lg-2 pr-lg-4 pt-lg-2 font-weight-bold">
                              POST TITLE, LIMITED TO TWO LINES OF TEXT
                            </p>
                          </a>
                          <p className="small authorInfo text-white mb-1 pl-sm-4 pl-lg-2 pb-lg-2">
                            John Doe
                            <span className="verticalBar"> | </span>
                            Category
                            <span className="verticalBar"> | </span>
                            November 22nd,2018
                          </p>
                        </div>
                      </div>
                      {/* container for blog 2 and 3 */}
                      <div className="col-12 col-lg-5 px-0">
                        {/* blog two */}
                        <div id="blog2" className="col-12 p-0">
                          <div className="postTwo">
                            <a href="#blog">
                              <p className="postTitle2 text-left text-white h5 mb-0 pl-sm-4 pl-lg-2 pr-lg-4 pt-lg-1 font-weight-bold">
                                POST TITLE, LIMITED TO TWO LINES OF TEXT
                              </p>
                            </a>
                            <p className="small authorInfo text-white mb-1 pl-sm-4 pl-lg-2">
                              John Doe
                              <span className="verticalBar"> | </span>
                              Category
                              <span className="verticalBar"> | </span>
                              November 22nd,2018
                            </p>
                          </div>
                        </div>
                        {/* blog three */}
                        <div id="blog3" className="col-12">
                          <div className="postThree">
                            <a href="#blog">
                              <p className="postTitle3 text-left text-white h6 mb-0 pl-sm-4 pl-lg-2 pr-lg-4 pt-lg-1 font-weight-bold">
                                POST TITLE, LIMITED TO TWO LINES OF TEXT
                              </p>
                            </a>
                            <p className="small authorInfo text-white mb-1 pl-sm-4 pl-lg-2">
                              John Doe
                              <span className="verticalBar"> | </span>
                              Category
                              <span className="verticalBar"> | </span>
                              November 22nd,2018
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide Indicators */}
                <ol class="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <a className="carousel-control-prev"
                   href="#carouselExampleControls"
                   role="button"
                   data-slide="prev">
                  <span className="carousel-control-prev-icon"
                        aria-hidden="true"/>
                  <span className="sr-only">Previous</span>
                </a>

                <a className="col-12 col-lg-2 carousel-control-next"
                   href="#carouselExampleControls"
                   role="button"
                   data-slide="next">
                  <span className="carousel-control-next-icon"
                        aria-hidden="true"/>
                  <span className="sr-only">Next</span>
                </a>

              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Blog;
