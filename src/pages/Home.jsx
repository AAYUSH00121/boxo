import  { useState } from 'react'
import { movieShowApi, moviePeopleApi } from "../api/Mazeapi"
import SearchForm from '../components/SearchForm'
import ShowGrid from '../components/Show/ShowGrid'
import ActorGrid from '../components/Actor/ActorGrid'



function Home() {
   
    const [apiData, setApiData] = useState(null)
    const [apiDataError, setApiDataError] = useState(null)
   
    const onSearch = async function({q, optionChange}){
       
        
        try {
            if(optionChange === "shows"){
                setApiDataError(null)
            const result = await movieShowApi(q)
            setApiData(result);
            }
            else{
                setApiDataError(null)
            const result = await moviePeopleApi(q)
            setApiData(result);
            }
            
        } catch (error) {
            setApiDataError(error)  
        }
        
    }
    const onrender = ()=>{
        if(apiDataError){
            return <div>Error occured: {apiDataError.message}</div>
        }
        if(apiData?.length === 0){
            return <div>No result found</div>
        }
        if(apiData){
        return apiData[0].show 
            ? <ShowGrid shows={apiData}/>
            : <ActorGrid actor ={apiData} />
        }
        return null;     
    }
  return (
    <div >
        <SearchForm onSearch={onSearch}/>

        <div>
        {onrender()}
        </div>
       
    </div>
  )
}

export default Home