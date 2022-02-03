import React from "react";
import List from "./List"
import "./App.css";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

 export default function MovieList({movieList,setMovieList}){
     return(
         <div className="movie-container">
             {movieList.map(({ name, url, summary, year, rating, download,index }) => (
              <List
              key={index}
                Poster={name}
                pic={url}
                sum={summary}
                released={year}
                rat={rating}
                dow={download}
                deleteButton={
                    <IconButton aria-label="delete" color="error"
                    onClick={()=>
                    {
                        console.log(index);
                        const copyMovieList=[...movieList];
                        copyMovieList.splice(index,1);
                        setMovieList(copyMovieList);
                    }}
                    >
                        <DeleteIcon />
                    </IconButton>
                }
              />

              ))}
         </div>
     )
 }