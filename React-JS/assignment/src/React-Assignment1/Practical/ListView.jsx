import React, { useState } from 'react'

export default function ListView() {
    const [list,setList] = useState('');
    const [listdata,setListdata] = useState([])

    const handleClick = () => {
        setListdata([...listdata,list])
        setList("")
    }

  return (
    <div>
        <input type="text" value={list} onChange={(e)=>setList(e?.target?.value)}/>
        <button onClick={handleClick}>Click</button>
        {
            listdata.map((e,i) =>{
                return <ul key={i}>
                    <li>{e}</li>
                </ul>
            })
        }
    </div>
  )
}
