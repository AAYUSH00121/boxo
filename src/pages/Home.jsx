import  { useState } from 'react'
import { movieApi } from "../api/Mazeapi"
function Home() {
    const [changeStr, setChangeStr] = useState("")
    const [apiData, setApiData] = useState(null)
    const [apiDataError, setApiDataError] = useState(null)


    const strChange = (ev)=>{
       setChangeStr(ev.target.value)
       
    }


    const onSearch = async function(ev){
        ev.preventDefault()
        
        try {
            setApiDataError(null)
            const result = await movieApi(changeStr)
            setApiData(result);
        } catch (error) {
            setApiDataError(error)  
        }
        
    }
    const onrender = ()=>{
        if(apiDataError){
            return <div>Error occured: {apiDataError.message}</div>
        }
        if(apiData){
        return apiData.map((data)=>{
            return <div key={data.show.id}>{data.show.name}</div>
        })
         }
        return null;     
    }
  return (
    <div>
        <form onSubmit={onSearch}>
            <input type='text' value={changeStr} onChange={strChange}/>
            <button type='submit'>Search</button>
        </form>
        <div>
            {onrender()}
        </div>
    </div>
  )
}

export default Home