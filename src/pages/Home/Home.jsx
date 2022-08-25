import "./Home.css";
import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import FilterItem from "../../components/FilterItem/FilterItem";
import { filterData } from "../../utils/data";
import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";
import { useProperty } from "../../context/Provider/PropertyProvider";

const Home = () => {
  const { loading, properties, loadProperty, searchProperty } = useProperty();

  console.log(properties);

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
          <h1 className="section-title">Search properties to rent</h1>
          <input
            className="search-input br-1x"
            type="text"
            placeholder="Search property"
          />
        </section>
        <section className="section-filter br-1x">
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
