// API
const BASE_URL = "https://bayut.p.rapidapi.com/";

export const API = Object.freeze({
  PROPERTY_LIST: `${BASE_URL}properties/list`,
  PROPERTY_DETAIL: `${BASE_URL}properties/detail`,
  AUTO_COMPLETE: `${BASE_URL}auto-complete`,
});

export const COLOR = Object.freeze({
  primary: "#818cf8",
  loader: "#5ee5c0",
});
