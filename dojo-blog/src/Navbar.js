import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to = "/">Home</Link>
                <Link to = "/create" //style = {{
                    //color: "white",
                    //backgroundColor: '#f1356d',
                    //borderRadius: '8px'}}
                    >New Blog</Link>
            </div>
        </nav>
    );
}
    
export default Navbar;
//We can style an element using inline style :
//include style and put object key value pair in curly braces
//We have used 2 curly braces : Outer one is for including the dynamic variable, 2nd one: The variable is an object so we need to put that inside {}