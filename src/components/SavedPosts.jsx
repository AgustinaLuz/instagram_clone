import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import PostComponent from "./PostComponent";
import { useSelector } from "react-redux";
import axios from "axios"

const SavedPosts = () => {
    const state = useSelector((state) => state.posts);
    //to access the data and we can do this within any component
    const [postsToRender, setPostsToRender] = useState([]);

    const renderPosts = () => 
        state.map((element) => {
        axios.get(`https://dummyapi.io/data/v1/post/${element}`, {
            headers: {
                'app-id': '622115ba2b6d9e11d33de1af',
            },
        })
        .then((res) => {
            setPostsToRender([...postsToRender, res.data]);
        })
        .catch((err)=> {
            console.log(err);
        });
    });

    useEffect(() => {
        console.log(`saved render: ${state}`);
        renderPosts();
        console.log(`post to render: ${postsToRender}`);
    }, []);

    return (
        <div>
            <Navbar/>
            
            {
                !postsToRender ? 'no saved posts' :
                <div className="main_posts">
                {postsToRender.map((post) => (
                    <PostComponent key={post.id}
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
export default SavedPosts 