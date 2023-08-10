import axios from "axios";

const reportAPI = "https://petconnect-server-side.onrender.com/reports";

export default axios.create({
  baseURL: reportAPI,
});
