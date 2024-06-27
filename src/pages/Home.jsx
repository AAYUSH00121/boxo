import  { useState } from 'react'
import { movieShowApi, moviePeopleApi } from "../api/Mazeapi"
function Home() {
    const [changeStr, setChangeStr] = useState("")
    const [apiData, setApiData] = useState(null)
    const [apiDataError, setApiDataError] = useState(null)
    const [optionChange, setOptionChange] = useState("show")

    const onOptionChange = (ev)=>{
        return setOptionChange(ev.target.value)
    }

    const strChange = (ev)=>{
       setChangeStr(ev.target.value)
       
    }


    const onSearch = async function(ev){
        ev.preventDefault()
        
        try {
            if(optionChange === "shows"){
                setApiDataError(null)
            const result = await movieShowApi(changeStr)
            setApiData(result);
            }
            else{
                setApiDataError(null)
            const result = await moviePeopleApi(changeStr)
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
        if(apiData){
        return apiData[0].show 
            ? apiData.map((data)=>
              <div key={data.show.id}>{data.show.name}</div>)
            : apiData.map((data)=>
               <div key={data.person.id}>{data.person.name}</div>)
        }
        return null;     
    }
  return (
    <div>
        <form onSubmit={onSearch}>
            <input type='text' value={changeStr} onChange={strChange}/>
            <label>
                Shows
                <input 
                type='radio' 
                value="shows" 
                checked={optionChange === "shows"} 
                onChange={onOptionChange}/>
            </label>
            <label>
                Actors
                <input 
                type='radio' 
                value="actor" 
                checked={optionChange === "actor"} 
                onChange={onOptionChange}/>
            </label>
            <button type='submit'>Search</button>
        </form>
        <div>
            {onrender()}
        </div>
    </div>
  )
}

export default Home