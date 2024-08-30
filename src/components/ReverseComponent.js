import React, { useRef } from 'react'

function ReverseComponent() {
  const divRef= useRef([]);
  const generateRandomColor=()=>{
    const randomColor=()=>Math.floor(Math.random()*256).toString(16).padStart(2,'0')
    return `#${randomColor()}${randomColor()}${randomColor()}`
  }

  const handleChangeColor=(index)=>{
    divRef.current[index].style.backgroundColor=generateRandomColor()
  }
  return (
    <div>
      <h1>Color Changing Game</h1>
      <div className='mainContainer'>

        {[0,1,2,3,4,5].map(item=>{
          return(
            [1,2,3,4,5].map(innnerItem=>{
              if(item>innnerItem){
                const uniqueIndex=item*6+innnerItem
                return( <div 
                  ref={(e)=>divRef.current[uniqueIndex]=e} 
                  className='inner-box' 
                  onClick={()=>handleChangeColor(uniqueIndex)}
                  style={{backgroundColor:generateRandomColor()}} ></div>)
              }
              else return(
                <div></div>
              )
             
            })
          )
        })}
       
      </div>
    </div>
  )
}

export default ReverseComponent
