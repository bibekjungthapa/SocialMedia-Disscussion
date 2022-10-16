
import React, {useState} from 'react';
import "../../App.css"

import {useDispatch, useSelector} from "react-redux";
import { changeWidth, changeHeight,changeColor } from './redbox.slice';
const RedBox = () => {
    const dispatch = useDispatch()
   
    const {width,height, padding, backgroundColor} = useSelector((state)=>state.Redbox)
  return (
      <>
      {width ? (
        <div
        className="App"
            style={{
                backgroundColor:backgroundColor,
                padding: padding + 'px',
                width: width+'px',
                height:height+'px'
            }}
        >
        </div>
        
      ): null}
   <input placeholder="width"
     onKeyUp={(e)=>dispatch(changeWidth(e.target.value))}/>
    <input placeholder="height"
    onKeyUp={(e)=>{
dispatch(changeHeight(e.target.value))
    }}
    />
    <input placeholder="color"
    onKeyUp={(e)=>{
dispatch(changeColor(e.target.value))
    }}
    
    />
    </>
  );
};

export default RedBox;
