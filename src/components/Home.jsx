import axios from "axios";
import react, { useState, useEffect } from "react";


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
    }, [posts])

    return (
        <>
        {
            !posts ? 'cargando' :
            posts.map((post) => {
                <div id={post.id}>
                    <img src={post.image}></img>
                    <p>{post.likes}</p>
                    </div>
            })
        }
        </>
    )

}

export default Home;