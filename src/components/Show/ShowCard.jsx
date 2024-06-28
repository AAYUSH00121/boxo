import { Link } from "react-router-dom"
const ShowCard = ({name,image,id,summary}) => {

    const summaryStripped = summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '');
    return(
        <div>
            <div>
                <img src={image}/>
            </div>
            <h1>{name}</h1>
            <p>{summaryStripped }</p>
            <div>
              <Link to={`/show/${id}`}>Read more</Link>
              <button type="button">Star me</button>
            </div>
        </div>
    )
}
export default ShowCard