import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';

const Home = ({catagory}) => {
    const[article,setArticle] = useState([]);
    // const API = 'b0b3d5ee8ef746c5b778b7010ad8de5d'
    useEffect(()=>{
        const URL = `https://newsapi.org/v2/top-headlines?country=in&category=${catagory}&apiKey=b0b3d5ee8ef746c5b778b7010ad8de5d`
        console.log(URL);
        fetch(URL).then(res => res.json()).then(data=>setArticle(data.articles))
    },[catagory])
     
  return (
    <div>
      <div className='h2 text-center my-3 fw-bold'>{catagory.charAt(0).toUpperCase()+catagory.slice(1)} <span className='badge bg-danger text-light'>News</span></div>
    <div className='d-flex justify-content-evenly flex-wrap'>
    {
        article.map(((news,index)=>{
            return <NewsCard  key={index} title ={news.title} desc ={news.description} src={news.urlToImage}
             link={news.url}/>
        }))
    }
    </div>
    </div>
  )
}

export default Home
