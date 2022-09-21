import axios from "axios";
import { useEffect, useState } from "react";

const BlogPost = () => {

    const [todaysPost, setTodaysPost] = useState({});
    const [postId, setPostId] = useState('');

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

    const handlePostIdInput = (evt) => {
        console.log(postId);
        setPostId(evt.target.value);
    };


    const getBlogPostData = (evt) => {
        console.log(`getBlogPostData`);

        // axios.get().then().catch();

        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => {
                console.log(response);
                console.log(response.data);
                setTodaysPost(response.data);
            }).catch((error) => {
                console.log(error.message);
                alert(`Post with postId ${postId} not found!`);
            });


        evt.preventDefault();
    }

    return (
        <div className="container">
            <p className="display-4 text-primary ">My Blog Post</p>
            <hr />
            <input type="number" value={postId} className="form-control col-4" onChange={handlePostIdInput} placeholder="Please enter postId" />
            <input type="button" value="View Post" className="btn btn-outline-primary mt-3 mb-3" onClick={getBlogPostData} />
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
