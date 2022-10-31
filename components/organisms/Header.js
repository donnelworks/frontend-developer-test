import PropTypes from "prop-types";

const Header = ({ children }) => {
  return (
    <section className="header-wrapper mb-5 py-5 py-md-3">
      <div className="container">{children}</div>
    </section>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
