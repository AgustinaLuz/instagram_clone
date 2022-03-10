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
                <div className="user_comment_section">
                <div className="user_box_comment_name" >
                    <NavLink className="user_pic_cols" to={`/profile/${comment.owner.id}`}>
                        <div className="user_pic_col_1">
                        <img className="user_pic_box" src={comment.owner.picture}></img></div>
                        <div className="user_pic_col_2">
                        <h2 className="user_pic_name_title"> {comment.owner.firstName} {comment.owner.lastName}</h2></div>
                    </NavLink>
                    <p className="user_comment_text">{comment.message}</p>

                </div>
                        
                </div>
                )
             : ""}
        </div>
    );
}

export default Comment;