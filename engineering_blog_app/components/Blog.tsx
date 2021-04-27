const Blog = (props) => {
  return (
    <div>
      <h1>{props.blog.title}</h1>
      <p>{props.author}</p>
      <p>{props.date}</p>
      <section dangerouslySetInnerHTML={{ __html: props.blog.body }}></section>
    </div>
  );
}

export default Blog