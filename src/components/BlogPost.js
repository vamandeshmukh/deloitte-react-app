import axios from "axios";
import { useEffect, useState } from "react";

const BlogPost = () => {

    const url = `http://localhost:12345`;

    const [todaysPost, setTodaysPost] = useState({});
    const [postToPublish, setPostToPublish] = useState({});
    const [postId, setPostId] = useState('');

    useEffect(
        () => {
            setTodaysPost({
                userId: '',
                id: '',
                title: '',
                body: ''
            });
            setPostToPublich({
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

        // axios.get().then().catch();
        axios.get(`${url}/posts/${postId}`)
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

    const sendBlogPostData = (evt) => {
        console.log(`send`);

        axios.post(`${url}/posts/`, {
            userId: 8,
            id: ``,
            title: `Happy Weekend`,
            body: `Weekends are a fantastic set of days...`
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.message);
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

            <div>
                {/* // here  */}
                <input type="button" value="Create Post" className="btn btn-outline-primary mt-3 mb-3" onClick={sendBlogPostData} />
            </div>
        </div>
    );

};

export default BlogPost;

