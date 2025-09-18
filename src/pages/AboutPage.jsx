import "../AboutPage.css";
import aboutimg1 from "../assets/aboutimg1.jpg"
import aboutimg2 from "../assets/aboutimg2.jpg"
import g1 from "../assets/grid 1.jpg";
import g2 from "../assets/grid 2.jpg";
import g3 from "../assets/grid 3.jpg";
import g4 from "../assets/grid 4.jpg";
import g5 from "../assets/grid 5.jpg";
import g6 from "../assets/grid 6.jpg";
import Profile1 from "../assets/Profile1.jpg";
import Profile2 from "../assets/profile2.jpg";
import Profile3 from "../assets/profile3.jpg";
import Profile4 from "../assets/profile4.jpg";

export default function AboutPage() {
  return (
    <>
      <div>
        <div className="favourits2">
          <h1 className="favouritstext2">About</h1>
        </div>
        <div className="aboutarea1">
          <p className="abouttext1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores necessitatibus
            quaerat non, explicabo consectetur laudantium vel dicta consequatur eum quo aspernatur
            officia? Tempore doloribus enim quas nam aspernatur est nostrum sint facere iste nesciunt
            nemo explicabo, vitae aut impedit, voluptatem reiciendis corrupti similique laudantium!
            Quaerat itaque ipsum quo eaque?
          </p>
          <p className="abouttext1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus recusandae
            ducimus saepe consequuntur velit dolorem similique assumenda, asperiores voluptatum vel
            modi minima omnis a quia quo molestiae. Incidunt cumque ea odit optio, iusto voluptas ratione
            vitae obcaecati temporibus fuga minima provident aut quasi autem expedita quia dolores at
            placeat perferendis. Nisi qui earum inventore soluta explicabo, labore ut ea nemo reprehenderit
            minus repellat, impedit atque vel debitis autem veritatis optio laboriosam officiis molestiae
            maxime repellendus beatae tempora sapiente! Quam!
          </p>
          <div className="aboutparent">
            <div className="aboutdiv1">
              <img src={aboutimg1} alt="image" className="aboutimg" />
            </div>
            <div className="aboutdiv2">
              <img src={aboutimg2} alt="image" className="aboutimg" />
            </div>
          </div>
          <div className="aboutarea1"></div>
          <p className="abouttext1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, esse nulla, debitis similique,
            ad nihil architecto maiores doloribus quis blanditiis distinctio. Praesentium, harum atque
            fuga nobis eius laboriosam totam consequuntur officia dolorem quo velit incidunt fugiat at
            maxime, molestias esse dignissimos accusantium enim debitis. Id et quidem sapiente adipisci
            dolor ipsa amet tempora porro atque perferendis. Libero odio, molestiae aliquam modi facere,
            veritatis, illo labore deserunt ducimus ipsam rem ipsum perspiciatis eveniet maiores excepturi.
            Architecto sit ducimus inventore officia porro vel? Accusantium recusandae nisi autem iste
            suscipit distinctio, libero rem.
          </p>
        </div>
        <aside className="aboutgallery">
          <h1 className="aboutgalleryfont">IMAGE GALLERY</h1>
          <div className="aboutparent2">
            <div className="aboutdiv5">
              <img src={g1} alt="aboutimage2" className="aboutimage2" />
            </div>
            <div className="aboutdiv6">
              <img src={g2} alt="aboutimage2" className="aboutimage2" />
            </div>
            <div className="aboutdiv7">
              <img src={g3} alt="aboutimage2" className="aboutimage2" />
            </div>
            <div className="aboutdiv8">
              <img src={g4} alt="aboutimage2" className="aboutimage2" />
            </div>
            <div className="aboutdiv9">
              <img src={g5} alt="aboutimage2" className="aboutimage2" />
            </div>
            <div className="aboutdiv10">
              <img src={g6} alt="aboutimage2" className="aboutimage2" />
            </div>
          </div>
        </aside>
        <div className="aboutreview">
          <h1 className="aboutreviewfont">REVIEW</h1>
          <div className="aboutreviewparent">
            <div className="aboutreviewdiv1">
              <div className="testimonial-card">
                <div className="testimonial-text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste culpa perspiciatis.
                    Magnam, explicabo cumque.
                  </p>
                </div>
                <div className="testimonial-footer">
                  <img src={Profile1} alt="Profile1" className="profile-img" />
                  <h3 className="profile-name">John Mike</h3>
                </div>
              </div>
            </div>
            <div className="aboutreviewdiv2">
              <div className="testimonial-card">
                <div className="testimonial-text">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, mollitia?
                  </p>
                </div>
                <div className="testimonial-footer">
                  <img src={Profile2} alt="Profile2" className="profile-img" />
                  <h3 className="profile-name">Maria Cruz</h3>
                </div>
              </div>
            </div>
            <div className="aboutreviewdiv3">
              <div className="testimonial-card">
                <div className="testimonial-text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor itaque 
                    reprehenderit minus tempore. Iste quibusdam facilis excepturi nihil maiores!
                  </p>
                </div>
                <div className="testimonial-footer">
                  <img src={Profile3} alt="Profile3" className="profile-img" />
                  <h3 className="profile-name">Anna Gold</h3>
                </div>
              </div>
            </div>
            <div className="aboutreviewdiv4">
              <div className="testimonial-card">
                <div className="testimonial-text">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum et voluptate minus 
                    error suscipit officiis placeat repudiandae quibusdam officia tempora, reprehenderit, 
                    enim, quidem exercitationem laborum!
                  </p>
                </div>
                <div className="testimonial-footer">
                  <img src={Profile4} alt="Profile" className="profile-img" />
                  <h3 className="profile-name">Nick Burn</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};