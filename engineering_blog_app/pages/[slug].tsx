import {useRouter} from 'next/router'
import Style from '../styles/ArticlePage.module.css'
import grayMatter from 'gray-matter';
import fs from 'fs';
import unified from 'unified';
import html from 'remark-html';
import markdownParser from 'remark-parse';

import Blog from '../components/Blog';

const BlogPage = (props)=>{
    return (
      <Blog blog={props.blog} />
    )
}


export async function getStaticProps(context) {

    const blog = fs.readFileSync(`${process.cwd()}/blogs/${context.params.slug}.md`, 'utf-8')
    const {content, data} = grayMatter(blog)
    const markdownOutput = await unified()
      .use(markdownParser)
      .use(html)
      .process(content)

  return {
    props: {
      blog: {
        ...data,
        body: markdownOutput.toString()
      }
    } 
  }
}

export function getStaticPaths(){
  const files = fs.readdirSync(`${process.cwd()}/blogs`);
  const blogs = files
    .map((file) => {
    return {params: {slug: file.replace(".md", "")} }
  })

  return{
    paths: blogs,
    fallback: false
  }
}

export default BlogPage
