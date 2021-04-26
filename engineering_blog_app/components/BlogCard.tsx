const BlogCard = ({blogToShow}) => {
  return (
    <div>
      <h1>{blogToShow.title}</h1>
      <p>{blogToShow.author}</p>
      <p>{blogToShow.date}</p>
    </div>
  )
}

export default BlogCard;