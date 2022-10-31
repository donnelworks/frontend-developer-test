import PropTypes from "prop-types";

const DetailProducts = ({ children }) => {
  return (
    <section>
      <div className="container mb-3">
        <div className="row">{children}</div>
      </div>
    </section>
  );
};

DetailProducts.propTypes = {
  children: PropTypes.node,
};

export default DetailProducts;
