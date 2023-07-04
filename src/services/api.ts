import axios from "axios";

const instance = axios.create({
  baseURL: "http://www.omdbapi.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
