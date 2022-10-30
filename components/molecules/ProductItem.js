import React from "react";
import PropTypes from "prop-types";

const ProductItem = ({ id, thumbnail }) => {
  return (
    <div className="card">
      <img src={thumbnail} className="card-img-top" alt="thumbnail" />
      <div className="card-body">
        <h6 className="card-title">Product title</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="card-item mb-2">
          <ul>
            <li className="card-item_rating">
              <img src="/assets/imgs/icons/star.svg" className="me-1" />
              4.3
            </li>
            <li className="card-item_price">$1,000</li>
          </ul>
        </div>
        <div className="d-grid col-8 mx-auto">
          <a href="#" className="btn btn-primary">
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  thumbnail: PropTypes.string.isRequired,
};

export default ProductItem;
