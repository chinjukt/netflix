import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Row.css'


function Row({title,fetchurl,isPoster}) {
    console.log(fetchurl);

    const [allmovie, setallmovie] =useState()
    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchdata =async ()=>{
      const {data}= await instance.get(fetchurl)
      const {results} = data
      setallmovie(results);
      
    }

    console.log(allmovie);

    useEffect(()=>{
      fetchdata()
    },[])
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className="movie-row">
        {
          allmovie?.map(item=>(
            <img className='movie' src={`${base_url}${isPoster?item.poster_path:item.backdrop_path}`} alt="no image" />
          ))
        }
      </div>
    </div>
  )
}

export default Row