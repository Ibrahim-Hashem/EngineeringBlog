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
  const res = await fetch('http://localhost:3000/api/posts');
  const articles = await res.json();
  console.log(res);

  return {
    props: {
      articles
    }
  }
}
