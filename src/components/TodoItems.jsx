import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_tick from '../assets/delete.png'

const TodoItems = ({text,id,isComplete,toggle,deleteTodo}) => {
  const handleDelete=()=>{
    deleteTodo(id)
  }
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor pointer'>
            <img src={isComplete?tick :not_tick }alt='' className='w-7'></img>
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete?'line-through':""}`}>{text}</p>
        </div>
        <img onClick={handleDelete} src={delete_tick} alt="" className='w-3.5 cursor-pointer'/>
      
    </div>
  )
}

export default TodoItems
