import { number, splitCapital } from "../../utils";
import PropTypes from "prop-types";

const ProductInfo = ({ title, rating, price, category, brand }) => {
  return (
    <div className="col-md-4 px-md-5">
      <h3 className="product-info_title mb-0">{title}</h3>
      <img src="/assets/imgs/icons/star.svg" className="me-1" />
      <span className="product-info_rating">{rating}</span>

      <h2 className="product-info_price mt-2 mb-3">${number(price)}</h2>

      <p className="product-info_sub mb-1">
        Category: <strong>{splitCapital(category)}</strong>
      </p>
      <p className="product-info_sub">
        Brand: <strong>{brand}</strong>
      </p>
    </div>
  );
};

ProductInfo.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};

export default ProductInfo;
