import React, { createContext, useContext, useState } from "react";

const defaultValues = {
  favList: [],
  addToFavourite: () => {},
};
const FavouriteContext = createContext(defaultValues);

const FavouriteProvider = ({ children }) => {
  const [favList, setFavList] = useState([]);

  const addToFavourite = ({ payload }) => {
    setFavList((list) => [...list, payload]);
  };

  const removeFromFavourite = ({ payload }) => {
    setFavList((list) =>
      [...list].filter((property) => property.id !== payload.id)
    );
  };

  return (
    <FavouriteContext.Provider
      value={{
        favList: favList,
        addToFavourite: addToFavourite,
        removeFromFavourite: removeFromFavourite,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavourite = () => useContext(FavouriteContext);

export default FavouriteProvider;
