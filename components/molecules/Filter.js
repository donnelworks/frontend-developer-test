import { Input, Select } from "../atoms";

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

export default Filter;
