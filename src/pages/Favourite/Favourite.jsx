import "./Favourite.css";
import React from "react";
import Header from "../../components/Header/Header";
import { useFavourite } from "../../context/Provider/FavouriteProvider";
import Card from "../../components/Card/Card";

const Favourite = () => {
  const { favList } = useFavourite();

  return (
    <div className="wrapper">
      <Header />
      <main className="content-wrapper">
        <section className="section-header">
          <h1 className="section-title">Favourite properties</h1>
        </section>
        <section className="section-content mg-top-4x">
          {favList.length > 0 ? (
            favList?.map((item) => <Card key={item.id} {...item} item={item} />)
          ) : (
            <h1>No properties in favourite!</h1>
          )}
        </section>
      </main>
    </div>
  );
};

export default Favourite;
