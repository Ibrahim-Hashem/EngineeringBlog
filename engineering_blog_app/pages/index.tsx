import Head from 'next/head'
import {GetStaticProps} from 'next'
import Main from '../components/Main';
import {ArticleInterface} from '../interfaces/articles';


export default function Home({articles}) {
  return (
    <>
      <Head>
        <title>Engineering blog</title>
      </Head>
      <Main articles={articles}/>
    </>

  )
}



export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/posts');
  const articles: ArticleInterface = await res.json();
  return {
    props: {
      articles
    }
  }
}
