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
        <div className="flex items-center justify-center p-5 ">
    <form onSubmit={onSubmit} className="flex space-x-14"  >
     <div className="flex items-center p-2 rounded-lg shadow-lg bg-white">
        <label htmlFor="inline-radio"className="px-3 py-1 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            <input 
            type='radio' 
            id="inline-radio"
            value="shows" 
            checked={optionChange === "shows"} 
            onChange={onOptionChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            {"   "}
            Shows
        </label>
        <label htmlFor="inline-radio"className="px-3 py-1 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            
            <input 
            type='radio' 
            value="actor" 
             id="inline-radio"
            checked={optionChange === "actor"} 
            onChange={onOptionChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            {"   "}
            Actors
        </label>
        </div>
        <input type='text' value={changeStr} onChange={strChange} className="rounded-lg px-3 py-1 shadow-lg w-56 outline-none border-none" placeholder="Search"/>
        <button className="  bg-red-600 px-3 py-1 rounded-lg shadow-lg hover:cursor-pointer hover:bg-red-800"  type='submit'>Search</button>
    </form>
   
    </div>
)
}

export default SearchForm