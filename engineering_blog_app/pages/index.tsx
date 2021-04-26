import grayMatter from 'gray-matter';
// import matter = require('gray-matter');
// import fs from 'fs';
import Head from 'next/head'
import {GetStaticProps} from 'next'
// import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';
import Main from '../components/Main';

import {ArticleInterface} from '../interfaces/articles';


export default function Home({blogs}) {
  return (
    <>
      <Head>
        <title>Engineering blog</title>
      </Head>
      <Navbar/>
      <Main articles={blogs}/>
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

export const getStaticProps = () => {

  let blogsList = {}

  const fs = require('fs');
  const fileNames = fs.readdirSync(`${process.cwd()}/Blogs`);
  // console.log(fileNames);

  const blogs = fileNames.map((file) => {
    const filePath = `${process.cwd()}/blogs/${file}`;
    // console.log('#############')
    // console.log(filePath);
    // console.log('#############')
    
    const blogData = fs.readFileSync(filePath, 'utf-8'); 
    // console.log('#############')
    // console.log(blogData);
    // console.log('#############')
    // const { data } = grayMatter(blogData);
    return grayMatter(blogData)
    // console.log({data})
    // console.log('#############')
    // console.log({ data })
    // console.log('#############')
    // console.log(blogData);
    // console.log('#############')
    // return { ...data};
  })
  // console.log('#############')
  // console.log(blogs);
  // console.log('#############')

  return {
    props: { ...blogs} 
  }
}


