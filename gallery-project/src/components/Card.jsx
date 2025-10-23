import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.elem.url}>
            <div className='h-40 ' >
        <img className='h-full w-full object-cover rounded-xl ' src={props.elem.download_url} /> 
        </div> 
        <h2 className='font-bold text-lg'>{props.elem.author}</h2>

        </a>
       
    </div>
  )
}

export default Card
