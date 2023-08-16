import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('Saransh');
    const [isPending,setisPending] = useState(false);
    const history = useHistory();//We can use history to go back and forward and redirect the user

    const handleSubmit = e => {
        e.preventDefault();//as the default behaviour is to refresh
        const blog = {title,body,author};

        setisPending(true);
        
        fetch('http://localhost:8000/blogs',{
            method:'POST',//We are making a post req
            headers: {"Content-Type" : "application/json"},//We are passing json data
            body: JSON.stringify(blog)//Converting js object to JSON
        }).then(()=>{
            setisPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <form onSubmit={handleSubmit}>
                <label>Blog title :</label>
                <input
                    type="text"
                    required
                    value = {title}
                    onChange={e => setTitle(e.target.value)}
                    //An onChange event handler returns a Synthetic Event object which contains useful meta data such as the target input's id, name, and current value. We can access the target input's value inside of the handleChange by accessing e. target.
                    />
                <label>Blog body :</label>
                <textarea
                    required
                    value = {body}
                    onChange={e => setBody(e.target.value)}
                ></textarea>
                <label>Blog author :</label>
                <select
                    value = {author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value = "Saransh">Saransh</option>
                    <option value = "Hitisha">Hitisha</option>
                    <option value = "Abhishek">Abhishek</option>
                </select>
                {!(isPending) && <button>Add Blog</button>}
                {isPending && <button>Adding Blog.....</button>}
            </form>
        </div>
     );
}
 
export default Create;