import { useEffect, useState } from "react";


const BlogPost = () => {

    const [todaysPost, setTodaysPost] = useState({});

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

    return (
        <div className="container">
            <p className="display-4 text-primary ">My Blog Post</p>
            <hr />
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
