import reactPNG from '../assets/react-img.png'

function Navbar(){
    return (
        <nav>
            <div id="brand">
                <img src={reactPNG} alt="react logo" id="react-logo"></img>
                <h3>React Facts</h3>
            </div>
            <div>
                <h4 className="subtitle">React Course - Project 1</h4>
            </div>
        </nav>
    )
    
}

export default Navbar;