import React, { useEffect, useState } from "react";
import "./components/style.css";
import "./App.css";
import AnimeList from "./components/AnimeList";
import AnimeInfo from "./components/AnimeInfo";
import MyList from "./components/MyList";




function App() {
  const [search, setSearch] = useState("");
  const [animeData, setAnimeData] = useState();
  const [animeInfo, setAnimeInfo] = useState();
  const [myAnimeList, setMyAnimeList] = useState([]);

  const addTo = (anime) => {
    const index = myAnimeList.findIndex((myanime) => {
      return myanime.mal_id === anime.mal_id;
    });
    if (index < 0) {
      const newArry = [...myAnimeList, anime];
      setMyAnimeList(newArry);
    }
  };
  const removeFrom = (anime) => {
    const newArray = myAnimeList.filter((myanime) => {
      return myanime.mal_id !== anime.mal_id;
    });
    setMyAnimeList(newArray);
  };
  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}`);
    const resData = await res.json();
    setAnimeData(resData.data);
  };

  useEffect(() => {
    getData();
  }, [search]);
  return (
    <>

    <div className="App">
      {/* <div className="header"> */}
        <h1>MyAnimaeList</h1>
        <div className="search-box">
          <input type="text" class="searchTerm" placeholder="Search for anime" onChange={(e) => setSearch(e.target.value)}/>
        </div>
      {/* </div> */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ainfo">
              <div className="animeInfo">
                {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
              </div>
            </div>
          </div>
        </div>
      
            <div className="anime-row">
          <h2 className="text-heading">Anime</h2>
          <div className="row">
            <AnimeList
              animelist={animeData} setAnimeInfo={setAnimeInfo} handleList={(anime) => addTo(anime)} />
          </div>
          <h2 className="text-heading">My List</h2>
          <div className="row">
            <MyList animelist={myAnimeList} setAnimeInfo={setAnimeInfo} handleList={(anime) => removeFrom(anime)} />
          </div>
        </div>
      </div> 
      
      </div>
      </>
      
  );
}

export default App;
