import axios from "axios";
import { baseURL } from "./constants";


export const baseService = axios.create({
    baseURL
})