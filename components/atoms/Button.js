import Link from "next/link";
import PropTypes from "prop-types";

const Button = ({ href, label }) => {
  return (
    <Link href={href} className="btn btn-primary">
      {label}
    </Link>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Button;
