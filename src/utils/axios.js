import axios from "axios";
import toast from "react-hot-toast";
import { API } from "./Constant";

export const GET = async (url) => {
  try {
    return await axios.get(url, {
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    });
  } catch (err) {
    toast.error(err.message);
  }
};

export const GET_AUTO_COMPLETE = async (keyword, limit = 5, page = 0) => {
  try {
    return await GET(
      `${API.AUTO_COMPLETE}?query=${keyword}&hitsPerPage=${limit}&page=${page}`
    );
  } catch (err) {
    toast.error(err.message);
  }
};
