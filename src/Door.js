const Door = (props) => {
    return (
        <>
            <img src={props.selected || props.revealed ? props.behindImg :"door.webp"} alt="door" onClick={() => props.click(props.number)}></img>
        </>
    )
}

export default Door;