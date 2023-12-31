import React from 'react'

const AnimeInfo = (props) => {
    const{title,images:{jpg:{large_image_url}},broadcast:{day,time},year,episodes,source,rank,type,score,popularity,members,status,rating,duration}=props.animeInfo
  return (
    <div className='container'>
        <div className="anime-content">
            <h3>{title}</h3><br />
            <img src={large_image_url} alt="Anime Image" />
            <div className="info">
                <h3>#Rank:  {rank}</h3>
                <h3>#Source: {source}</h3>
                <h3>#Score: {score}</h3>
                <h3>#Type: {type}</h3>
                <h3>#Episodes : {episodes}</h3>
                <h3>#Year: {year}</h3>
                <hr /><br/>
                <h4>#Broadcast: {day} "{time}"</h4>
                <h4>#Popularity:  {popularity}</h4>
                <h4>#Members:  {members}</h4>
                <h4>#Status:  {status}</h4>
                <h4>#Rating: {rating}</h4>
                <h4>#Duration:  {duration}</h4>
            </div>
        </div>
      
    </div>
  )
}

export default AnimeInfo
