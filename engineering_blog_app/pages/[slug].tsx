import {useRouter} from 'next/router'
import Style from '../styles/ArticlePage.module.css'
import grayMatter from 'gray-matter';
import fs from 'fs';

const Article = ({blog})=>{
  // const router = useRouter()
  
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
      <>
       { blog }
      </>
    )
}

// export const getServerSideProps = async () => {
//   const res = await fetch('http://localhost:3000/api/posts');
//   const articles = await res.json();
//   return {props: {articles}}
// }
export function getStaticProps(context) {
  console.log("###########")
  console.log(context.params)
  console.log("###########")
  const files = fs.readdirSync(`${process.cwd()}/blogs`);

  const blogs = files
    .map((file) => {

    const filePath = `${process.cwd()}/blogs/${file}`;
    
    const blog = fs.readFileSync(`${process.cwd()}/blogs/${context.params.slug}.md`, 'utf-8')
    // const blogData = fs.readFileSync(filePath, 'utf-8'); 

    // const { data } = grayMatter(blogData);
    console.log("###########")
    console.log(blog);
    console.log("###########")
    return { blog }

  })
  // console.log(blogs)
  return {
    props: {blogs}  //{[{}]}
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
