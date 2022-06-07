import './PostForm.css';
import React from 'react';

const PostForm = (props) => {
  let onAddPost = () => {
    props.addPostActionCreator();
  };

  let onPostChange = (event) => {
    let text = event.target.value;
    props.updateNewPostTextActionCreator(text);
  };
  return (
    <div className='post-inner'>
      <div className='post-inner__wrapper'>
        <div className='post__h3'>My post</div>
        <textarea
          onChange={onPostChange}
          className='post__textArea'
          placeholder='your news...'
          value={props.state.newPostText}
        />
        <button onClick={onAddPost} className='post__button'>
          Send
        </button>
      </div>
    </div>
  );
};

export default PostForm;
