import {useRouter} from 'next/router'
import Style from '../styles/ArticlePage.module.css'
import grayMatter from 'gray-matter';
import fs from 'fs';
import unified from 'unified';
import html from 'remark-html';
import markdownParser from 'remark-parse';

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
         {/* <p>{blog.body}</p> */}
         <section dangerouslySetInnerHTML={{ __html: blog.body }}></section>
       </div>
    )
}

// export const getServerSideProps = async () => {
//   const res = await fetch('http://localhost:3000/api/posts');
//   const articles = await res.json();
//   return {props: {articles}}
// }

export async function getStaticProps(context) {
  const files = fs.readdirSync(`${process.cwd()}/blogs`);

  const blogs = files
    // const filePath = `${process.cwd()}/blogs/${file}`;
    const blog = fs.readFileSync(`${process.cwd()}/blogs/${context.params.slug}.md`, 'utf-8')
    const {content, data} = grayMatter(blog)
    // console.log(content)
    // console.log(data)
    const markdownOutput = await unified()
      .use(markdownParser)
      .use(html)
      .process(content)

      console.log(markdownOutput);
  return {
    props: {
      blog: {
        ...data,
        body: markdownOutput.toString()
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
