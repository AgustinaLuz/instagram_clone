import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostComponent from "./PostComponent";
import Navbar from "./Navbar";

const PostsByTag = () => {
    const [postsWithTag, setPostsWithTag] = useState();
    const {tag} = useParams();

    const getPostsWithTag = () => {

        //get post by tag
        axios.get(`https://dummyapi.io/data/v1/tag/${tag}/post?limit=10`, {
            headers: {
                'app-id': '622115ba2b6d9e11d33de1af'
            }
        })
        .then((res) => {
            setPostsWithTag(res.data.data);
            console.table(res.data.data);
            console.log(postsWithTag);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    useEffect(() => {
        getPostsWithTag();
    }, [tag]);

    return(
        <div className="postsByTag_container">
        <Navbar />
        {
            !postsWithTag ? 'loading' :
                <div className="main_posts">
                    {postsWithTag.map((post) => (
                        <PostComponent key={post.id}
                            id={post.id} 
                            profilePic={post.owner.picture}
                            profileId={post.owner.id} 
                            profileFirstName={post.owner.firstName}
                            profileLastName={post.owner.lastName}
                            postImg={post.image} 
                            likes={post.likes} 
                            tags={post.tags}
                        />                            
                    ))}
                </div>
        }
        </div>
    )
}

export default PostsByTag;