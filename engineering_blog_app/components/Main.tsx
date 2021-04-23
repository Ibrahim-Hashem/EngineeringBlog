import Link from 'next/link';
import MainStyles from '../styles/Main.module.css';
import Article from './Article'

import { ArticleInterface } from '../interfaces/articles';

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
