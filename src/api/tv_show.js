import axios from "axios";
import { BASE_URl,API_KEY_PARAM, } from "../config";


export class TVShowAPI{
   static async fetchpopular(){
        const response = await axios.get(`${BASE_URl}tv/popular${API_KEY_PARAM}`);
            return response.data.results;
    }


   static async fetchReconnendations(tvShowid){
        const response = await axios.get(
            `${BASE_URl}tv/${tvShowid}/recommendations${API_KEY_PARAM}`);
            return response.data.results;
    }

   static async fetchByTitle(title){
        const response = await axios.get(
            `${BASE_URl}search/tv${API_KEY_PARAM}&query=${title}`);
            return response.data.results;
    }
}