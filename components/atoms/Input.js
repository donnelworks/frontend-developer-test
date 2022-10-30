import PropTypes from "prop-types";
const Input = ({ placeholder, ...props }) => {
  return (
    <>
      <input
        className="form-control my-md-3 my-2"
        placeholder={placeholder}
        {...props}
      />
    </>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
};

export default Input;
