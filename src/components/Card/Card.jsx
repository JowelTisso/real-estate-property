import "./Card.css";
import React from "react";
import defaultCoverImg from "../../assets/defaultCoverImg.jpg";
import { FaBed } from "react-icons/fa";
import { MdBathtub } from "react-icons/md";
import { TiChartArea } from "react-icons/ti";
import { useFavourite } from "../../context/Provider/FavouriteProvider";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

const Card = ({
  id,
  coverPhoto,
  price,
  rentFrequency,
  rooms,
  title,
  baths,
  area,
  contactName,
  item,
}) => {
  const { favList, addToFavourite, removeFromFavourite } = useFavourite();

  const roundedArea = Math.ceil(area);
  const isFavourite = favList.some((property) => property.id === id);

  const toggleFavourite = () => {
    if (isFavourite) {
      removeFromFavourite({ payload: item });
    } else {
      addToFavourite({ payload: item });
    }
  };

  return (
    <article className="card br-1x shadow">
      <span
        className="badge flex-center pointer card-badge"
        onClick={toggleFavourite}
      >
        {isFavourite ? (
          <IoHeart className="badge-icon" />
        ) : (
          <IoHeartOutline className="badge-icon" />
        )}
      </span>
      <img
        src={coverPhoto ? coverPhoto.url : defaultCoverImg}
        alt="Property"
        className="coverImg"
        loading="lazy"
      />
      <section className="section-details">
        <h1 className="card-price">
          {rentFrequency ? (
            <>
              <span className="price">{`$${price}`}</span>/{rentFrequency}
            </>
          ) : (
            <span className="price">{`$${price}`}</span>
          )}
        </h1>
        <h1 className="card-title">{contactName}</h1>
        <p className="card-description">{title}</p>
        <section className="icon-details">
          <div className="specfication">
            <FaBed size={24} />

            <label className="count">{rooms}</label>
          </div>
          <div className="specfication">
            <MdBathtub size={22} />
            <label className="count">{baths}</label>
          </div>
          <div className="specfication">
            <TiChartArea size={24} />
            <label className="count">{`${roundedArea} sqft`}</label>
          </div>
        </section>
      </section>
    </article>
  );
};

export default Card;
