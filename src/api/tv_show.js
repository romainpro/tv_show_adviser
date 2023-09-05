import axios from "axios";
import { BASE_URl,API_KEY_PARAM,BACKDROP_BASE_URL } from "../config";


export class TVShowAPI{
   static async fetchpopular(){
         const response = await axios.get(`${BASE_URl}tv/popular${API_KEY_PARAM}`);
        return response.data.results;
    }
}