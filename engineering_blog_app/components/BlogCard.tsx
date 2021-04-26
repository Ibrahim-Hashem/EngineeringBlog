import Link from 'next/Link';

const BlogCard = ({blogToShow}) => {
  return (
        <Link href={`/${blogToShow.slug}`}>
          <a>
            <h1>{blogToShow.title}</h1>
            <p>{blogToShow.author}</p>
            <p>{blogToShow.date}</p>
          </a>
        </Link>
  )
}

export default BlogCard;