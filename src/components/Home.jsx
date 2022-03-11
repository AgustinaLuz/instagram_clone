import axios from "axios";
import react, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import PostComponent from './PostComponent';

const Home = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        axios.get('https://dummyapi.io/data/v1/post?limit=20', {
            headers: {
                'app-id': '622115ba2b6d9e11d33de1af'
            }
        })
        .then((res) => {
            setPosts(res.data.data);
            // console.table(res.data.data);
            // console.log(posts);
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
                <div className="main_posts">
                    {posts.map((post) => (
                        <PostComponent key={post.id}
                            id={post.id} 
                            profilePic={post.owner.picture}
                            profileId={post.owner.id} 
                            profileFirstName={post.owner.firstName}
                            profileLastName={post.owner.lastName}
                            postImg={post.image} 
                            likes={post.likes}
                            text={post.text} 
                            tags={post.tags}
                            publishDate={post.publishDate}
                            onlyPic={false}
                        />                            
                    ))}
                </div>
        }
        </div>
    )

}

export default Home;