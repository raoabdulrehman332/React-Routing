import React from 'react'

export default function CategoriesChips({category , isChosen , onClick}) {
    const { name } = category
    
  return (
    
        <div onClick={onClick} className={`${isChosen ? 'bg-purple-400 text-white' : 'bg-white text-black'} p-2 px-2 m-2  text-xs cursor-pointer hover:bg-purple-100  border-purple-400 border rounded-md`}>
            <p>
                {name}
            </p>
        </div>
  )
}
