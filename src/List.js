import { useState } from "react";
import Card from "@mui/material/Card";
import { IconButton } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { IconButton } from "@mui/material";
import { Counter } from "./Counter";
import "./App.css";
import { HalfRating } from "./HalfRating";
import { AlertDialog } from "./AlertDialog";
// import HalfRating from "./App"
// import AlertDialog from "./App"
// import Counter from "./App"


export default function List({ Poster, pic, sum, released, dow ,deleteButton}) {
    // const styles={ color: rat >= 8.5 ? "teal" : "crimson"};
    const [display, setDisplay] = useState(true);
  
    return (
      <div className="movie-items">
        <img className="picture1" src={pic} alt="Poster" />
  
        <h1 className="head"> {Poster}</h1>
        <p className="para1">
          <span className="mov-rel">Release year -</span>
          {released}
        </p>
        <HalfRating />
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
        <AlertDialog />
        <Counter />
        {deleteButton}
  
        <div className="cd">
            <div className="show-icon">
          <IconButton 
            className="but"
            onClick={() => setDisplay(!display)}
            variant="contained"
          >
           {display? <ExpandLessIcon/>:<ExpandMoreIcon/>}
          </IconButton>
          </div>
          <div className="cd1">
            {display ? (
              <p className="para">
                <span className="mov-sum">Movie Summary :</span>{" "}
                <Card variant="outlined">{sum}</Card>
              </p>
            ) : null}
          </div>
        </div>
        {/* <BasicTextFields/> */}
        {/* <AddColor/> */}
      </div>
    );
  }
  

