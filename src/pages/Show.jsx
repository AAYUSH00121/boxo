import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { showDataId } from "../api/Mazeapi";
import {useQuery,} from '@tanstack/react-query'
import ShowMainData from "../components/Show/ShowMainData";
import Details from "../components/Show/Details";
import Seasons from "../components/Show/Seasons";
import Cast from "../components/Show/Cast";
// This is the code to fetch data from the api and also warping it under custom hook called useShowById
// const useShowById= (showId)=>{
//     const [showData, setShowData] = useState(null)
//     const [showError, setShowError] = useState(null)

//     useEffect(()=>{
//         async function fetchData(){
//             try {
//                 const data= await showDataId(showId);
//                 setShowData(data)
//             } catch (error) {
//                 setShowError(error)
//             }
           
//         }
//         fetchData();
//     },[showId])
//  return { showData, showError}
// }
const Show = ()=>{   
    const {showId} = useParams();
    // const {showData, showError} = useShowById(showId)
    const {data :showData, error : showError} = useQuery({
        queryKey: ['show', showId],
        queryFn: () => showDataId(showId),
      })
      if(showError){
        return <div>we have an error {showError.message}</div>
      }
      if(showData){
        return(
            <div>
                <ShowMainData 
                image = {showData.image} 
                rating = {showData.rating} 
                name={showData.name} 
                summary={showData.summary}
                genres={showData.genres}/>

                <div>
                    <h2>Details</h2>
                   <Details
                   status = {showData.status}
                   premiered = {showData.premiered}
                   network = {showData.network}
                   />
                </div>

                <div>
                    <h2>Seasons</h2>
                    <Seasons
                    seasons = {showData._embedded.seasons}
                    />
                </div>    

                <div> 
                    <h2>Cast</h2>
                    <Cast cast = {showData._embedded.cast}/>
                </div>
                
            </div>
        )
    }
    return <div>Data is Loading</div>
}

export default Show