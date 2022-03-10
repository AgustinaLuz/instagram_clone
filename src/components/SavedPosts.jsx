import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import PostComponent from "./PostComponent";
import { useSelector } from "react-redux"
import axios from "axios";
import { PostAddOutlined } from "@mui/icons-material";

const SavedPosts = () => {
    const state = useSelector((state) => state.posts);
    //to access the data and we can do this within any component
    const [postsToRender, setPostsToRender] = useState([])
    let savedPosts = [];

    const getOnlyPost = (id) => {
        axios.get(`https://dummyapi.io/data/v1/post/${id}`, {
            headers: {
                'app-id': '622115ba2b6d9e11d33de1af'
            }
        })
        .then((res) => {
            setPostsToRender([...postsToRender, res.data]);
            
        console.log(`post to render: ${postsToRender}`)
        })
        .catch((err)=> {
            console.log(err);
        });
    }

    const posts = () => state.map((element) => {
        savedPosts.push(element.payload);
    })
    
    const renderPosts = () => savedPosts.map((element) => {
        getOnlyPost(element);
    })

    useEffect(() => {
        posts();
        console.log(`saved redner: ${savedPosts}`)
        renderPosts();
    }, [])

    return (
        <div>
            <Navbar/>
            
            {
                !postsToRender ? 'no saved posts' :
                <div className="main_posts">
                {postsToRender.map((post) => (
                    <PostComponent 
                    id={post.id} 
                    profilePic={post.owner.picture}
                    profileId={post.owner.id} 
                    profileFirstName={post.owner.firstName}
                    profileLastName={post.owner.lastName}
                    postImg={post.image} 
                    likes={post.likes} 
                    tags={post.tags}
                    onlyPic={true}
                    />  
                ))
            }
            </div>
}
        </div>
    )
}

export default SavedPosts;