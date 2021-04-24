import Link from 'next/link';
import MainStyles from '../styles/Main.module.css';
<<<<<<< HEAD

=======
import Article from './Article'
import { ArticleInterface } from '../interfaces/articles';
>>>>>>> 6610a9a257af6a526d9360e827c6d1078e85b790

const Main = ({articles}) => {
    return (
        <>
        {articles.map((article: ArticleInterface) => {
            return (
                <Link key={article.id} href={`/${article.id}`}>
                    <div className={MainStyles.main}>
                        <Article article={article}/>
                    </div>
                </Link>
            )
        })}
        </>
    )
}

export default Main
