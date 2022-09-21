import axios from "axios";
import { useEffect, useState } from "react";

const BlogPost = () => {

    const [todaysPost, setTodaysPost] = useState({});

    // https://jsonplaceholder.typicode.com/posts/2

    useEffect(
        () => {
            setTodaysPost({
                userId: '',
                id: '',
                title: '',
                body: ''
            });
        }
        ,
        []
    );

    const getBlogPostData = (evt) => {
        console.log(`getBlogPostData`);
        axios.get(`https://jsonplaceholder.typicode.com/posts/2`)
            .then((response) => {
                console.log(response.data);
                setTodaysPost(response.data);
            });
        evt.preventDefault();
    }

    return (
        <div className="container">
            <p className="display-4 text-primary ">My Blog Post</p>
            <hr />
            <input type="button" value="View Post" className="btn btn-outline-primary mb-3" onClick={getBlogPostData} />
            <div>
                <p>Title: {todaysPost.title}</p>
                <p>userId: {todaysPost.userId}</p>
                <p>id: {todaysPost.id}</p>
                <p>body: {todaysPost.body}</p>
            </div>
        </div>
    );

};

export default BlogPost;
