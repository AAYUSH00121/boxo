import { useParams, Link } from "react-router-dom";

import { showDataId } from "../api/Mazeapi";
import {useQuery,} from '@tanstack/react-query'
import ShowMainData from "../components/Show/ShowMainData";
import Details from "../components/Show/Details";
import Seasons from "../components/Show/Seasons";
import Cast from "../components/Show/Cast";
import styled from "styled-components";
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
        return <TextCenter>we have an error {showError.message}</TextCenter>
      }
      if(showData){
        return(
            <ShowPageWrapper >
                <BackHomeWrapper className=" top-0 left-0 m-4 p-2 inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
            </path>
        </svg>
                <Link to="/" >Go to Homepage</Link>
                </BackHomeWrapper>

                <ShowMainData 
                image = {showData.image} 
                rating = {showData.rating} 
                name={showData.name} 
                summary={showData.summary}
                genres={showData.genres}/>

                <InfoBlock>
                    <h2>Details</h2>
                   <Details
                   status = {showData.status}
                   premiered = {showData.premiered}
                   network = {showData.network}
                   />
                </InfoBlock>

                <InfoBlock>
                    <h2>Seasons</h2>
                    <Seasons
                    seasons = {showData._embedded.seasons}
                    />
                </InfoBlock>    

                <InfoBlock> 
                    <h2>Cast</h2>
                    <Cast cast = {showData._embedded.cast}/>
                </InfoBlock>
                
            </ShowPageWrapper>
        )
    }
    return <div>Data is Loading</div>
}

export default Show

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: #000000;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;


const TextCenter = styled.div`
  text-align: center;
`;

  