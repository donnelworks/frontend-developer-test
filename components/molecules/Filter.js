import { Input, Select } from "../atoms";
import PropTypes from "prop-types";

const Filter = ({
  categories,
  searchValue,
  categoryValue,
  onChangeSelect,
  onChangeText,
}) => {
  return (
    <div className="row">
      <div className="col-md-3 py-2">
        <Input
          placeholder="Search"
          value={searchValue}
          onChange={(e) => onChangeText(e.target.value)}
        />
      </div>
      <div className="col-md-2 py-2">
        <Select
          options={categories}
          value={categoryValue}
          onChange={(e) => onChangeSelect(e.target.value)}
          placeholder="category"
        />
      </div>
    </div>
  );
};

Filter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  searchValue: PropTypes.string,
  categoryValue: PropTypes.string,
  onChangeSelect: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default Filter;
