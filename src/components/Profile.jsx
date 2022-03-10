import React, {useState, useEffect} from "react";
import axios from "axios";
import Navbar from "./Navbar";
import PostComponent from "./PostComponent";
import { useParams } from "react-router-dom";

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
    }, [id]);


    return (
        <div className="ProfileContainer">
            <Navbar />
            {
            !user ? 'loading' :
            
            <div className="profile_main">
                <div className="profile" id={user.id} >                
                    <div className="user_pic"><img className="user_pic" src={user.picture}></img></div>
                    <div className="user_info">
                    <h2 className="user_profile_name"> {user.firstName} {user.lastName}</h2>
                    <div className="user_location_info">
                        <div className="user_profile_location_icon">
                    <img src="https://freesvg.org/img/location_icon.png" width={30} alt="" />
                    </div>
                    <p className="user_profile_location"> {user.location.city},</p>
                    <p className="user_profile_location"> {user.location.country}.</p>
                    
                    </div>
                </div>
                </div>
            </div>     
            }


            {
                !userPosts ? 'loading' :
                    <div className="main_posts">
                    {userPosts.map((post) => (
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
                    ))}
                </div>

            }
        </div>
    );
}

export default Profile;