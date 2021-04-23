import Link from 'next/link';
import MainStyles from '../styles/Main.module.css';
import Article from './Article'

import { ArticleInterface } from '../interfaces/articles';

const Main = ({articles}) => {
    return (
        <>
        {articles.map((article: ArticleInterface) => {
            return (
                <Link href='#'>
                    <div className={MainStyles.main}>
                        <Article key={article.id} article={article}/>
                    </div>
                </Link>
            )
        })}
        </>
    )
}

export default Main
