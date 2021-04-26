import grayMatter from 'gray-matter';
import fs from 'fs';
import Head from 'next/head'
import BlogList from '../components/BlogList';

import {ArticleInterface} from '../interfaces/articles';


export default function Home({blogs}) {
  return (
    <>
      <Head>
        <title>Engineering blog</title>
      </Head>
      <BlogList blogs={blogs}/>
    </>

  )
}
// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch('http://localhost:3000/api/posts');
  
//   const articles: ArticleInterface = await res.json();
  
//   return {
//     props: {
//       articles
//     }
//   }
// }

export function getStaticProps() {

  const files = fs.readdirSync(`${process.cwd()}/Blogs`);

  const blogs = files
    .map((file) => {
    const filePath = `${process.cwd()}/blogs/${file}`;
    
    const blogData = fs.readFileSync(filePath, 'utf-8'); 

    const { data } = grayMatter(blogData);

    return { ...data}

  })
  console.log(blogs)
  

  return {
    props: { blogs } 
  }
}


