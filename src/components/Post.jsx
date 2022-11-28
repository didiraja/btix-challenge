import { useState, useMemo } from "react";
import Requests from "../classes/Request.js";
import Comments from "./Comments.jsx";

function Post(prop) {

  return (
    <div className="post capitalize p-3">
      <div>
        <p className="text-xl font-bold inline">{prop.title}</p>
        {prop.userId ? <p className="text-sm ml-3 inline">by <NameUser id={prop.userId} /></p> : null}
      </div>

      <p className="text-lg normal-case">{prop.body}</p>

      <Comments id={prop.id} />
    </div>
  );
}

function NameUser({ id }) {

  const [name, setName] = useState('Fulano');

  useMemo(() => {

    const getNamefromUser = async () => {

      try {
        const result = await Requests.UserDetails(id)

        setName(() => result.data.name)
      } catch (_) {
        // console.log(_)
      }

    }

    getNamefromUser();

  }, [id])


  return name;
}

export default Post;
