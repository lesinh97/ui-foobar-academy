import React from "react";
import blog_2 from '../../../../components/images/blog_2.jpg'
import blog_1 from '../../../../components/images/blog_1.jpg'
import blog_post_image from '../../../../components/images/blog_post_image.jpg'
class BlogContent extends React.Component {
  render() {
    return (
      <div className="blog_container">
        <div className="container">
          <div className="row blog_content_row">
            <div className="col">
              <div className="blog_content">
                <div className="blog_post_title_container">
                  <div className="blog_category">
                    <a href="#">travel</a>
                  </div>
                  <div className="blog_title">How to learning English</div>
                </div>
                <div className="blog_text">
                  <p>
                    Nam egestas lorem ex, sit amet commodo tortor faucibus a.
                    Suspendisse commodo, turpis a dapibus fermentum, turpis
                    ipsum rhoncus massa, sed commodo nisi lectus id ipsum. Sed
                    nec elit vehicula, aliquam neque euismod, porttitor ex. Nam
                    consequat iaculis maximus. Suspendisse potenti. In rutrum
                    justo et diam egestas luctus. Mauris eu neque eget odio
                    suscipit eleifend. Sed imperdiet ante quis felis tempor
                    hendrerit. Curabitur eget fermentum ipsum. Sed efficitur
                    eget velit eu vulputate. Duis tincidunt quam in erat
                    dignissim consequat. Praesent tempus leo eu nisl fringilla
                    interdum. Maecenas rutrum libero eget lacus bibendum
                    tristique. Curabitur at felis lobortis, mollis ante ut,
                    tempus elit. Morbi justo nisi, posuere sed augue id, iaculis
                    tincidunt mi. Pellentesque sed dolor sed dui congue tempus a
                    et felis.
                  </p>
                  <div className="blog_quote">
                    <span />
                    I’m sure Gwyneth Paltrow and her Goop disciples would
                    chastise me for my enthusiastic consumption of
                    carbohydrates, but bread is god’s nectar witched into dough,
                    and I will not forsake it.
                  </div>
                  <p>
                    And as for “junk food,” that obscure category, I don’t
                    gravitate toward much of it. When I was growing up, my
                    mother would anoint our school lunches with Little Debbie
                    treats — Oatmeal Creme (sic) Pies, Swiss Rolls — and our
                    pantry generally housed a bag or two of Utz potato chips,
                    but the gastronomical larks stopped there. My sisters and I
                    drank milk with dinner every night. We took vitamins as
                    directed. We were flush with privilege: Our parents
                    possessed the means to feed us bountifully, and our mother
                    dedicated herself to our welfare; she cooked for us most
                    every night. My indulgences tend to correspond with the
                    felicities enabled by an upper-middle-class socioeconomic
                    background: cheeses from specialty stores, crème brûlée at a
                    well-reviewed French restaurant, tea cookies from Whole
                    Foods. In every culinary choice, my coddled upbringing rears
                    its cushioned head.
                  </p>
                  <figure className="blog_post_image">
                    <img src={blog_post_image} alt />
                    <figcaption>Lorem Ipsum Dolor Sit Amet</figcaption>
                  </figure>
                  <p>
                    I can’t argue for the virtues of the Flamin’ Hot Cheetos:
                    None exist. They’re amoral and fundamentally neutral, no
                    more capable of assuaging my grief than the empty husk of
                    “thoughts and prayers.” But not everything requires
                    meaning — not everything needs to be something else. When I
                    tuck away a bag of Flamin’ Hot Cheetos, I do it because I
                    like them, because they’re nothing more than what they
                    reveal themselves to be. That’s enough.
                  </p>
                </div>
                <div className="blog_tags">
                  <ul>
                    <li>
                      <a href="#">Manual</a>
                    </li>
                    <li>
                      <a href="#">Liberty</a>
                    </li>
                    <li>
                      <a href="#">Interpretation</a>
                    </li>
                    <li>
                      <a href="#">Recommendations</a>
                    </li>
                  </ul>
                </div>
                <div className="blog_post_footer d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                  <div className="blog_post_author d-flex flex-row align-items-center justify-content-start">
                    <div className="author_image">
                      <div>
                        <img src="images/blog_author.jpg" alt />
                      </div>
                    </div>
                    <div className="author_info">
                      <ul>
                        <li>
                          <a href="#">Sarah Parker</a>
                        </li>
                        <li>Sep 29, 2017 at 9:48 am</li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog_post_share ml-lg-auto">
                    <span>share</span>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-google" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {}
          <div className="row similar_posts">
            {}
            <div className="col-lg-6">
              <div className="blog_post">
                <div
                  className="blog_image"
                  style={{
                    backgroundImage: `url(${blog_1})`
                  }}
                />
                <div className="blog_title_container">
                  <div className="blog_post_category">
                    <a href="#">travel</a>
                  </div>
                  <div className="blog_post_title">
                    <a href="blog_single.html">Design Better Forms</a>
                  </div>
                  <div className="blog_post_text">
                    <p>
                      Whether it is a signup flow, a multi-view stepper, or a
                      monotonous data entry interface, forms are one of the most
                      important components of digital product design.
                    </p>
                  </div>
                  <div className="read_more">
                    <a href="blog_single.html">
                      Read More <img src="images/right.png" alt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="col-lg-6">
              <div className="blog_post">
                <div
                  className="blog_image"
                  style={{
                    backgroundImage: `url(${blog_2})`
                  }}
                />
                <div className="blog_title_container">
                  <div className="blog_post_category">
                    <a href="#">travel</a>
                  </div>
                  <div className="blog_post_title">
                    <a href="blog_single.html">Art Helps Healing</a>
                  </div>
                  <div className="blog_post_text">
                    <p>
                      Whether it is a signup flow, a multi-view stepper, or a
                      monotonous data entry interface, forms are one of the most
                      important components of digital product design.
                    </p>
                  </div>
                  <div className="read_more">
                    <a href="blog_single.html">
                      Read More <img src="images/right.png" alt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row register">
            <div className="col-lg-6 offset-lg-3">
              <div className="register_form_title">Post a Comment</div>
              <div className="register_form_container">
                <form action="#" id="register_form" className="register_form">
                  <div className="row register_row">
                    <div className="col-lg-6 register_col">
                      <input
                        type="text"
                        className="form_input"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                    <div className="col-lg-6 register_col">
                      <input
                        type="email"
                        className="form_input"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        className="form_input form_text"
                        placeholder="Comment"
                        required="required"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col">
                      <button type="submit" className="form_button trans_200">
                        post a comment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row comments">
            <div className="col-lg-6 offset-lg-3">
              <div className="comments_title">
                Comments <span>(12)</span>
              </div>
              <div className="comments_container">
                <ul className="comments_list">
                  <li className="comment">
                    <div className="comment_content">
                      <div className="comment_title_container d-flex flex-row align-items-center justify-content-start">
                        <div className="comment_image">
                          <div>
                            <img src="images/blog_author.jpg" alt />
                          </div>
                        </div>
                        <div className="comment_info">
                          <div className="comment_name">
                            <a href="#">Sarah Parker</a>
                          </div>
                          <div className="comment_time">
                            Sep 29, 2017 at 9:48 am
                          </div>
                        </div>
                      </div>
                      <div className="comment_text">
                        <p>
                          Nam egestas lorem ex, sit amet commodo tortor faucibus
                          a. Suspendisse commodo, turpis a dapibus fermentum,
                          turpis ipsum.
                        </p>
                      </div>
                    </div>
                    <ul>
                      <li className="comment">
                        <div className="comment_content">
                          <div className="comment_title_container d-flex flex-row align-items-center justify-content-start">
                            <div className="comment_image">
                              <div>
                                <img src="images/blog_author.jpg" alt />
                              </div>
                            </div>
                            <div className="comment_info">
                              <div className="comment_name">
                                <a href="#">Sarah Parker</a>
                              </div>
                              <div className="comment_time">
                                Sep 29, 2017 at 9:48 am
                              </div>
                            </div>
                          </div>
                          <div className="comment_text">
                            <p>
                              Sed imperdiet ante quis felis tempor hendrerit.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="comments_more">
                <div className="comments_more_button">
                  <a href="#">load more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogContent;
