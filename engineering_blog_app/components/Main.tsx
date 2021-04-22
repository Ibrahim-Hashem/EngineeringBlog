import Link from 'next/link';
import navStyles from '../styles/Main.module.css';
import Article from './Article'

const Main = ({articles}) => {
    return (
        <>
        {articles.map(article => {
            return <Article article={article}/>
        })}
        </>
    )
}

export default Main
