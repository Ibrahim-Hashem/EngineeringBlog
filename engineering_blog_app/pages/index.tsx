import grayMatter from 'gray-matter';
// import matter = require('gray-matter');
// import fs from 'fs';
import Head from 'next/head'
import {GetStaticProps} from 'next'
// import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';
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

  const fs = require('fs');
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


