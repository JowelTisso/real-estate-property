export const filterData = {
  location: {
    items: [
      { id: 0, name: "Dubai", value: "5002" },
      { id: 1, name: "Abu Dhabi", value: "6020" },
      { id: 2, name: "Sharjah", value: "5351" },
      { id: 3, name: "Ajman", value: "5385" },
      { id: 4, name: "Fujairah", value: "6542" },
      { id: 5, name: "Al Ain", value: "6057" },
      { id: 6, name: "Ras Al Khaimah", value: "5509" },
    ],
    placeholder: "Location",
    queryName: "locationExternalIDs",
  },
  purpose: {
    items: [
      { id: 0, name: "Rent", value: "for-rent" },
      { id: 1, name: "Buy", value: "for-sale" },
    ],
    placeholder: "Purpose",
    queryName: "purpose",
  },
  minPrice: {
    items: [
      { id: 0, name: "$10000", value: "$10000" },
      { id: 1, name: "$20000", value: "$20000" },
      { id: 2, name: "$30000", value: "$30000" },
      { id: 3, name: "$40000", value: "$40000" },
      { id: 4, name: "$50000", value: "$50000" },
      { id: 5, name: "$60000", value: "$60000" },
      { id: 6, name: "$85000", value: "$85000" },
    ],
    placeholder: "Min Price(AED)",
    queryName: "minPrice",
  },
  maxPrice: {
    items: [
      { id: 0, name: "$50000", value: "$50000" },
      { id: 1, name: "$60000", value: "$60000" },
      { id: 2, name: "$85000", value: "$85000" },
      { id: 3, name: "$110000", value: "$110000" },
      { id: 4, name: "$135000", value: "$135000" },
      { id: 5, name: "$160000", value: "$160000" },
      { id: 6, name: "$185000", value: "$185000" },
    ],
    placeholder: "Max Price(AED)",
    queryName: "maxPrice",
  },
  propertyType: {
    items: [
      { id: 0, name: "Apartment", value: "4" },
      { id: 1, name: "Townhouses", value: "16" },
      { id: 2, name: "Villas", value: "3" },
      { id: 3, name: "Penthouses", value: "18" },
      { id: 4, name: "Hotel Apartments", value: "21" },
      { id: 5, name: "Villa Compound", value: "19" },
      { id: 6, name: "Residential Plot", value: "14" },
      { id: 7, name: "Residential Floor", value: "12" },
      { id: 8, name: "Residential Building", value: "17" },
    ],
    placeholder: "Property Type",
    queryName: "categoryExternalID",
  },
};
