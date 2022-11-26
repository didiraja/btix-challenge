import Comments from "./Comments.jsx";

function Post(prop) {

  return (
    <div className="post">
      <p className="text-xl">{prop.title}</p>
      <p className="text-sm">User: {prop.userId}</p>
      <p className="text-lg">{prop.body}</p>

      <Comments id={prop.id} />
    </div>
  );
}

export default Post;
