import { Link } from "react-router-dom"
const ShowCard = ({name,image,id,summary, onStarMeClick, isStarred}) => {

    const summaryStripped = summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '');
    return(
        <div>
            <div>
                <img src={image}/>
            </div>
            <h1>{name}</h1>
            <p>{summaryStripped }</p>
            <div>
              <a href={`/show/${id}`} target="_blank" rel="noreferrer">Read more</a>
             <button type="button" onClick={()=>onStarMeClick(id)}>
                { isStarred ?'Unstar me' : 'Star me'}</button>
            </div>
        </div>
    )
}
export default ShowCard