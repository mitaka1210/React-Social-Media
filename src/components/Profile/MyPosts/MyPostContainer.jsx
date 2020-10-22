
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";




const mapStateToProps =(state) => {
    return {
        posts : state.profilePage.posts,
        newPostText : state.profilePage.newPostText
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
   
        addPost: (newText) => {
            dispatch(addPostActionCreator(newText));
        }
    }
}
const SuperPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default SuperPostContainer
