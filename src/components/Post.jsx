import Comments from "./Comments.jsx";

function Post(prop) {

  return (
    <div className="post capitalize p-3">
      <div>
        <p className="text-xl font-bold inline">{prop.title}</p>
        <p className="text-sm ml-3 inline">by {prop.userId}</p>
      </div>

      <p className="text-lg normal-case">{prop.body}</p>

      <Comments id={prop.id} />
    </div>
  );
}

export default Post;
