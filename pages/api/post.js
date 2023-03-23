import { posts } from "../../data/postData";
const handler = (req, res) => {
  if (req.query.id) {
    const post = posts.find((post) => req.query.id === post.id);
    res.status(200).json(post ?? null);
  } else {
    res.status(200).json(posts);
  }
};
export default handler;
