import PropTypes from "prop-types";

const Select = ({ options = [], ...props }) => {
  return (
    <select className="form-select my-md-3 my-2" {...props}>
      {options.map((option) => {
        const { value } = option;
        if (options.length > 0) {
          return (
            <option key={value} value={option.value}>
              {option.label}
            </option>
          );
        }
      })}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
};

export default Select;
