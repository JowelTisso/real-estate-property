import "./Home.css";
import React, { useEffect, useState } from "react";
import { GET, GET_AUTO_COMPLETE } from "../../utils/axios";
import { API } from "../../utils/Constant";
import Header from "../../components/Header/Header";
import FilterItem from "../../components/FilterItem/FilterItem";
import { filterData } from "../../utils/data";
import Card from "../../components/Card/Card";

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await GET(
        `${API.PROPERTY_LIST}/?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
      );
      setProperties(res.data.hits);
    })();
  }, []);

  console.log(properties);

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
          <FilterItem
            type="Location"
            placeholder="Search location"
            defaultValue="Dubai"
            isDynamic={true}
          />
          <FilterItem
            type="Purpose"
            placeholder="Select purpose"
            defaultValue="Buy"
            data={filterData.purpose}
          />
          <FilterItem
            type="Min price"
            placeholder="Select min price"
            defaultValue="$10000"
            data={filterData.minPrice}
          />
          <FilterItem
            type="Max price"
            placeholder="Select max price"
            defaultValue="$185000"
            data={filterData.maxPrice}
          />
          <FilterItem
            type="Property Type"
            placeholder="Select property type"
            defaultValue="Apartment"
            data={filterData.propertyType}
          />
          <div className="search-btn-container flex-center">
            <button className="btn-search br-1x pointer">Search</button>
          </div>
        </section>

        <section className="section-content">
          {properties?.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
