import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';


const App =  () => {

  const [userData, setUserData] = useState([])
  const [index, setindex] = useState(1)


  const getData = async ()=>{
    const response  = await axios.get(`https://picsum.photos/v2/list?page=7${index}&limit=10`)

    setUserData(response.data)

    
    
    
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if(userData.length > 0){
    printUserData = userData.map(function(elem,idx){
      return <div key={idx}>
        < Card  elem = {elem} />

      </div> 

      
      

    })
  }

  return (
    <div className='bg-black h-screen p-4 text-white'>
      <h1>{index}</h1>
      
      <div className='flex flex-wrap h-[80] gap-5   p-2'>
        {printUserData}
      </div>

      <div className='flex justify-center gap-6 items-center p-4 '>
        <button onClick={()=>{
          if (index > 1){
            setindex(index-1)
          }
          
        }} className='bg-amber-500  cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold '>-</button>

        <h3>Page {index}</h3>
        <button onClick={()=>{
          setindex(index+1)
        }} className='bg-amber-500 cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold '>+</button>
      </div>
      
    </div>
  )
}

export default App
