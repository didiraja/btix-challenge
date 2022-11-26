import { useState, useEffect } from 'react'
import Request from "./classes/Request.js";
import Post from "./components/Post.jsx";
import User from "./components/User.jsx";
import './App.css'

function App() {

  const navbar = ['Posts', 'Users'];
  const [active, setActive] = useState('Users');
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {

    if (active === 'Posts') {
      const getPosts = async () => {
        const result = await Request.GetPosts();

        return setPosts(() => result.data.slice(0, 7))
      };

      getPosts();
    }

    if (active === 'Users') {
      const getUsers = async () => {
        const result = await Request.GetUsers();

        return setUsers(() => result.data.slice(0, 7))
      };

      getUsers();
    }

  }, [active]);

  return (
    <div className="App">

      <div className="header mb-8 text-center">
        <p className="text-5xl font-bold mb-5">Btix App</p>

        <div className="button-wrapper text-xl">
          {
            navbar.map((label) => {
              return (
                <button key={label} className={label === active ? 'border-2 border-indigo-600' : null}
                  onClick={() => setActive(label)}>
                  {label}
                </button>
              )
            })
          }
        </div>
      </div>

      <div className="content-list border-2 border-slate-400 min-h-[100px]">
        {
          active === 'Posts' ? (
            posts ? posts.map((item) => <Post key={item.id} {...item} />) : null
          )

            : null
        }

        {
          active === 'Users' ? (
            users ? users.map((item) => <User key={item.id} {...item} />) : null
          )

            : null
        }

      </div>




    </div>
  )
}

export default App
