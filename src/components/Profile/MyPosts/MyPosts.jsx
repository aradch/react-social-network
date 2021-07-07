import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "./../../../common/FormsContols/FormsControls";
import {
  maxLengthCreator,
  required,
} from "./../../../utils/validators/validators";

let maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          placeholder="Enter for message"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm({ form: "profileAddPostForm" })(AddPostForm);

const MyPosts = React.memo((props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  let addNewPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddPostReduxForm onSubmit={addNewPost} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
