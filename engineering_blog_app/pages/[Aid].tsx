import {useRouter} from 'next/router'

const Article = ({articles})=>{
    const router = useRouter()
    const { Aid }= router.query;
    const article = articles.filter(article => article.id.toString() === Aid);
    return (
      <div> 
        <h1>{article[0].title}</h1>
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
