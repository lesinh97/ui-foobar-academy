import React from "react";
import course6 from "../../../../../../components/images/member_1.jpg";
import course5 from "../../../../../../components/images/member_2.jpg";
import course4 from "../../../../../../components/images/member_3.jpg";
import course3 from "../../../../../../components/images/member_4.jpg";
import course2 from "../../../../../../components/images/member_5.jpg";

class Members extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      img: [
        {
          img: course2
        },
        {
          img: course3
        },
        {
          img: course4
        },
        {
          img: course5
        },
        {
          img: course6
        },
      ]
    }
  }
  render() {
    console.log(this.props.classes)
    let classes = this.props.classes.map((i,j)=> {
      return {
        ...i,
        img: this.state.img[j].img
      }
    })
    return (
      <div className="members_list d-flex flex-row flex-wrap align-items-start justify-content-start">
        {classes.map((item, index) => (
          <div className="member">
          <div className="member_image">
            <img src={item.img} alt />
          </div>
          <div className="member_title">
            <a href="#">{item.name}</a>
          </div>
        </div>
        )) }
      </div>
    );
  }
}

export default Members;
