import Link from "next/link";

const Post = ({post}) => {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}
      <Link href={`/posts/${post.id}`}>
      <span className="hover:bg-gray-100 cursor-pointer text-blue-500 ">
        {post.title}
      </span>
      </Link>
    </div>
  );
}

export default Post;