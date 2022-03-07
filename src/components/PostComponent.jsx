import React from "react";
import { NavLink } from "react-router-dom";
import Comment from "./CommentComponent";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const PostComponent = ({id, profilePic, profileId, profileFirstName, profileLastName, postImg, likes, tags, onlyPic}) => {
    return(
        <>
            {!onlyPic ?
                <div id={id} className="post">
                    <div className="user_box_name-pic">
                    <div className="namePic"><img className="user_pic_box" src={profilePic} ></img></div>
                    <NavLink className="user_name_box" to={`/profile/${profileId}`}>
                        <div className="user_name_box"> {profileFirstName} {profileLastName}</div>
                    </NavLink>
                    </div>
                    <div className="pic_div">
                        <img src={postImg} className="pictures"></img>
                    </div>
                    <div className="likes_box">
                                <div className="likes_icon">
                                    <FavoriteBorderIcon variant="contained"></FavoriteBorderIcon>
                                </div>
                                <div className="comment_icon">
                                    <ChatBubbleOutlineIcon variant="contained"></ChatBubbleOutlineIcon>
                                </div>
                    </div>
                    <div className="likes_box">
                        <p className="likes">{likes} {likes == 1 ? "Like" : "Likes"}</p>
                    </div>    
                    <div className="tags">           
                    
                    {
                        tags.map((tag) => (
                            <div className="tag_box">
                            <NavLink className="tag_link" to={`/tag/${tag}`}>
                                <p className="tag">#{tag}</p>
                            </NavLink></div>
                        ))
                    }
                    </div> 
                    <Comment id={id} />
                </div>

                :

                <>
                    <NavLink to={`/post/${id}`}>
                    <div className="pic_div">
                        <img src={postImg} className="pictures"></img>
                    </div>
                    </NavLink>
                </>
            }
        </>
        

        
    );
}

export default PostComponent;