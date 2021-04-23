import {useRouter} from 'next/router'
import {ArticleInterface} from '../interfaces/articles'
import Style from '../styles/ArticlePage.module.css'

const Article = ({articles})=>{
    const router = useRouter()
    const { Aid }= router.query;
    const article = articles.filter((article: ArticleInterface) => article.id.toString() === Aid);
    return (
      <div className={Style.main}> 
        <h1>{article[0].title}</h1>
        <p><span>{article[0].userId}</span></p>
        <p>{article[0].body}</p>
      </div>
    )
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/posts');
  const articles = await res.json();
  return {props: {articles}}
}


export default Article
