import Link from 'next/Link';

import styles from '../styles/Article.module.css';

const BlogCard = ({blogToShow}) => {
  return (
    <div className={styles.article_card}>
      <Link href={`/${blogToShow.slug}`}>
        <a>
          <h1>{blogToShow.title}</h1>
          <p>{blogToShow.author}</p>
          <p>{blogToShow.date}</p>
        </a>
      </Link>
    </div>
  )
}

export default BlogCard;