import React from 'react';
import "./App.css";

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

import {useState} from "react";

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';



import Tooltip from '@mui/material/Tooltip';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import TextField from '@mui/material/TextField';







export default function App() {
  let movie = [
    {
      name: "Frozen",
      url:
        "https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg",
      year: " 2009",
      rating: "7.8",
      download:"Download",

      summary:
        "When their kingdom becomes trapped in perpetual winter, fearless Anna (Kristen Bell) joins forces with mountaineer Kristoff (Jonathan Groff) and his reindeer sidekick to find Anna's sister, Snow Queen Elsa (Idina Menzel), and break her icy spell. Although their epic journey leads them to encounters with mystical trolls, a comedic snowman (Josh Gad), harsh conditions, and magic at every turn, Anna and Kristoff bravely push onward in a race to save their kingdom ."
    },
    {
      name: "Wall-E",
      url:
        "https://i.pinimg.com/originals/7d/11/26/7d11268c28deccd346a5bc59f6246f2c.jpg",
      year: " 2011",
      rating: "8.9",
      download:"Download",
      summary:
        " WALL-E, short for Waste Allocation Load Lifter Earth-class, is the last robot left on Earth. He spends his days tidying up the planet, one piece of garbage at a time. But during 700 years, WALL-E has developed a personality, and he's more than a little lonely. Then he spots EVE (Elissa Knight), a sleek and shapely probe sent back to Earth on a scanning mission. Smitten WALL-E embarks on his greatest adventure yet when he follows EVE across the galaxy."
    },
    {
      name: "WonderPark",
      url:
        "https://i.pinimg.com/564x/64/b2/b1/64b2b1e2156ed9a97249183f4346580b.jpg",
      year: " 2012",
      rating: "6.8",
      download:"Download",
      summary:
        " Buckle up for an epic adventure where anything is possible. A young girl named June with a big imagination makes an incredible discovery -- the amusement park of her dreams has come to life. Filled with the world's wildest rides and operated by fun-loving animals, the excitement never ends. But when trouble hits, June and her misfit team of furry friends begin an unforgettable journey to save the park."
    },
    {
      name: "Raya The Last Dragon",
      url:
        "https://i.pinimg.com/564x/3b/6b/db/3b6bdb212f1cf67e3b369148da7f2805.jpg",
      year: " 2015",
      rating: "9.8",
      download:"Download",
      summary:
        "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. However, when sinister monsters known as the Druun threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, those same monsters have returned, and it's up to a lone warrior to track down the last dragon and stop the Druun for good."
    },
    {
      name: "Hotel Transylvania",
      url:
        "https://m.media-amazon.com/images/M/MV5BMTM3NjQyODI3M15BMl5BanBnXkFtZTcwMDM4NjM0OA@@._V1_.jpg",
      year: " 2018",
      rating: " 8.8",
      download:"Download",
      summary:
        " When monsters want to get away from it all, they go to Count Dracula's (Adam Sandler) Hotel Transylvania, a lavish resort where they can be themselves without humans around to bother them. On one special weekend, Dracula invites creatures like the Invisible Man, the Mummy and others to celebrate the 118th birthday of his daughter, Mavis (Selena Gomez). However, an unforeseen complication unfolds when an ordinary human unwittingly crashes the party and falls in love with Mavis."
    },
    {name:" Meatballs",
    url:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a239f11c8da6f8b476408b7d4ab7efedec9e9cad7c36fd88c6303a570ae9349b._RI_V_TTW_.jpg",
    year: " 2008",
    rating:"7.8",
    download:"Download",
    summary:"When hard times hit Swallow Falls, its townspeople can only afford to eat sardines. Flint Lockwood, a failed inventor, thinks he has the answer to the town's crisis. He builds a machine that converts water into food, and becomes a local hero when tasty treats fall from the sky like rain. But when the machine spins out of control and threatens to bury the whole world under giant mounds of food, Flint finds he may have bitten off more than he can chew."
  
  }

  ];
const[movieList,setMovieList]=useState(movie);
  const[name,setName]=useState("");
  const[url,setUrl]=useState("");
   const[year,setYear]=useState("");
  // const[down,setDown]=useState("");
  // const[list,setList]=useState([]);
      // const date={name,img,year}
 
      


  return (
    <div className="movielist">



<div className="movie-form">
  <div className='card'>
        <TextField id="outlined-basic" label="Name" variant="outlined"
        value={name}
       
        onChange={(event) => setName(event.target.value)}
/><br></br>
<TextField id="outlined-basic" label="Image" variant="outlined"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
/><br></br>
< TextField id="outlined-basic" label="year" variant="outlined"
        value={year}
        
        onChange={(event) => setYear(event.target.value)}
/><br></br></div>

<div className="card1"><Button variant="outlined" onClick={()=>{
  const newMovie={
    name:name,
    url:url,
    year:year,
  };
  setMovieList([...movieList,newMovie]);
}}
>Add Movie</Button></div>
    
  </div>
  {/* <movieList movies={movieList} /> */}
{/* 
        
      </div> */}
    
  

      

      
      {movieList.map(({ name, url, summary, year, rating,download }) => (
        <List
          Poster={name}
          pic={url}
          sum={summary}
          released={year}
          rat={rating}
          dow={download}
        />

        
      ))}
     
   
   
    </div>
      
    
    
  );
}




