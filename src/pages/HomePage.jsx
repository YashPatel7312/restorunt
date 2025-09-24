import { useNavigate } from "react-router-dom";
import "../HomePage.css";
import aboutImage from "../assets/about us.jpg";
import footimage from "../assets/where us.jpg";

import g1 from "../assets/grid 1.jpg";
import g2 from "../assets/grid 2.jpg";
import g3 from "../assets/grid 3.jpg";
import g4 from "../assets/grid 4.jpg";
import g5 from "../assets/grid 5.jpg";
import g6 from "../assets/grid 6.jpg";
import CustomGalleryGrid from "../components/CustomGalleryGrid";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="page">
          {/* Hero Section */}
          <main className="content">
            <div className="hero-text">
              <p className="welcome">Welcome to</p>
              <h1 className="restaurant-name">React</h1>
              <h1 className="restaurant-name">Restaurant</h1>
              {/* Button 1 → Menu */}
              <button className="menu-btn" onClick={() => navigate("/menu")}>
                Our Full Menu
              </button>
            </div>
          </main>

          {/* About Section */}
          <div className="parent">
            <div className="div1">
              <img src={aboutImage} alt="About Us" />
            </div>
            <div className="div2">
              <p className="aboutus">About Us</p>
              <p className="font1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident voluptate aut dolore ullam quasi numquam quod molestias
                cum officiis perspiciatis?
              </p>
              <p className="font1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab magni
                animi tenetur eaque vel accusamus placeat quaerat ad.
              </p>
              {/* Button 2 → About */}
              <button className="menu-btn1" onClick={() => navigate("/about")}>
                More About Us
              </button>
            </div>
          </div>

          {/* Favourites Section */}
          <aside className="favourits">
            <div className="setbg">
              <h1 className="favouritstext">Our Favourits</h1>
              <div className="parent1">
                <div className="div3">
                  <h3 className="cf">Food</h3>
                  <ul>
                    <li>
                      <span className="font3">English Breakfast</span>
                      <span className="font4">$ 12</span>
                    </li>
                    <li>
                      <span className="font3">Spicy Beef</span>
                      <span className="font4">$ 15</span>
                    </li>
                    <li>
                      <span className="font3">Saghetti Bolognese</span>
                      <span className="font4">$ 11</span>
                    </li>
                  </ul>
                </div>
                <div className="div4" >
                  <h3 className="cf">Drinks</h3>
                  <ul>
                    <li>
                      <span className="font3">coffee</span>
                      <span className="font4">$ 2</span>
                    </li>
                    <li>
                      <span className="font3">Juice</span>
                      <span className="font4">$ 1</span>
                    </li>
                    <li>
                      <span className="font3">Spirits</span>
                      <span className="font4">$ 5</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Button 3 → Menu */}
              <button className="menu-btn2" onClick={() => navigate("/menu")}>
                OUR FULL MENU
              </button>
            </div>
          </aside>

          {/* Gallery Section */}
          <aside className="gallery">
            <h1 className="gallerytext">Our Gallery</h1>
            <CustomGalleryGrid images={[g1, g2, g3, g4, g5, g6]} baseClass="" />
          </aside>


          {/* Footer / Where Section */}
          <section className="contact-info">
            <div className="parent3">
              <div className="div11">
                <div className="wharearea">
                  <p className="whare">where to find us</p>
                  <p className="wharetext">47 Bakar Street, London LD1 OND</p>
                </div>
                <br />
                <div className="wharearea">
                  <p className="whare2">Opening Hours</p>
                  <p className="wharetext">Mon - Sat : 9:00 - 17:00</p>
                  <p className="wharetext">Sat - Sun : 10:00 - 15:00</p>
                </div>
              </div>
              <div className="div12">
                <img src={footimage} alt="image" />
              </div>
            </div>
          </section >
        </div>
        <footer />
      </div>
    </>
  );
}
