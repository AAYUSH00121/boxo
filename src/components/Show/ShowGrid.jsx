
import { useStarredShows } from "../../lib/useStarredShows"
import ShowCard from "./ShowCard"
import styled from "styled-components"


function ShowGrid({shows}){
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
        <FlexGrid>
           
        {shows.map((data)=>
            <ShowCard 
              key={data.show.id} 
              id={data.show.id}
              name={data.show.name} 
              image = {data.show.image? data.show.image.medium: "/not-found-image.png"}
              summary = {data.show.summary? data.show.summary: "Not found"}
              onStarMeClick={onStarMeClick}
              isStarred={ starredShows.includes(data.show.id)}
            />)}
          
       </FlexGrid>  
    )

}

export default ShowGrid

export const FlexGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  animation: fadein 0.3s ease-in forwards;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;