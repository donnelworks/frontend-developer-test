import { useContext, useEffect, useState } from "react";
import { DetailsContext } from "../../contexts/DetailsContext";

const Slide = () => {
  // Context
  const { images } = useContext(DetailsContext);

  // State
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (images) {
      setLoading(false);
    }
  }, [images]);

  if (loading) {
    return null;
  }

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((image, i) => {
          return (
            <div
              key={i}
              className={i === 0 ? "carousel-item active" : "carousel-item"}
            >
              <img
                src={image}
                className="d-block w-100"
                alt={`thumbnail-${i}`}
              />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slide;
