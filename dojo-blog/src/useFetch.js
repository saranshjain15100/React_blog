import { useState,useEffect } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState(null
        // [{ title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        // { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        // { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }]
      );
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(false);
      useEffect(()=>{//if we don't use useEffect here then the request will be called infinite times(So to make the request only when the url in Home UseFetch changes we use useEffect)

        // const abortCont = new AbortController();//We can associate the Abortcontroller with the fetch req and then we can use it to abort the fetch
       
        setTimeout(() => {
          fetch(url)    //fetch doesn't give error when we type the wrong url etc. , so to ensure we have got the response successfully we chck .ok property
            .then(res => {//res object has a property ok which will be true only when fetch was successful
              if(!res.ok){  
                throw Error('could not fetch the data for that resource');
              }
              return res.json();//.json() converts the json to js object and returns a promise
            })
            .then(data => {
              setData(data);
              setisPending(false);
            })
            .catch(err => {
                setError(err.message);
                setisPending(false);
                setError(true);
              });
            // console.log('Use effect ran',blogs);
          },1000);
          // return () => abortCont.abort();//When UseFetch(component using useEffect) unmounts, fetch fires the cleanup function
        },[url]);//An empty array ensures useEffect only runs when the page first loads,passing url here=> whenever url changes useEffect will be called(=> directly the DOM will be updated)
      return{data,isPending,error};
}

export default UseFetch;

//This is the custom hook we are making
//In every custom hook we have to initialise the function with use
//Just like state we can return value,objects from our function(hook)
//Our custom hook will have 3 properties : data,isPending,error which we can return 


//-------------------------------------------
//Web will give us an error when we try to load another page while the current page content is still loading 
//mounted means the component has been loaded to the DOM and unmounted means the components has been removed from the DOM.

//--------------------------------------
//The useEffect Hook allows you to perform side effects in your components.Some examples of side effects are: fetching data, directly updating the DOM, and timers.