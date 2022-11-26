import { useState, useEffect } from "react";
import Request from "../classes/Request.js";

function Comments({ id }) {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const getComment = async () => {
      const result = await Request.GetComments(id);


      return setComment(() => result.data);
    };

    getComment();
  }, []);

  return (
    <div className="comment-list my-5 border border-slate-200 ml-[10%]">
      {comment
        ? comment.map((item) => {
          return (
            <div className="comment p-3" key={item.id}>
              <div>
                <p className="text-md font-bold inline">{item.name}</p>
                <p className="text-sm italic inline ml-1">({item.email})</p>
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
