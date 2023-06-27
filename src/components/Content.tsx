import { useContext } from "react";
import { ContentContext } from '../context.js';
import Post from "./Post.js";
import User from "./User.js";

function Content() {

  const { active, content, isLoading } = useContext(ContentContext);

  if (isLoading) {
    return (
      <p className="text-center text-2xl italic">Carregando...</p>
    );
  }

  if (!content) {
    return null
  };

  return (
    <div className="content-list">
      {
        (active === 'Posts') ? content.map((item) => <Post key={item.id} {...item} />) : null
      }

      {
        (active === 'Users') ? content.map((item) => <User key={item.id} {...item} />) : null
      }
    </div>
  )
}

export default Content;