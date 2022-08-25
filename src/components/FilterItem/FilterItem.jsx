import "./FilterItem.css";
import React from "react";
import { useProperty } from "../../context/Provider/PropertyProvider";

const FilterItem = ({ type, data }) => {
  const { changeFilterValues } = useProperty();

  const getFilterValues = ({ target }) => {
    const item = data.items.find(
      (item) => item.name.toLowerCase() === target.value.toLowerCase()
    );

    const filterItem = {
      name: data.queryName,
      value: data.queryName.toLowerCase().includes("price")
        ? item.value.replace("$", "")
        : item.value,
    };
    changeFilterValues(filterItem);
  };

  return (
    <div className="filter-item flex-grow-1x flex-center">
      <p className="filter-item-title">{type}</p>
      <select
        name={type}
        id={type}
        className="filter-input filter-item-content"
        onChange={getFilterValues}
      >
        {data.items.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterItem;
