import React from 'react'
import Filter from '../components/Filter'
import NoteCardContainer from '../components/NoteCardContainer'

const HomePage = ({data}) => {
  return (
    <>
     <Filter/>
     <NoteCardContainer data = {data}/>
    </>
  )
}

export default HomePage