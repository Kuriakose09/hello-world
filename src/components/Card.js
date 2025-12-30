function Card(props){
    return(
        <div>

            <h1><span>{props.id+1}, </span>Name : {props.name}</h1>
            <h2>Age : {props.age}</h2>
        </div>
    );
}

export default Card;