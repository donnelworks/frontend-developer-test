import PropTypes from "prop-types";
import { splitCapital } from "../../utils";

const Select = ({ options = [], placeholder, ...props }) => {
  return (
    <select className="form-select" {...props}>
      {placeholder !== "" && (
        <option value="">{splitCapital(placeholder)}</option>
      )}
      {options.map((option, i) => {
        if (options.length > 0) {
          return (
            <option key={i} value={option}>
              {splitCapital(option)}
            </option>
          );
        }
      })}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
};

export default Select;
