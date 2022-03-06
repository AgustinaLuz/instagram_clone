import React, {useState, useEffect} from "react";
import axios from "axios";
import Navbar from "./Navbar";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useParams, useSearchParams } from "react-router-dom";

const Profile = () => {
    const [user, setUser] = useState();
    const [userPosts, setUserPosts] = useState();
    const {id} = useParams();

    const getUser = () => {
        // console.log({id}.id);
        let userId = !{id}.id ? "60d0fe4f5311236168a109ca" : {id}.id;

        //get user profile
        axios.get(`https://dummyapi.io/data/v1/user/${userId}`, {
            headers: {
                'app-id': '622115ba2b6d9e11d33de1af'
            }
        })
        .then((res) => {
            setUser(res.data);
            // console.table(res.data);
            // console.log(user);
        })
        .catch((err)=> {
            console.log(err);
        });

        //get user posts
        axios.get(`https://dummyapi.io/data/v1/user/${userId}/post?limit=6`, {
            headers: {
                'app-id': '622115ba2b6d9e11d33de1af'
            }
        })
        .then((res) => {
            setUserPosts(res.data.data);
            // console.table(res.data.data);
            // console.log(userPosts);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    useEffect(() => {
        getUser();
    }, []);


    return (
        <div className="ProfileContainer">
            <Navbar />
            {
            !user ? 'loading' :
            
            <div className="profile_main">
                <div id={user.id} className="profile">                
                    <div className="user_pic"><img src={user.picture}></img></div>
                    <h2 className="user_name"> {user.firstName} {user.lastName}</h2>
                    <p className="user_location"> {user.location.city} {user.location.country}</p>
                </div>
            </div>     
            }

            <h1>posts</h1>

            {
                !userPosts ? 'loading' :
                userPosts.map((post) => (
                    <div className="main_posts">
                        <div id={post.id} className="post">
                    <h2 className="user_name"> {post.owner.firstName} {post.owner.lastName}</h2>
                    <div className="pic_div">
                     <img src={post.image} className="pictures"></img>
                    </div>
                         <div className="likes_box">
                                <div className="likes_icon">
                                <FavoriteBorderIcon variant="contained"></FavoriteBorderIcon>
                                </div>
                        <p className="likes">{post.likes} Me gusta</p>
                                <div className="comment_icon">
                                <ChatBubbleOutlineIcon variant="contained"></ChatBubbleOutlineIcon>
                                </div>
                    </div>
                    </div>
                        </div>
                ))

            }
        </div>
    );
}

export default Profile;