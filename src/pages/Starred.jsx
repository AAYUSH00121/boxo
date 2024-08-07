import { useQuery } from "@tanstack/react-query"
import { useStarredShows } from "../lib/useStarredShows"
import { getShowsByIds } from "../api/Mazeapi"
import ShowGrid from "../components/Show/ShowGrid"

function Starred() {
  const [starredShowsIds] = useStarredShows()

  const {data: starredShows, error: starredShowsError} = useQuery({
    queryKey:['starred', starredShowsIds],
    queryFn: ()=> getShowsByIds(starredShowsIds).then(result =>
       result.map(show =>({show} ))),
    refetchOnWindowFocus: false,
  })
  if(starredShows?.length === 0){
    return <div>No shows were Starred</div>
  }
  if(starredShows?.length > 0){
    return <ShowGrid shows={starredShows}/>
  }
  if(starredShowsError){
    return <div>Error occured: {starredShowsError.message}</div>
  }
  return (
    <div>Show are loading</div>
  )
}

export default Starred