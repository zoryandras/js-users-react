import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import React, { useState } from "react";
import axios from "axios"
import UserList from './components/UserList';

const baseURL = "https://assessment-users-backend.herokuapp.com";

function App() {

  const [post, setPost] = React.useState(null)

  React.useEffect(() => {
      axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  
  if (!post) return null;

    function createPost() {
      axios
        .post(baseURL, {
          title: "Hello World!",
          body: "This is a new post.",
        })
        .then((response) => {
          setPost(response.data);
        });
    }

  return (
    <>
      <Header />
      <UserList />
      <div>
        <h1>{post.first_name}</h1>
        <p>{post.last_name}</p>
        <button onClick={createPost}>Create Post</button>
      </div>
      <Footer />
    </>
  );
}

export default App;
