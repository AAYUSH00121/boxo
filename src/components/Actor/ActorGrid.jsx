import ActorCard from "./ActorCard"
function ActorGrid({actor}){
    return (
        <div>
        {actor.map((data)=>
            <ActorCard
              key={data.person.id} 
              name={data.person.name} 
              country={data.person.country ? data.person.country.name : null}
              image = {data.person.image? data.person.image.medium: "/not-found-image.png"}
              birthday = {data.person.birthday}
              deathday = {data.person.deathday}
              gender= {data.person.gender}
            />)}
       </div>   
    )

}

export default ActorGrid