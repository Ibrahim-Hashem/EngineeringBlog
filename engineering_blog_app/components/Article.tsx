import React from 'react'
import ArticleStyles from '../styles/Article.module.css';

const Article = ({article}) => {
    return (

            <div className={ArticleStyles.article_card} id={article.id}>
                <h2>
                    {article.title}
                </h2>
                <p className={ArticleStyles.content}>{article.body}</p>
                <p className={ArticleStyles.author_name}>Author: {article.userId}</p>
            </div>

    )
}

export default Article
