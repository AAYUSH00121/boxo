import styled from "styled-components";
const ShowCard = ({name,image,id,summary, onStarMeClick, isStarred}) => {

    const summaryStripped = summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '') + "...";
    return(
        <SearchCard>
            <SearchImgWrapper>
                <img src={image} className="w-full h-[420px] rounded-3xl"/>
            </SearchImgWrapper>
            <div className="p-4">            
            <h1  className="text-2xl font-bold mb-2">{name}</h1>
            <p className="text-gray-700 mb-4">{summaryStripped }</p>
            <ActionSection>
              <a href={`/show/${id}`} target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-80">Read more</a>
             <StarBtn type="button" onClick={()=>onStarMeClick(id)} className={isStarred && 'animate'}>
               <StarIcon active={isStarred}/></StarBtn>
            </ActionSection>
          </div>
        </SearchCard>
    )
}
export default ShowCard


const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;
export const SearchCard = styled.div`
  width: 300px;
  height: 100%;
  margin: 0 15px 40px;
  h1 {
    margin: 10px 0;
    font-size: 21px;
  }
  p {
    margin-top: 0;
    margin-bottom: 5px;
  }
`;
export const StarIcon = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: ${props => (props.active ? '#ffc806' : '#ddd')};
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`;
export const SearchImgWrapper = styled.div`
  width: 100%;
  height: 420px;
  border-radius: 40px;
  overflow: hidden;
  border: 1px solid #ddd;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;
const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &.animate {
    ${StarIcon} {
      animation: increase 0.75s ease-in forwards;
      @keyframes increase {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(3) rotate(45deg);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;