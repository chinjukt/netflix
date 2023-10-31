import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Banner.css'

function Banner({fetchurl}) {

    const [movie, setmovie] =useState()
    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchdata =async ()=>{
      const {data}= await instance.get(fetchurl)
    //   const {results} = data
    //   console.log(data.results[Math.floor(Math.random()*data.results.length)]);
      setmovie(data.results[Math.floor(Math.random()*data.results.length)]);
      
    }

    console.log(movie);

    useEffect(()=>{
      fetchdata()
    },[])
  return (
    <div style={{height:'600px',backgroundImage:`url(${base_url}${movie?.backdrop_path})`,backgroundAttachment:'fixed',backgroundPosition:'center',backgroundSize:'cover'}}>
       <div className="banner-content">
        <h1>{movie?.name}</h1>
        <button className='btn btn-danger'><i class="fa-solid fa-play"></i> Play</button>
        <button className='btn btn-outline-light ms-3'>More Info <i class="fa-solid fa-caret-down"></i></button>
        <h2>{movie?.overview?.slice(0,200)} ...</h2>
        </div> 
    </div>
  )
}

export default Banner