function Counter(){
  const[like,setLike]=useState(10);
  const[dislike,setDislike]=useState(10);
  const [open, setOpen] =useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return(
    <div className="like-dislike-buttons">
      <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title="Like">
     < Button onClick={()=>setLike(like+1)} color="error">👍{like}</Button></Tooltip>
     <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title="DisLike">
     < Button onClick={()=>setDislike(dislike-1)} color="error">👎{dislike}</Button></Tooltip>
        
     
    </div>
  );
     }


     function AlertDialog() {
      const [open, setOpen] = useState(false);
    
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      return (
        <div className='link'>
          <Button variant="outlined" onClick={handleClickOpen}>
            Download
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
           
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
              Download Successfully !!!
              </DialogContentText>
            </DialogContent>

            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose} >
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }


    
    
     
    
    
    
    function HalfRating() {
      return (
        <div className="star">
        <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />

        </Stack>
        </div>
        );
      }



      function BasicTextFields() {
        return (
          
          <div className='bo'>
            <TextField id="outlined-basic" label="Comment" variant="outlined" />
            
            </div>
        );
      }



function List({ Poster, pic, sum, released, dow}) {
  
  // const styles={ color: rat >= 8.5 ? "teal" : "crimson"};
  const [display, setDisplay] = useState(false);
  
  return (
    
  
      <div className="movie-items">
     
    
      <img className="picture1" src={pic} alt="Poster" />
      
      <h1 className="head"> {Poster}</h1>
      <p className="para1"><span className="mov-rel">Release year -</span>{released}</p>
      <HalfRating/>
      {/* <p  className="star" style={styles}><span className="mov-rat">Rating:</span>{rat}</p> */}
      {/* <a className="link" href="Download" target="blank">{dow}</a><br></br> */}
     {/* <div className="link"> 
     <stack>
     <Link  href="#" underline="none">
        {'Download'}
        <Alert severity="success">Download Successfully !!!</Alert>
      </Link>
      </stack>
      </div> */}
      <AlertDialog/>
      <Counter/>

      
      <div className="cd">
      
     <Button className="but" onClick={()=>setDisplay(!display)} variant="contained">Summary</Button>
     <div className="cd1">
      {
        display?<p className="para"><span className="mov-sum">Movie Summary :</span> <Card  variant="outlined" >{sum}</Card></p>:null
      }

      
  </div>
  </div>
  <BasicTextFields/>
  {/* <AddColor/> */}
 
    </div>
    
  );
}


  
//   return(
//     <div className="hii">
//       <input  placeholder="movie-img" value={img} onChange={(e)=>setImg(e.target.value)}/>
//       <input placeholder="movie-name" value={name} onChange={(e)=>setName(e.target.value)}/>
//       <input placeholder="movie-year" value={year} onChange={(e)=>setYear(e.target.value)}/>
//       <button onClick={()=>setList([...list,date])}>submit</button>
//       {
// list.map((a)=><div className="cool">
 
//  <img className="picture" src={a.img} alt=" movie-poster"/>
//  <h3 className="text">{a.name}</h3>
//  <h3 className="yr">{a.year}</h3>

//   </div>)
//       }
//     </div>
//   );
// }


// // function AddColor(){
// //   const[color,setColor] =useState(["orange","crimson","teal"]);
// //   const[colorList,setColorList]=useState([
// //     "teal"
// //   ]);
// //   const styles={background:color};
  
// //   return(
// //     <div className="cl">
// // {/* typing => onchange > setcolor > informing react that color is updated */}
// //       <input value={color}
// //       placeholder="enter a color"
// //       style={styles}
// //       onChange={(event)=>setColor(event.target.value)}
// //       />
// //       {/* create a copy of colorList and add new color to it */}
// //       <button onClick={()=> setColorList([...colorList, color])}>add</button>
// //       {
// //         colorList.map((clr)=>(
// //           <ColorBox cool={clr}/>

// //         ))
// //       }
// //     </div>
// //   );
// // }


// // function ColorBox({cool}){
// //   const styles={
// //     height:"25px",
// //     width:"250px",
// //     background:cool,
// //     marginTop:"10px",

// //   };
// //   return <div style={styles}></div>;
// // }


// //input field


// import Button from '@mui/material/Button';
// export default function ColorButtons() {
//   return (
    
//       <Button variant="outlined" color="error">
//         Error
//       </Button>
//   )
// }