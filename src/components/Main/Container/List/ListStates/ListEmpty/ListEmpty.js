import './ListEmpty.css';
import svg from '../../../../../../assets/svg/ListEmpty.svg'
function ListEmpty(props)
{
    
    return(
        <div className="listEmpty">
            <figure>
                <img src={svg} alt="SVG IMG" />
            </figure>
            <p>No Tasks found with given title...</p>
        </div>
    )
}

export { ListEmpty }