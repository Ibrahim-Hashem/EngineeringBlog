import posts from '../../../data.json'

export default function getPosts(req, res) {
  res.status(200);
  res.send(posts);
}