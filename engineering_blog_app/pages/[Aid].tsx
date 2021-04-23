import {useRouter} from 'next/router'

const Article = ({article})=>{
    const router = useRouter()
    const { Aid } = router.query;
    console.log(Aid)
    return <h1>{Aid}</h1>
}



export default Article
