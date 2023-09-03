import React from 'react'

export const MyList = ({animelist, setAnimeInfo,  handleList}) => {
    return (
    <>
        {
            animelist ?(
                animelist.map((anime,index)=> {
                    return(
                      <div>
                      <div className="card" key={index} onClick={() =>setAnimeInfo(anime)} >
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
                                  <button type="button" className="add btn-primary"  onClick={() =>handleList(anime)}>Remove from MyList</button>
                                  <button type="button" className="btninfo btn-primary" onClick={() =>setAnimeInfo(anime)} >INFO</button>
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

export default MyList



