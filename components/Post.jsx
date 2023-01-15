const Post = ({post}) => {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}
      <span className="hover:bg-gray-100 cursor-pointer text-blue-500 ">
        {post.title}
      </span>
    </div>
  );
}

export default Post;