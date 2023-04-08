import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
export default function List_MI(props) {
const [line,setLine]=useState(false);

    const cutIt=()=>{
      setLine(true);
    }
    return (
        <>
            <div className='Tododstyle'>
               <span className='deleteicon' onClick={cutIt}><DeleteIcon/></span>
                <li style={{textDecoration: line ? "line-through" : ""}}>{props.text}</li>
            </div>

        </>


    )
}
