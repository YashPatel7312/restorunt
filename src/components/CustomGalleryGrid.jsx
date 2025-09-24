// src/components/CustomGalleryGrid.jsx
import "../styles/gallery.css";

export default function CustomGalleryGrid({ images, baseClass }) {
  return (
    <div className={`${baseClass}parent2`}>
      {images.map((img, index) => (
        <div key={index} className={`${baseClass}div${index + 5}`}>
          <img src={img} alt={`gallery-${index}`} className={`${baseClass}image2`} />
        </div>
      ))}
    </div>
  );
}
