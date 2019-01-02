import React from "react";
import blog_image1 from '../../images/blog_1.jpg'
import blog_image2 from '../../images/blog_2.jpg'
import blog_image3 from '../../images/blog_3.jpg'
import blog_image4 from '../../images/blog_4.jpg'
import blog_image5 from '../../images/blog_5.jpg'
import blog_image6 from '../../images/blog_6.jpg'
import blog_image7 from '../../images/blog_7.jpg'
class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          img: blog_image1,
          title: "Silver Elite"
        },
        {
          img: blog_image2,
          title: "Nova Gold"
        },
        {
          img: blog_image3,
          title: "Master Guardian Elite"
        },
        {
          img: blog_image4,
          title: "Master Guardian Elite"
        },
        {
          img: blog_image5,
          title: "Master Guardian Elite"
        },
        {
          img: blog_image6,
          title: "Master Guardian Elite"
        }
    ]
  }
}
  render() {
    console.log(this.props.style);
    return (
      <div class="row categories_row">
      {
        this.state.blogs.map((item,index)=> (
          <div className={this.props.style}>
          <div className="blog_category">
            <div className="blog_category_image">
              <img src={item.img} alt />
            </div>
            <div className="blog_category_title">{item.title}</div>
          </div>
          </div>
        ))
      }
      </div>
    );
  }
}

export default Category;
