import './ListZero.css';
const svgSrc = 'empty'


function ListZero(props)
{
    return(
        <div className="listZero">
            <figure>
                <img src={svgSrc} alt="" />
            </figure>
            <p>Create a Task! Click the + icon below</p>
        </div>
    )
}

export { ListZero }