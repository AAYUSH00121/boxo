import { SearchCard, SearchImgWrapper } from "../Show/ShowCard"
const ActorCard = ({name,image,gender,country,birthday,deathday}) => {

   
    return(
        <SearchCard>
            <SearchImgWrapper>
                <img src={image}/>
            </SearchImgWrapper>
            <h1>{name} {!!gender && `(${gender})`}</h1>
            <p>{country ? `Comes from (${country})`: "No country known"}</p>

            {!!birthday && <div>Born {birthday}</div>}
            <p>{deathday ? `Died on (${deathday})`: "Alive"}</p>
            
        </SearchCard>
    )
}
export default ActorCard