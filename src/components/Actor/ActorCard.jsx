
const ActorCard = ({name,image,gender,country,birthday,deathday}) => {

   
    return(
        <div>
            <div>
                <img src={image}/>
            </div>
            <h1>{name} {!!gender && `(${gender})`}</h1>
            <p>{country ? `Comes from (${country})`: "No country known"}</p>

            {!!birthday && <div>Born {birthday}</div>}
            <p>{deathday ? `Died on (${deathday})`: "Alive"}</p>
            
        </div>
    )
}
export default ActorCard