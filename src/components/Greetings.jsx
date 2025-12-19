import"../App.css"
function Greetings({message}) {
    return(
        <>
        <h1>{message} </h1>
        <Greetings message = "Whatever"/>
        </>
    )
}


export default Greetings;