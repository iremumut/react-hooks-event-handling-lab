function Keypad(){
    function inputHandler(){
        console.log("Entering password...")
    }
    return (
        <diV>
            <input type="password" onChange={inputHandler}></input>
        </diV>
    )
}

export default Keypad;