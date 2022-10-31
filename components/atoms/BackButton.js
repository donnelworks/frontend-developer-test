import PropTypes from "prop-types";
import Link from "next/link";

const BackButton = ({ href, text }) => {
  return (
    <Link href={href} className="btn-back d-flex align-items-center">
      <img src="/assets/imgs/icons/left-arrow.svg" className="me-2" />
      {text}
    </Link>
  );
};

BackButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default BackButton;
