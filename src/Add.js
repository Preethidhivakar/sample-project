import "./App.css";
// import App from "./App";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

export default function Add ({movieList,setMovieList}){


    // const [movieList, setMovieList] = useState(movie);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [year, setYear] = useState("");
    return(
        <div>
<div className="movielist">
            <div className="movie-form">
              <div className="card">
                
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <br></br>
                <TextField
                  id="outlined-basic"
                  label="Image"
                  variant="outlined"
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                />
                <br></br>
                <TextField
                  id="outlined-basic"
                  label="year"
                  variant="outlined"
                  value={year}
                  onChange={(event) => setYear(event.target.value)}
                />
                <br></br>
              </div>
              

              <div className="card1">
                <Button
                  variant="outlined"
                  onClick={() => {
                    const newMovie = {
                      name: name,
                      url: url,
                      year: year,
                    };
                    setMovieList([...movieList, newMovie]);
                  }}
                >
                  Add Movie
                </Button>
              </div>
            </div>
            {/* <movieList movies={movieList} /> */}
            {/* 
        
      </div> */}

            
              </div>
              </div>

    );
}

