import React, { createContext, useContext, useState } from "react";
import { GET } from "../../utils/axios";
import { API } from "../../utils/Constant";

const defaultValues = {
  properties: [],
  loadProperty: () => {},
  setFilterValues: () => {},
};
const PropertyContext = createContext(defaultValues);

const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterValues, setFilterValues] = useState({
    locationExternalIDs: "5002",
    purpose: "for-rent",
    minPrice: "10000",
    maxPrice: "50000",
    categoryExternalID: "4",
  });
  const [isKeywordSearch, setIsKeywordSearch] = useState(false);

  const loadProperty = async () => {
    setLoading(true);
    const itemCount = 15;
    const url = `${API.PROPERTY_LIST}/?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=${itemCount}`;
    const res = await GET(url);
    setProperties(res?.data.hits);
    setLoading(false);
  };

  const searchProperty = async () => {
    const {
      locationExternalIDs,
      purpose,
      minPrice,
      maxPrice,
      categoryExternalID,
    } = filterValues;
    setLoading(true);
    const itemCount = 15;
    const url = `${API.PROPERTY_LIST}/?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&hitsPerPage=${itemCount}&priceMin=${minPrice}&priceMax=${maxPrice}&categoryExternalID=${categoryExternalID}`;
    const res = await GET(url);
    setProperties(res?.data.hits);
    setLoading(false);
    setIsKeywordSearch(false);
  };

  const changeFilterValues = (values) => {
    setFilterValues((data) => ({ ...data, [values.name]: values.value }));
  };

  return (
    <PropertyContext.Provider
      value={{
        loading: loading,
        properties: properties,
        loadProperty: loadProperty,
        filterValues: filterValues,
        changeFilterValues: changeFilterValues,
        searchProperty: searchProperty,
        isKeywordSearch: isKeywordSearch,
        setIsKeywordSearch: setIsKeywordSearch,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => useContext(PropertyContext);
export default PropertyProvider;
