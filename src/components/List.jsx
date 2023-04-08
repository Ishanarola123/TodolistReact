import React from 'react'

export default function List(props) {
   
    return (
        <>
        <div className='Tododstyle'>
          <i className="fa fa-trash" onClick={()=>{
             props.onselect(props.id)
          }}></i>
          <li> {props.text}</li>
         
        </div>
          
             
        </>
    )
}
