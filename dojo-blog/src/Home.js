import BlogList from "./BlogList";
import UseFetch from "./useFetch";

const Home = () => {
    // const handleClick = (e) => {
    //     console.log('Padh likh lo',e);
    // }
    // const handleClickAgain = (name) => {
    //     console.log(`Abe padh likh lo ${name}`);
    // }
    // let [name,setName] = useState('Saransh');//Initially name:Saransh, when the onClick event will occur setName will change the name to Hitisha and it will also reflect in the web
    // let [age,setAge] = useState(22)
    // const handleClick = () =>{
    //     setName('Hitisha');
    //     setAge(23);
    // }
    const {data:blogs,isPending,error} = UseFetch('http://localhost:8000/blogs');//Import data from UseFetch but call it blogs here
    return ( 
        <div className="home">
            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e)=>handleClickAgain('Saransh')}>Click Me Again</button> */}
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs = {blogs} title = "All blogs" />}
        {/* When the page first loads fetch will take some time and in the Bloglist empty blogs will be passed and we are using map method with it , so it will give error */}
            {/* <BlogList blogs = {blogs.filter(blog => blog.author === 'mario')} title = "Mario k blogs" handleDelete = {handleDelete}/> */}
        </div>
    );
}
 
export default Home;
//The onclick event executes a certain functionality when a button is clicked.
//We directly can't use functions with arguments: as if we use parentheses then the function will be invoked
//so instead we use another function inside which we reference it 

//------------------------------------------------------------------------
//Event Object
//When we click handleClick an event object is created and is passed as the first argument to the function 

//----------------------------------------------
//useState: If we want our code to change value of variables we have to do it using useState
//Using useState if we want to change to access objects elements then we need their unique id as react keep track of items using id

//----------------------------------------------------
//Props: They are used to pass data from parent to child,child receives the data using props object which will have a property named blogie, so we can access blogs using props.blogie
//So any prop that we send through to any component are attached to the props object which we automatically get as an argument in the component and we can access them
//In blogie = {blogs} blogie is the property and blogs is the variable we are passing through

//----------------------------------------------------------------------------
//useEffect: this hook runs a function every render of the component(component renders initially when it first loads and also when the state changes)
//Inside useEffect we pass a function which runs every time a component renders
//be careful to change state inside useEffect as it can lead to an infinite loop 
//In useEffect we can add dependencies which will make the function run only when that dependency state is changed

//-----------------------------------------------------
//Json Server : We will be needing it to wrap the data with some endpoint and do GET watch POST DELETE request
//npx json-server --watch data/db.json --port 8000
//After running this on the new terminal we will get all the json data wrapped up in an API endpoint :  http://localhost:8000/blogs