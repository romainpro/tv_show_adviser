import axios from "axios";
const BASE_URl = "https://api.themoviedb.org/3/"
const API_KEY_PARAM = "?api_key=bb7158e4024de2a33a15f580dc512189"


export class TVShowAPI{
   static async fetchpopular(){
         const response = await axios.get(`${BASE_URl}tv/popular${API_KEY_PARAM}`);
         console.log("***",response.data.results)
        return response.data.results;
    }
}