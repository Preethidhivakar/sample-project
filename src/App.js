import React from "react";
import "./App.css";

import { useState } from "react";
// import { List } from "./List";

import Color from "./Color.js";
import Welcome from "./Welcome.js";
import Add from "./Add.js";
import { Switch, Route, Link,Redirect } from "react-router-dom";
import { Error } from "./Error";
import MovieList from "./MovieList";

export default function App() {
  let movie = [
    {
      name: "WonderPark",
      url: "https://i.pinimg.com/564x/64/b2/b1/64b2b1e2156ed9a97249183f4346580b.jpg",
      year: " 2012",
      rating: "6.8",
      download: "Download",
      summary:
        " Buckle up for an epic adventure where anything is possible. A young girl named June with a big imagination makes an incredible discovery -- the amusement park of her dreams has come to life. ",
    },
    {
      name: "Raya The Last Dragon",
      url: "https://i.pinimg.com/564x/3b/6b/db/3b6bdb212f1cf67e3b369148da7f2805.jpg",
      year: " 2015",
      rating: "9.8",
      download: "Download",
      summary:
        "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. However, when sinister monsters known as the Druun threatened the land. ",
    },

    {
      name: "Frozen",
      url: "https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg",
      year: " 2009",
      rating: "7.8",
      download: "Download",

      summary:
        "When their kingdom becomes trapped in perpetual winter, fearless Anna (Kristen Bell) joins forces with mountaineer Kristoff (Jonathan Groff) and his reindeer sidekick to find Anna's sister. ",
    },
    {
      name: "Wall-E",
      url: "https://i.pinimg.com/originals/7d/11/26/7d11268c28deccd346a5bc59f6246f2c.jpg",
      year: " 2011",
      rating: "8.9",
      download: "Download",
      summary:
        " WALL-E, short for Waste Allocation Load Lifter Earth-class, is the last robot left on Earth. He spends his days tidying up the planet. ",
    },

    {
      name: "Hotel Transylvania",
      url: "https://m.media-amazon.com/images/M/MV5BMTM3NjQyODI3M15BMl5BanBnXkFtZTcwMDM4NjM0OA@@._V1_.jpg",
      year: " 2018",
      rating: " 8.8",
      download: "Download",
      summary:
        " When monsters want to get away from it all, they go to Count Dracula's (Adam Sandler) Hotel Transylvania, a lavish resort where they can be themselves without humans . ",
    },
    // {
    //   name: " Meatballs",
    //   url: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a239f11c8da6f8b476408b7d4ab7efedec9e9cad7c36fd88c6303a570ae9349b._RI_V_TTW_.jpg",
    //   year: " 2008",
    //   rating: "7.8",
    //   download: "Download",
    //   summary:
    //     "When hard times hit Swallow Falls, its townspeople can only afford to eat sardines. Flint Lockwood, a failed inventor, thinks he has the answer to the town's crisis. He builds a machine that converts water into food, and becomes a local hero when tasty treats fall from the sky like rain. But when the machine spins out of control and threatens to bury the whole world under giant mounds of food, Flint finds he may have bitten off more than he can chew.",
    // },
  ];
  const [movieList, setMovieList] = useState(movie);
 
  return (
    <div >
      <ul  className="route">
        <div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movie">Movie</Link>
        </li>
        <li>
          <Link to="/Color">Color</Link>
        </li>
        <li>
          <Link to="/addmovie">AddMovie</Link>
        </li>
        </div>
      </ul>

      <Switch>
      <Route exact path="/">
          <Welcome />
          </Route>
        <Route path="/films">
          <Redirect to="/movie" />

        </Route>

        {/* this type also used means the default  page to show on welcome */}
{/* <Route exact path="/">
<Welcome />
</Route> */}
        <Route path="/Color">
          <Color />
        </Route>

        

          {/* <Route path="/Add">
          <Add /> */}

          <Route path="/movie">
            <MovieList movieList={movieList} setMovieList={setMovieList}/>
          </Route>

          <Route path="/addmovie">
            <Add movieList={movieList} setMovieList={setMovieList}/>
          </Route>
<Route path="**">
  <Error/>
</Route>

          
        {/* </Route> */}

      </Switch>
    </div>
  );
}




