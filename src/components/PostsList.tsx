import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

type PostData = {
  author: string;
  body: string;
};

const PostList = ({
  isPosting,
  onStopPosting,
}: {
  isPosting: boolean;
  onStopPosting: () => void;
}) => {
  const [posts, setPosts] = useState<PostData[]>([]);

  const addPostHandler = (postData) => {
    setPosts((prevPosts) => [postData, ...prevPosts]);
  };

  let modalContent;
  if (isPosting) {
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.author} author={post.author} body={post.body} />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center", marginTop: "2rem", color: "white" }}>
          <h2>No posts available</h2>
          <p>Start by creating a new post!</p>
        </div>
      )}
    </>
  );
};
export default PostList;
