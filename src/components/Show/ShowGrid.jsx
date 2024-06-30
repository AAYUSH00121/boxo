
import { useStarredShows } from "../../lib/useStarredShows"
import ShowCard from "./ShowCard"


function ShowGrid({show}){
 const [starredShows, dispatchStarred] = useStarredShows()
    const onStarMeClick = (showId) => {
        const isStarred = starredShows.includes(showId)

        if(isStarred){
            dispatchStarred({type: 'UNSTAR', showId})
        }else{
        dispatchStarred({type: 'STAR', showId})
        }

    }
    return (
        <div>
        {show.map((data)=>
            <ShowCard 
              key={data.show.id} 
              id={data.show.id}
              name={data.show.name} 
              image = {data.show.image? data.show.image.medium: "/not-found-image.png"}
              summary = {data.show.summary? data.show.summary: "Not found"}
              onStarMeClick={onStarMeClick}
              isStarred={ starredShows.includes(data.show.id)}
            />)}
       </div>  
    )

}

export default ShowGrid