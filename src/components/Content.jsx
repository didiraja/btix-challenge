import { useContext, useEffect } from "react";
import { ContentContext } from '../context.jsx';
import Post from "./Post.jsx";
import User from "./User.jsx";

function Content() {

  const { active, content, isLoading } = useContext(ContentContext);

  if (isLoading) return (
    <p className="text-center text-2xl italic">Carregando...</p>
  );

  if (!content) return null;

  return (
    <div className="content-list border-2 border-slate-400 min-h-[100px]">
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