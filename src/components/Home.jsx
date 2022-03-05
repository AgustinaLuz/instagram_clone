import axios from "axios";
import react, { useState, useEffect } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Navbar from "./Navbar";

const Home = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        axios.get('https://dummyapi.io/data/v1/post?limit=10', {
            headers: {
                'app-id': '622115ba2b6d9e11d33de1af'
            }
        })
        .then((res) => {
            setPosts(res.data.data);
            console.table(posts);
            console.log(posts);
        })
        .catch((err)=> {
            console.log(err);
        });
    }

    useEffect (() => {
        getPosts();
    }, [])

    return (
        <div className="home_container">
        <Navbar />
        {
            !posts ? 'loading' :
            posts.map((post) => (
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
    )

}

export default Home;