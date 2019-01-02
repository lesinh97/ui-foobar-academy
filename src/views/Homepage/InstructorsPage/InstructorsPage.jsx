import React from "react";
import Video from "./Video.js";
import Instructors from "./Instructors";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import './Instructor.css'
class InstructorsPage extends React.Component {
  render() {
    return (
      <div className = "super-container">
      {}
      <Header />
        <div className="home"></div>
        <Video />
        {}
        <Instructors />
        {}
      <Footer />
      </div>
    );
  }
}
export default InstructorsPage;