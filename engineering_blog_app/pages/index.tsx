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

export function getStaticProps() {

  const files = fs.readdirSync(`${process.cwd()}/blogs`);

  const blogs = files
    .map((file) => {
    const filePath = `${process.cwd()}/blogs/${file}`; 
    const blogData = fs.readFileSync(filePath, 'utf-8'); 
    const { data } = grayMatter(blogData);
    return { ...data}
  })

  return {
    props: {blogs} 
  }
}


