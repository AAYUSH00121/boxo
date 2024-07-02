import { Link} from "react-router-dom"

export default function Navi(){
    const LINKS = [
        {
          text: "Home",
          to:"/"
        },
        {
            text: "Starred",
            to:"/starred"
          }
    ]
    
    return(
       <div > 
        <ul className="flex items-center justify-between w-60 p-4  ">
            {LINKS.map((item)=>(
                <li key={item.to} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2{} ">
                    <Link to={item.to}>{item.text}</Link>
                </li>
            ))}
          
        </ul>

       </div>
    )
}