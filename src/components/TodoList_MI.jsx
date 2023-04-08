import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import List_MI from './List_MI';


export default function TodoList_MI() {
const [inputlist,setinput]=useState("")
const [items,setNewitems]=useState([]);

  const inputevent=(e)=>{
    setinput(e.target.value);
  }
  const addlist=()=>{
     setNewitems((olddata)=>{
      return [...olddata,inputlist]
     });
     setinput(" ");
  }
  return (
    <>
      {/* <h1 className='heading'>Hello World!</h1> */}
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1 className='heading'>ToDO List</h1>
          <input placeholder='Add a items' type='text' value={inputlist} onChange={inputevent} ></input>
          <Button className='addbtn' style={{
            borderRadius: 50,
            backgroundColor: "purple",
            fontSize: "18px"
          }} onClick={addlist} > <AddIcon className='add'/> </Button>
          <ul style={{listStyleType:"none"}} >
            {
              items.map((value,index)=>{
                return (
                  <List_MI 
                    text={value}
                    key={index}
                  />
                )
              })
            }
          </ul>

          
        </div>
      </div>


    </>
  )
}
