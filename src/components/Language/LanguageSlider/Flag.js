import React from "react";
import ukraina from '../../images/Ukrainian.svg';
import german from '../../images/German.svg'
import french from '../../images/French.svg'
import english from '../../images/English.svg';
import japanese from '../../images/Japanese.svg';
import italian from '../../images/Italian.svg';
import daiviet from '../../images/Daiviet.svg';
import swedish from '../../images/Swedish.svg';
import dongkhanh from '../../images/Dongkhanh.svg';
import vietnam from '../../images/vietnam.svg';
import vietcong from '../../images/Vietcong.svg';
import vietrestore from '../../images/vietrestore.svg';

class Flag extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      flags: [
        {
          img: vietcong,
          name: "Viet Kong"
        },
        {
          img: ukraina,
          name: "Ukraina"
        },
        {
          img: french,
          name: "French"
        },
        {
          img: german,
          name: "German"
        },
        {
          img: english,
          name: "English"
        },
        {
          img: daiviet,
          name: "Dai Viet"
        },
        {
          img: vietrestore,
          name: "Restored Viet"
        },
        {
          img: italian,
          name: "Italian"
        },
        {
          img: japanese,
          name: "Japanese"
        },
        {
          img: dongkhanh,
          name: "Dong Khanh"
        },
        {
          img: vietnam,
          name: "Vietnamese"
        },
        {
          img: swedish,
          name: "Swedish"
        },
      ]
    }
  }
  render() {
    var outerstyle = {
      transform: 'translate3d(0px, 0px, 0px)',
      transition: 'all 0s ease 0s',
      width: '2479px'
    }
    var itemStyle = {
      width: '91.778px'
    }
    return (
      <div className="owl-stage" style= {outerstyle}>
        {
          this.state.flags.map((item,index) => (
          <div className="owl-item active" style = {itemStyle}>
            <div className="owl-item language_item">
            <a href="#">
              <div className="flag">
                <img src={item.img} alt />
              </div>
              <div className="lang_name">{item.name}</div>
            </a>
          </div>
          </div>
        ))
        }
      </div>
    );
  }
}

export default Flag;
