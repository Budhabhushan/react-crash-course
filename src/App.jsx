import { useState } from "react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

export const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModalHandler = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <main>
      <MainHeader onCreatePost={showModalHandler} />
      <PostsList isPosting={isModalVisible} onStopPosting={showModalHandler} />
    </main>
  );
};

export default App;
