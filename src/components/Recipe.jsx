const Recipe = (props) =>{
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.type}</p>
            <p>{props.duration}</p>
        </div>
    )
}

export default Recipe;