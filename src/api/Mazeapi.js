const BASE_URL = "https://api.tvmaze.com";

const movieData = async(querystring)=>{
const response = await fetch(`${BASE_URL}${querystring}`);
const body = await response.json();

return body;
}

export const movieApi =  (query)=> (
   movieData(`/search/shows?q=${query}`)
)