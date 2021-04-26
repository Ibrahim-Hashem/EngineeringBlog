import {useRouter} from 'next/router'
import Style from '../styles/ArticlePage.module.css'
import grayMatter from 'gray-matter';
import fs from 'fs';

const Article = ({blog})=>{
  // const router = useRouter()
  console.log(blog)
  // const { slug } = router.query;
  // console.log("###########")
  // console.log(slug)
  // console.log("###########")
    // const blog = blogs.filter(b => b.slug === slug);
    return (
      // <div className={Style.main}> 
      //   <h1>{blog[0].title}</h1>
      //   <p><span>{blog[0].author}</span></p>
      //   <p>{blog[0].date}</p>
      // </div>
       <div>
         <h1>{blog.title}</h1>
         <p>{blog.author}</p>
         <p>{blog.date}</p>
         <p>{blog.body}</p>
       </div>
    )
}

// export const getServerSideProps = async () => {
//   const res = await fetch('http://localhost:3000/api/posts');
//   const articles = await res.json();
//   return {props: {articles}}
// }

export function getStaticProps(context) {
  const files = fs.readdirSync(`${process.cwd()}/blogs`);

  const blogs = files
    // const filePath = `${process.cwd()}/blogs/${file}`;
    const blog = fs.readFileSync(`${process.cwd()}/blogs/${context.params.slug}.md`, 'utf-8')
    const {content, data} = grayMatter(blog)
    // console.log(content)
    // console.log(data)
  return {
    props: {
      blog: {
        ...data,
        body: content
      }
    } 
  }
}

export async function getStaticPaths(){
  const files = await fs.readdirSync(`${process.cwd()}/blogs`);
  const blogs = files
    .map((file) => {
    return {params: {slug: file.replace(".md", "")} }
  })
  // console.log("###########")
  // console.log(blogs)
  // console.log("###########")

  return{
    paths: blogs,
    fallback: false
  }
}


export default Article
