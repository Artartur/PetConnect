import axios from "axios";
import { reportAPI } from "./reportAPI";

export default axios.create({
  baseURL: reportAPI,
});
