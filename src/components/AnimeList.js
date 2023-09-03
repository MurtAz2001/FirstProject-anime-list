import React from 'react'
import { Link } from 'react-router-dom';


export const AnimeList = ({animelist, setAnimeInfo,  handleList}) => {
    return (
    <>
        {
            animelist ?(
                animelist.map((anime,index)=> {
                    return(
                        <div>
                        <div className="card" key={index}  >
                          <div className="card-body">
                            <img
                              src={anime.images.jpg.large_image_url} className="card-img-top" alt="..."/>
                            <div className="anime-info">
                                <h4>{anime.title}</h4>
                                <div className="overlay">
                                    <h4>{anime.title_english}</h4>
                                    <h3>Synopsis</h3>
                                    <div className="synopsis">
                                        <p>{anime.synopsis}</p>
                                    </div>
                                    <button type="button" className="add btn-primary"  onClick={() =>handleList(anime)}>Add to MyList</button>
                                     <button type="button" className="btninfo btn-primary"  onClick={() =>setAnimeInfo(anime)} >INFO</button> 
                                </div>
                                </div>
                          </div>
                        </div>
                      </div>
                    )
                })

            ): "NOT FOUND"
        }
      
    </>
  )
}

export default AnimeList



{/* <button type="button" className="btninfo btn-primary"  onClick={() =>setAnimeInfo(anime)} >INFO</button> */}
