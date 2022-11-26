import { useState, useEffect } from 'react'
import Request from "./classes/Request.js";
import Comments from "./components/Comments.jsx";
import './App.css'

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {

    const getPosts = async () => {
      const result = await Request.GetPosts();

      return setPosts(() => result.data.slice(0, 7))
    };

    getPosts();

  }, []);

  return (
    <div className="App">
      <p className="text-5xl font-bold mb-8">Btix posts</p>

      <div className="post-list border-2 border-slate-400 min-h-[100px]">
        {
          posts ? posts.map((item) => {
            return (
              <div className="post" key={item.id}>
                <p className="text-xl">{item.title}</p>
                <p className="text-sm">User: {item.userId}</p>
                <p className="text-lg">{item.body}</p>

                <Comments id={item.id} />
              </div>
            )
          }) : null

        }
      </div>

    </div>
  )
}

export default App
