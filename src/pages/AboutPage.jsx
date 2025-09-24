import "../AboutPage.css";
import aboutimg1 from "../assets/aboutimg1.jpg"
import aboutimg2 from "../assets/aboutimg2.jpg"
import g1 from "../assets/grid 1.jpg";
import g2 from "../assets/grid 2.jpg";
import g3 from "../assets/grid 3.jpg";
import g4 from "../assets/grid 4.jpg";
import g5 from "../assets/grid 5.jpg";
import g6 from "../assets/grid 6.jpg";
import Card from "../components/Card";
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import profile4 from "../assets/profile4.jpg";
import CustomGalleryGrid from "../components/CustomGalleryGrid";

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
          <CustomGalleryGrid images={[g1, g2, g3, g4, g5, g6]} baseClass="about" />
        </aside>
        <div className="aboutreview">
          <h1 className="aboutreviewfont">REVIEW</h1>
          <div className="aboutreviewparent">
            <div className="aboutreviewdiv1">
              <Card
                title="John Mike"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum et voluptate minus error suscipit officiis placeat repudiandae quibusdam officia tempora, reprehenderit, enim, quidem exercitationem laborum!"
                image={profile1}
                className="about-card"
              />
            </div>
            <div className="aboutreviewdiv2">
              <Card
                title="Maria Cruz"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum et voluptate minus error suscipit officiis placeat repudiandae quibusdam officia tempora, reprehenderit, enim, quidem exercitationem laborum!"
                image={profile2}
              />
            </div>
            <div className="aboutreviewdiv3">
              <Card
                title="Anna Gold"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum et voluptate minus error suscipit officiis placeat repudiandae quibusdam officia tempora, reprehenderit, enim, quidem exercitationem laborum!"
                image={profile3}
              />
            </div>
            <div className="aboutreviewdiv4">
              <Card
                title="Nick Burn"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum et voluptate minus error suscipit officiis placeat repudiandae quibusdam officia tempora, reprehenderit, enim, quidem exercitationem laborum!"
                image={profile4}
                className="about-card"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};