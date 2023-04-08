import React, { useState } from 'react'
import List from './List';

export default function SimpleTodo() {
   const [inputlist,setinput]=useState(" ");
   const [items,setitems]=useState([]);
    const input=(e)=>{

       setinput(e.target.value)
    };
    const listofitems=()=>{
         setitems((olddata)=>{
            //no need of push
            return [...olddata,inputlist];
         })
         setinput(" ")
    };
    const deleteItems=(id)=>{
      setitems((olddata,index)=>{
          return olddata.filter((value,index)=>{
               return index!==id;
          })
      })
    };
  
  return (
   <>
    <div className='main_div'>
          <div className='center_div'>
            <br/>
            <h1 className='heading'>ToDO List</h1>
          <input placeholder='Add a items' type='text' value={inputlist} onChange={input} ></input>
          <button className='add' onClick={listofitems}> + </button>
         {/* when click on button that time display the array  */}
          <ul>
           {
            items.map((value,index)=>{
             return (
             <List 
             key={index} 
             text={value}  
             id={index}
             onselect={deleteItems}
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
