import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";

const Profile = (props) => {

    return (
        <main className={s.item}>
            <ProfileInfo updatePhoto={props.updatePhoto}  isOwner={props.isOwner} profile={props.profile}
                         status={props.status} updateStatus={props.updateStatus} updateProfile={props.updateProfile}/>
            <MyPostsContainer/>
        </main>
    );
}

export default Profile;