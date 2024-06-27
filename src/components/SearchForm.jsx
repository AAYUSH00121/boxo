import { useState } from "react"

const SearchForm = ({onSearch}) =>{
    const [changeStr, setChangeStr] = useState("") 
    const [optionChange, setOptionChange] = useState("show")


    const onOptionChange = (ev)=>{
        return setOptionChange(ev.target.value)
    }

    const strChange = (ev)=>{
       setChangeStr(ev.target.value)
       
    }
    const onSubmit = (ev)=>{
        ev.preventDefault()

        const options={
            q: changeStr,
            optionChange
        }

        onSearch(options)
    }
    return (
        <div>
    <form onSubmit={onSubmit}>
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
   
    </div>
)
}

export default SearchForm