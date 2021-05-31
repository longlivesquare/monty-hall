import doorImg from './images/door.webp'

const Door = (props) => {
    return (
        <>
            <img src={props.image} alt="door" onClick={() => props.click(props.number)}></img>
        </>
    )
}

export default Door;