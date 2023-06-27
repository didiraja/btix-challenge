import { useState, useEffect } from "react";
import Request from "../classes/Request";
import { IUser } from "./User";
import { IPost } from "./Post";

type IComment = IUser & IPost

function Comments({ id }: { id: number }) {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const getComment = async () => {
      const result = await Request.GetComments(id);


      return setComment(() => result.data);
    };

    getComment();
  }, []);

  return (
    <div className="comment-list my-5 bg-slate-600 ml-[10%]">
      {comment
        ? comment.map((item: IComment) => {
          return (
            <div className="comment p-3" key={item.id}>
              <div>
                <p className="text-md font-bold">{item.name}</p>
                <p className="text-sm italic ml-1">({item.email})</p>
              </div>
              <p className="text-sm ml-3">{item.body}</p>
            </div>
          );
        })
        : null}
    </div>
  );
}

export default Comments;
