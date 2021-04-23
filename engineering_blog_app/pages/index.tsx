import Head from 'next/head'
import {GetStaticProps} from 'next'
// import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';
import Main from '../components/Main';

export default function Home({articles}) {
  return (
    <>
      <Head>
        <title>Engineering blog</title>
      </Head>
      <Navbar/>
      <Main articles={articles}/>
    </>

  )
}



export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}
