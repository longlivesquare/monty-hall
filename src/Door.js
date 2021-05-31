import doorImg from './images/door.webp'

const Door = (props) => {
    var path = !props.revealed ? doorImg : props.behindImg;
    return (
        <>
            <img src={path} alt="door" onClick={() => props.click(props.number)}></img>
        </>
    )
}

export default Door;