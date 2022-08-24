import "./FilterItem.css";
import React, { useEffect, useState } from "react";
import { debounce } from "../../utils/debounce";
import { GET_AUTO_COMPLETE } from "../../utils/axios";

const FilterItem = ({
  type,
  placeholder,
  defaultValue,
  data,
  isDynamic = false,
}) => {
  const [keyword, setKeyword] = useState(defaultValue);
  const [optionList, setOptionList] = useState(isDynamic ? [] : data);

  const onContentChange = ({ target }) => {
    setKeyword(target.value);
  };

  const searchAutoCompleteTerm = debounce(async (keyword) => {
    const res = await GET_AUTO_COMPLETE(keyword);
    setOptionList(res?.data.hits);
  });

  useEffect(() => {
    if (isDynamic && keyword !== "") {
      searchAutoCompleteTerm(keyword);
    }
  }, [keyword]);

  return (
    <div className="filter-item flex-grow-1x flex-center">
      <p className="filter-item-title">{type}</p>
      <input
        className="filter-input filter-item-content"
        type="text"
        name={type}
        placeholder={placeholder}
        list={type}
        value={keyword}
        onChange={onContentChange}
      ></input>
      <datalist id={type}>
        {optionList?.map((item) => (
          <option key={item.id} value={item.name} />
        ))}
      </datalist>
    </div>
  );
};

export default FilterItem;
