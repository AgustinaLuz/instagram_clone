import axios from "axios";
import react, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import PostComponent from './PostComponent';
import { useParams } from "react-router-dom";

const PostPageComponent = () => {
    const [onlyPost, setOnlyPost] = useState();
    const {postId} = useParams();

    const getOnlyPost = () => {
        axios.get(`https://dummyapi.io/data/v1/post/${postId}`, {
            headers: {
                'app-id': '622115ba2b6d9e11d33de1af'
            }
        })
        .then((res) => {
            setOnlyPost(res.data);
            // console.table(res.data);
            // console.log(res.data.data);
        })
        .catch((err)=> {
            console.log(err);
        });
    }

    useEffect (() => {
        getOnlyPost();
    }, [])
    
    return (
        <div>
             <Navbar />
                <div className="main_posts">
                    {
                        !onlyPost ? '' :
                        <PostComponent key={onlyPost.id}
                            id={onlyPost.id} 
                            profilePic={onlyPost.owner.picture}
                            profileId={onlyPost.owner.id} 
                            profileFirstName={onlyPost.owner.firstName}
                            profileLastName={onlyPost.owner.lastName}
                            postImg={onlyPost.image} 
                            likes={onlyPost.likes} 
                            tags={onlyPost.tags}
                            onlyPic={false}
                        />                 
                    } 
                </div>
        </div>
    );
}

export default PostPageComponent;