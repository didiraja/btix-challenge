import React, { useState, useMemo } from "react";
import Requests from "../classes/Request";
import Comments from "./Comments";

export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function Post(prop: IPost) {

  return (
    <div className="post-box capitalize p-5 bg-slate-800 rounded-xl mb-5">
      <div>
        <p className="text-2xl font-bold">{prop.title}</p>
        {prop.userId ? <p className="text-sm normal-case text-right">by {NameUser(prop.userId)}</p> : null}
      </div>

      <p className="text-lg normal-case mt-5">{prop.body}</p>

      <Comments id={prop.id} />
    </div>
  );
}

function NameUser(id: number) {

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
