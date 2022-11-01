import PropTypes from "prop-types";

const Input = ({ placeholder, ...props }) => {
  return (
    <>
      <input className="form-control" placeholder={placeholder} {...props} />
    </>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
};

export default Input;
