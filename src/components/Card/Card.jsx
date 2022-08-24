import "./Card.css";
import React from "react";
import defaultCoverImg from "../../assets/defaultCoverImg.jpg";
import { FaBed } from "react-icons/fa";
import { MdBathtub } from "react-icons/md";
import { TiChartArea } from "react-icons/ti";
import { VscHeart } from "react-icons/vsc";

const Card = ({
  coverPhoto,
  price,
  rentFrequency,
  rooms,
  title,
  baths,
  area,
  agency,
  isVerified,
  externalID,
  contactName,
}) => {
  const roundedArea = Math.ceil(area);

  return (
    <article className="card br-1x shadow">
      <span className="badge flex-center pointer">
        <VscHeart size={24} />
      </span>
      <img
        src={coverPhoto ? coverPhoto.url : defaultCoverImg}
        alt="Property"
        className="coverImg"
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
