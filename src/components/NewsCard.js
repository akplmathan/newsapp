import React from 'react'

const NewsCard = ({title,link,src,desc}) => {
  return (
    <div className="card bg-dark text-light p-2 my-3 mx-3 " style={{maxWidth:'355px'}}>
  <img style={{height:'200px',width:'340px'}} src={src || 'https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title?.slice(0,55)+"..."}</h5>
    <p className="card-text">{desc?desc.slice(0,90) :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor doloremque nulla sunt sapiente omnis aliquid voluptatem...' }</p>
    <a href={link} className="btn btn-primary">Read More...</a>
  </div>
</div>
  )
}

export default NewsCard
