import React from "react";
import Contact from "./Contact";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./ContactPage.css"
class ContactPage extends React.Component {
  render() {
    return(
      <div className="super_container">
      <Header />
        <div class="contact_map">
        <div class="map">
          <div id="google_map" class="google_map">
            <div class="map_container">
              <div id="map"></div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
      </div>
    )
  }
}
export default ContactPage;