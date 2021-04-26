import {useRouter} from 'next/router'
import Style from '../styles/ArticlePage.module.css'
import grayMatter from 'gray-matter';
import fs from 'fs';

const Article = ({blogs})=>{
  const router = useRouter()
  const { slug }= router.query;
    const blog = blogs.filter(b => b.slug === slug);
    return (
      // <div className={Style.main}> 
      //   <h1>{blog[0].title}</h1>
      //   <p><span>{blog[0].author}</span></p>
      //   <p>{blog[0].date}</p>
      // </div>
      <>
      </>
    )
}

// export const getServerSideProps = async () => {
//   const res = await fetch('http://localhost:3000/api/posts');
//   const articles = await res.json();
//   return {props: {articles}}
// }
export function getStaticProps() {

  const files = fs.readdirSync(`${process.cwd()}/blogs`);

  const blogs = files
    .map((file) => {
    const filePath = `${process.cwd()}/blogs/${file}`;
    
    const blogData = fs.readFileSync(filePath, 'utf-8'); 

    const { data } = grayMatter(blogData);

    return { ...data}

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
    // const filePath = `${process.cwd()}/blogs/${file}`;
    
    // const blogData = fs.readFileSync(filePath, 'utf-8'); 

    // const { data } = grayMatter(blogData);

    // return { ...data}
    return {params: {slug: file} }

  })
  // console.log(blogs)

  return{
    paths:blogs,
    fallback: false
  }
}


export default Article
