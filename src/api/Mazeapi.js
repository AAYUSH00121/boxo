const BASE_URL = "https://api.tvmaze.com";

const movieData = async(querystring)=>{
const response = await fetch(`${BASE_URL}${querystring}`);
const body = await response.json();

return body;
}

export const movieShowApi =  (query)=> (
   movieData(`/search/shows?q=${query}`)
)

export const moviePeopleApi =  (query)=> (
   movieData(`/search/people?q=${query}`)
)

export const showDataId =  (showId)=> (
   movieData(`/shows/${showId}?embed[]=seasons&embed[]=cast`)
)
