import { authors } from "@/data/authorsData";

const handler = (req, res) => {
  const author = authors.find((author) => req.query.id === author.id);
  res.status(200).json(author ?? null);
};
export default handler;
