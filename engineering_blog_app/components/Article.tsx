import { Interface } from 'node:readline';
import React from 'react'
import ArticleStyles from '../styles/Article.module.css';

interface ArticleInterface {
    id: number;
    userId: number;
    title: string;
    body:string;

}
const Article :ArticleInterface = ({article}) => {
    return (
            <div className={ArticleStyles.article_card} key={article.id}>
                <h2>{article.title}</h2>
                <p className={ArticleStyles.content}>{article.body}</p>
                <p className={ArticleStyles.author_name}>Author: {article.userId}</p>
            </div>
    )
}

export default Article
