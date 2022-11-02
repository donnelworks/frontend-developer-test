import { Slide } from "../atoms";
import PropTypes from "prop-types";

const ProductDesc = ({ images, description }) => {
  return (
    <div className="col-md-8">
      <div className="row">
        <div className="col-12 pb-4">
          <Slide images={images} />
        </div>
        <div className="col-12">
          <h6 className="description-title">Description</h6>
          <p className="description-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

ProductDesc.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string,
};

export default ProductDesc;
