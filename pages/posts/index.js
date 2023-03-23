import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Posts = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const getPostData = async () => {
      const post = await fetch(`/api/post`);
      const postJson = await post.json();
      const author = await fetch(`/api/author`);
      setPostData(postJson);
    };
    getPostData();
  }, []);
  console.log(postData);

  return (
    <>
      {postData.map((post) => {
        return (
          <div>
            <Image src={"/thirteen.svg"} width={100} height={100} />
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </div>
        );
      })}
    </>
  );
};
export default Posts;
