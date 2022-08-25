import "./Home.css";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import FilterItem from "../../components/FilterItem/FilterItem";
import { filterData } from "../../utils/data";
import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";
import { useProperty } from "../../context/Provider/PropertyProvider";
import { debounce } from "../../utils/debounce";
import { GET_AUTO_COMPLETE } from "../../utils/axios";
import { IoIosMenu } from "react-icons/io";

const Home = () => {
  const {
    loading,
    properties,
    loadProperty,
    searchProperty,
    filterValues,
    changeFilterValues,
    setIsKeywordSearch,
    isKeywordSearch,
  } = useProperty();
  const [keyword, setKeyword] = useState("");
  const [optionList, setOptionList] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const onContentChange = ({ target }) => {
    setKeyword(target.value);
  };

  const searchAutoCompleteTerm = debounce(async (keyword) => {
    const res = await GET_AUTO_COMPLETE(keyword);
    setOptionList(res?.data.hits);
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setIsKeywordSearch(true);
    const selectedValue = e.target[0].value;
    const item = optionList.find(
      (item) => item.name.toLowerCase() === selectedValue.toLowerCase()
    );
    const filterItem = {
      name: "locationExternalIDs",
      value: item.externalID,
    };
    changeFilterValues(filterItem);
  };

  const toggleMenu = () => {
    setShowMenu((isVisible) => !isVisible);
  };

  useEffect(() => {
    if (isKeywordSearch) {
      searchProperty();
    }
  }, [filterValues.locationExternalIDs, isKeywordSearch]);

  useEffect(() => {
    if (keyword !== "") {
      searchAutoCompleteTerm(keyword);
    }
  }, [keyword]);

  useEffect(() => {
    (async () => {
      if (properties.length === 0) {
        loadProperty();
      }
    })();
  }, [properties]);

  return (
    <div className="wrapper">
      <Header />
      <main className="content-wrapper">
        <section className="section-header">
          <div className="title-container flex-center">
            <button className="menu-container" onClick={toggleMenu}>
              <IoIosMenu size={24} />
            </button>
            <h1 className="section-title">Search properties to rent</h1>
          </div>
          <form onSubmit={submitHandler} className="search-form">
            <input
              className="search-input br-1x"
              type="text"
              placeholder="Search property"
              list="option"
              value={keyword}
              onChange={onContentChange}
            />
            <datalist id="option">
              {optionList?.map((item) => (
                <option key={item.id} value={item.name} />
              ))}
            </datalist>
          </form>
        </section>
        {showMenu && <div className="menu-backdrop" onClick={toggleMenu}></div>}
        <section
          className={`section-filter br-1x ${
            showMenu ? "show-menu" : "hide-menu"
          }`}
        >
          <FilterItem type="Location" data={filterData.location} />
          <FilterItem type="Purpose" data={filterData.purpose} />
          <FilterItem type="Min price" data={filterData.minPrice} />
          <FilterItem type="Max price" data={filterData.maxPrice} />
          <FilterItem type="Property Type" data={filterData.propertyType} />
          <div className="search-btn-container flex-center">
            <button
              className="btn-search br-1x pointer"
              onClick={searchProperty}
            >
              Search
            </button>
          </div>
        </section>

        <section className="section-content">
          {properties?.map((item) => (
            <Card key={item.id} {...item} item={item} />
          ))}
        </section>
      </main>
      {loading && <Spinner />}
    </div>
  );
};

export default Home;
