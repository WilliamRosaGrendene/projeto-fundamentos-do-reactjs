// props são os objetos criados no componete App {author="", content=""}
export function Post(props){
    return(
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div>
    )
}