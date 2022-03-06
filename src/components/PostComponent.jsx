import React from "react";
import { NavLink } from "react-router-dom";
import Comment from "./CommentComponent";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const PostComponent = ({id, profilePic, profileId, profileFirstName, profileLastName, postImg, likes, tags}) => {
    return(
        <div id={id} className="post">
            <div className="namePic"><img src={profilePic} ></img></div>
            <NavLink to={`/profile/${profileId}`}>
                <h2 className="user_name"> {profileFirstName} {profileLastName}</h2>
            </NavLink>
            <div className="pic_div">
                <img src={postImg} className="pictures"></img>
            </div>
            <div className="likes_box">
                        <div className="likes_icon">
                            <FavoriteBorderIcon variant="contained"></FavoriteBorderIcon>
                        </div>
                <p className="likes">{likes} {likes == 1 ? "Like" : "Likes"}</p>
                        <div className="comment_icon">
                            <ChatBubbleOutlineIcon variant="contained"></ChatBubbleOutlineIcon>
                        </div>
            </div>
            {
                tags.map((tag) => (
                    <NavLink to={`/tag/${tag}`}>
                        <p>{tag}</p>
                    </NavLink>
                ))
            }
            <Comment id={id} />
        </div>
    );
}

export default PostComponent;