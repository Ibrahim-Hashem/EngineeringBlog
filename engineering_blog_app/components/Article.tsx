import React from 'react'
import ArticleStyles from '../styles/Article.module.css';

const Article = ({article}) => {
    return (
        <div className={ArticleStyles.article_card} id={article.id}>
            <h3>
                {article.title}
            </h3>
            <p>{article.body}</p>
            <p>Auther: {article.userId}</p>
        </div>
    )
}

export default Article
