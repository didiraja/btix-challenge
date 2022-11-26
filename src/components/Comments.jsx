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
    <div className="comment-list my-5 border border-slate-200">
      {comment
        ? comment.map((item) => {
          return (
            <div className="comment text-sm" key={item.id}>
              <p>
                {item.name} ({item.email})
              </p>
              <p>{item.body}</p>
            </div>
          );
        })
        : null}
    </div>
  );
}

export default Comments;
