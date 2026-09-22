
function Card (props)
{
    return (
        <>
        <div className="Card">
            <img src={props.img} />
            <h1>{props.name}</h1>
            <p>{props.fact}</p>
            <button>view Profile</button>
        </div>
        </>
    )
}

export default Card;