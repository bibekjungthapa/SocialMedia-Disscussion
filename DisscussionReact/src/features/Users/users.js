import React from 'react';
import {useState} from 'react';
import {reset, change} from "./users.slice";
import {useDispatch, useSelector} from "react-redux";

const Users = () => {
    const[inputName,setInputName]=useState('')
    const dispatch = useDispatch();
   
    const { name } = useSelector((state) => state.users);
    const resetname=()=>{
        dispatch(reset());
    }
    // const { change } = useSelector((state) => state.users);

    const changeAble=()=>{
        dispatch(change(inputName));
    }

   
   
  return (
    <div>
    
    <h2>Current Users : {name} </h2>
      <button onClick={()=>{
        resetname()
      }}>Reset</button>
      
      <button onClick={()=>{
        changeAble()
      }}>Changeable</button>
      
      <input type='text' placeholder="Enter the name" 
      onKeyUp={(e)=>{setInputName(e.target.value)}}
      ></input>
    </div>
  );
   
};
export default Users;
