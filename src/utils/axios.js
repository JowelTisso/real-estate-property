import axios from "axios";
import toast from "react-hot-toast";

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
