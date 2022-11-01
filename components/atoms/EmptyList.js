import React from "react";

const EmptyList = () => {
  return (
    <div className="row">
      <div className="col">
        <p className="empty-list-text text-center">{note[locale].empty}</p>
      </div>
    </div>
  );
};

export default EmptyList;
