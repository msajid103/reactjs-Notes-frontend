import React from 'react'
import NoteCard from './NoteCard'

const NoteCardContainer = ({data}) => {
  return (
    <div className="container">
    <div className="note-has-grid row">
      
    {data.map((item, index) => (
          <NoteCard key={index} data={item} />
        ))}    
     
      
    </div>
    </div>
  )
}

export default NoteCardContainer