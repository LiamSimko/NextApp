import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/styles/Post.module.css";
import Image from "next/image";

const PostPage = () => {
  const router = useRouter();
  const [postData, setPostData] = useState();

  const { postId } = router.query;

  useEffect(() => {
    const getPostData = async () => {
      const post = await fetch(`/api/post?id=${postId}`);
      const postJson = await post.json();
      const author = await fetch(`/api/author?id=${postJson.authorId}`);
      const authorJson = await author.json();
      setPostData({ ...postJson, author: authorJson });
    };
    if (postId) getPostData();
  }, [postId]);
  useEffect(() => {
    const getAuthorData = async () => {};
    if (postId) getAuthorData();
  }, [postData]);

  console.log(router.query.postId, postData);
  if (!postData) return <h1>Loading...</h1>;
  return (
    <>
      <div className={styles.post}>
        <h1>{`${postData.title} ${postData.id}`} </h1>
        <p>{postData.body}</p>
      </div>
      <div className={styles.author}>
        <h1 className={styles.authorText}>
          {`${postData.author.firstName} ${postData.author.lastName}`}{" "}
        </h1>
        <p className={styles.authorText}>{postData.author.email}</p>
        <Image
          src={postData.author.profileImg}
          width={100}
          height={100}
          alt={"author profile image"}
        ></Image>
      </div>
    </>
  );
};
export default PostPage;
