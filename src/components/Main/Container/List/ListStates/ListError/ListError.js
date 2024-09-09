import './ListError.css';
const svgSrc = 'empty'


function ListError(props)
{
    return(
        <div className="listError">
            <figure>
                <img src={svgSrc} alt="" />
            </figure>
            <p>An error has ocurred. Please reload the page</p>
        </div>
    )
}

export { ListError }