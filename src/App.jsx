import { useState, useEffect, useContext } from 'react'
import { ContentContext } from './context.jsx';
import Request from "./classes/Request.js";
import Navbar from "./components/Navbar.jsx";
import Content from "./components/Content.jsx";
import './App.pcss'

function App() {

  // tip: you are importing from Context, NOT USESTATE, so import with {}
  const { navbar, active, setLoading, setContent } = useContext(ContentContext);

  useEffect(() => {

    setLoading(true);

    if (active === 'Posts') {
      const getPosts = async () => {
        const result = await Request.GetPosts();

        return setContent(() => result.data.slice(0, 7))
      };

      getPosts();
    }

    if (active === 'Users') {
      const getUsers = async () => {
        const result = await Request.GetUsers();

        return setContent(() => result.data.slice(0, 7))
      };

      getUsers();
    }

    setLoading(false);

  }, [active]);

  return (
    <div className="App mx-auto w-full md:max-w-[800px]">

      <div className="header mb-8 text-center">
        <p className="text-5xl font-bold mb-5">Btix App</p>

        <Navbar sections={navbar} />
      </div>

      <Content />
    </div>
  )
}

export default App
