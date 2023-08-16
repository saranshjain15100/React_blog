import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
//We use create-react-app to create a project in react(as it creates a project which has all the setup and config(like babel and webpack))
//We need babel and webpack to compile our react code in jsx

//Javascript syntax extension is used in react components to insert dynamic javascript with html 
//In curly braces we can write js

//When we put variable in {},jsx knows we are using a dynamic value
//React converts whatever data type we give it to string and print it's value to the webpage
//However boolean and objects cannot be printed
//In jsx we can also pass variable link in the href attribute 
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path = "/">
              {/* We have to use exact keyword as otherwise /create would match / and redirect us to Home */}
              <Home/>
            </Route>
            <Route exact path = "/create">
              <Create/>
            </Route>
            <Route exact path = "/blogs/:id">
              {/* We are accessing the blogs with variable id that's why we used : */}
              <BlogDetails/>
            </Route>
            <Route path = "*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;


//Switch component makes sure that only 1 component runs in the browser
//Whenever a request is made to a route react will look for it from top to bottom
//If the switch component didn't surround all of the routes then react will look for all the matches inside Routers => We can have more than 1 page open at 1 time => Always surround all the route in Switch component
//Route's are the different route which can run in the browser (1 at a time)