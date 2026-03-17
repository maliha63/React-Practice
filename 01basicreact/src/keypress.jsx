import React, { useState } from 'react'

const Keypress = () => {
const [data , setData] = useState("")

  return (
    <div>
      <input type="text" 
      value={data}
      onChange={(e) => setData(e.target.value)}
      
      />
      <p>{data}</p>
    </div>
  )
}

export default Keypress
