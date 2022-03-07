import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


const Comment = ({id}) => {
    const [comments, setComments] = useState();

    const getComments = () => {
        axios.get(`https://dummyapi.io/data/v1/post/${id}/comment?limit=10
        `, {
            headers: {
                'app-id': '622115ba2b6d9e11d33de1af'
            }
        })
        .then((res) => {
            setComments(res.data.data);
            // console.table(res.data.data);
            // console.log(userPosts);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        getComments();
    }, [])

    return (
        <div>
            {comments ? 
                comments.map((comment) =>
                <div>
                    <NavLink to={`/profile/${comment.owner.id}`}>
                        <img src={comment.owner.picture}></img>
                        <h2 className="user_name"> {comment.owner.firstName} {comment.owner.lastName}</h2>
                    </NavLink>
                        <p>{comment.message}</p>
                </div>
                )
             : ""}
        </div>
    );
}

export default Comment;