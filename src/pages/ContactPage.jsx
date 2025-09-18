import { useState, useEffect } from "react";
import "../ContactPage.css";
import Profile1 from '../assets/Profile1.jpg';
import Profile2 from "../assets/profile2.jpg";
import Profile3 from "../assets/profile3.jpg";
import Profile4 from "../assets/profile4.jpg";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    date: "",
    guests: "",
    comments: ""
  });

  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [progress, setProgress] = useState(0);

  // ✅ Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.address ||
      !formData.phone ||
      !formData.date ||
      !formData.guests
    ) {
      setError("please, fill the all information in contact form less comment");
      return;
    }

    setError(""); // clear error

    // reset form
    setFormData({
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      date: "",
      guests: "",
      comments: ""
    });

    // show success popup
    setShowPopup(true);
    setProgress(0);
  };

  // ✅ Progress bar effect
  useEffect(() => {
    if (showPopup) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setShowPopup(false), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [showPopup]);

  return (
    <div>
      <div className="favourits3">
          <h1 className="favouritstext3">About</h1>
        </div>
      <section className="contactsection">
        <div className="contactparent3">
          <div className="contactdiv11">
            <div className="contactwharearea">
              <p className="contactwhare">where to find us</p>
              <p className="contactwharetext">
                47 Bakar Street, London LD1 OND
              </p>
            </div>
            <br />
            <div className="contactwharearea">
              <p className="contactwhare2">Opening Hours</p>
              <p className="contactwharetext">Mon - Sat : 9:00 - 17:00</p>
              <p className="contactwharetext">Sat - Sun : 10:00 - 15:00</p>
            </div>
          </div>

          {/* ✅ Contact Form */}
          <div className="contactdiv12">
            <form onSubmit={handleSubmit} className="reservation-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Number Of Guests</label>
                  <input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label>Comments</label>
                <textarea
                  name="comments"
                  rows="3"
                  value={formData.comments}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>

              {error && <p className="error-msg">{error}</p>}
            </form>

            {/* ✅ Success Popup */}
            {showPopup && (
              <div className="popup">
                <p>
                  🎉 Congratulations, your form is submitted successfully.
                  <br />
                  Our team will contact you in the next 24 hours to confirm
                  the booking.
                </p>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ✅ Review Section */}
      <div className="contactreview">
        <h1 className="contactreviewfont">REVIEW</h1>
        <div className="contactreviewparent">
          <div className="contactreviewdiv1">
            <div className="contacttestimonial-card">
              <div className="contacttestimonial-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi iste culpa perspiciatis. Magnam, explicabo
                  cumque.
                </p>
              </div>
              <div className="contacttestimonial-footer">
                <img
                  src={Profile1}
                  alt="Profile1"
                  className="contactprofile-img"
                />
                <h3 className="contactprofile-name">John Mike</h3>
              </div>
            </div>
          </div>
          <div className="contactreviewdiv2">
            <div className="contacttestimonial-card">
              <div className="contacttestimonial-text">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolores, mollitia?
                </p>
              </div>
              <div className="contacttestimonial-footer">
                <img
                  src={Profile2}
                  alt="Profile2"
                  className="contactprofile-img"
                />
                <h3 className="contactprofile-name">Maria Cruz</h3>
              </div>
            </div>
          </div>
          <div className="contactreviewdiv3">
            <div className="contacttestimonial-card">
              <div className="contacttestimonial-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quam dolor itaque reprehenderit minus tempore. Iste
                  quibusdam facilis excepturi nihil maiores!
                </p>
              </div>
              <div className="contacttestimonial-footer">
                <img
                  src={Profile3}
                  alt="Profile3"
                  className="contactprofile-img"
                />
                <h3 className="contactprofile-name">Anna Gold</h3>
              </div>
            </div>
          </div>
          <div className="contactreviewdiv4">
            <div className="contacttestimonial-card">
              <div className="contacttestimonial-text">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum et voluptate minus error suscipit officiis placeat
                  repudiandae quibusdam officia tempora, reprehenderit,
                  enim, quidem exercitationem laborum!
                </p>
              </div>
              <div className="contacttestimonial-footer">
                <img
                  src={Profile4}
                  alt="Profile"
                  className="contactprofile-img"
                />
                <h3 className="contactprofile-name">Nick Burn</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
