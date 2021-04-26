import Link from 'next/link';
import MainStyles from '../styles/Main.module.css';
import Article from './Article'
import BlogCard from './BlogCard'
import { ArticleInterface } from '../interfaces/articles';

// const Main = ({blogs}) => {
//     return (
//         <>
//         {blogs.map((blog) => {
//             return (
//                 <Link  href={`/${blog.slug}`}>
//                     <div className={MainStyles.main}>
//                       {blog.title}
//                       <br />
//                       {blog.author}
//                       <br />
//                       {blog.date}
//                         {/* <Article article={blog}/> */}
//                     </div>
//                 </Link>
//             )
//         })}
//         <h1>Hello</h1>
//         </>
//     )
// }

const BlogList = ( {blogs} ) => {
  
  return (
    <>
      {blogs.map((blog) => {
        console.log(blog.title)
        return (
          <BlogCard blogToShow={blog} />
        )
      })}
    </>
  )
}

export default BlogList
