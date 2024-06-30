import { useStarredShows } from "../lib/useStarredShows"

function Starred() {
  const [starredShows] = useStarredShows()

  return (
    <div>Starred pge, Starred {starredShows.length}</div>
  )
}

export default Starred