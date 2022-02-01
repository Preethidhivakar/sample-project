import React from 'react';
import "./App.css";
import { useState } from "react";
import TextareaAutosize from '@mui/material/TextareaAutosize';



export default function Color(){
  const [color, setColor] = useState("pink");
  const styles = { background: color };
  
  const [colorList, setColorList] = useState(["orange", "crimson", "cyan"]);
  return (
    <div className='add-color'>
      
      <TextareaAutosize
        aria-label={color}
        placeholder="Enter a color"
        style={styles}
        onChange={(event) => setColor(event.target.value)} />
      <button onClick={() => setColorList([...colorList, color])}>AddColor</button>
      {colorList.map((clr) => (<ColorBox cool={clr} />))}

    </div>
  );
}
function ColorBox({ cool }) {
  const styles = {
    height: "20px",
    width: "200px",
    background: cool,
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}